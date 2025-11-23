export const STORAGE_KEYS = {
  LOCATION: "user_location_data",
  SPOTIFY: "user_spotify_data",
};

// GET: Checks if data exists AND if it is still valid (not expired)
export const getLocalData = (key) => {
  if (typeof window === "undefined") return null;

  try {
    const itemStr = localStorage.getItem(key);

    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.error(`Error reading ${key} from local storage:`, error);
    return null;
  }
};

export const setLocalData = (key, value, ttlInHours = 2) => {
  if (typeof window === "undefined") return;

  try {
    const now = new Date();

    const item = {
      value: value,
      // Current Time + (Hours * 60 min * 60 sec * 1000 ms)
      expiry: now.getTime() + ttlInHours * 60 * 60 * 1000,
    };

    localStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error(`Error saving ${key} to local storage:`, error);
  }
};

export const clearLocalData = (key) => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(key);
};
