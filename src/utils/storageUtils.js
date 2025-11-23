export const STORAGE_KEYS = {
  LOCATION: "user_location_data",
  SPOTIFY: "user_spotify_data",
};

export const getSession = (key) => {
  if (typeof window === "undefined") return null; // Next.js SSR Check

  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error reading ${key} from session:`, error);
    return null;
  }
};

export const setSession = (key, value) => {
  if (typeof window === "undefined") return;

  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving ${key} to session:`, error);
  }
};

export const clearSession = (key) => {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(key);
};
