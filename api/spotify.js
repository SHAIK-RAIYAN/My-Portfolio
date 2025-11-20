import querystring from "querystring";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export const getRecentlyPlayed = async () => {
  const { access_token } = await getAccessToken();
  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export default async function handler(req, res) {
  try {
    const response = await getNowPlaying();

    // Case 1: Not playing anything (204) or Error
    if (response.status === 204 || response.status > 400) {
      const recentResponse = await getRecentlyPlayed();
      const recentData = await recentResponse.json();

      if (!recentData.items || recentData.items.length === 0) {
        return res.status(200).json({ isPlaying: false });
      }

      const track = recentData.items[0].track;
      return res.status(200).json({
        isPlaying: false,
        title: track.name,
        artist: track.artists.map((_artist) => _artist.name).join(", "),
        album: track.album.name,
        albumImageUrl: track.album.images[0].url,
        songUrl: track.external_urls.spotify,
      });
    }

    // Case 2: Playing something
    const song = await response.json();

    if (song.item === null) {
      return res.status(200).json({ isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return res.status(200).json({
      isPlaying,
      title,
      artist,
      album,
      albumImageUrl,
      songUrl,
    });
  } catch (error) {
    console.error("Spotify API Error:", error);
    return res.status(500).json({ isPlaying: false });
  }
}
