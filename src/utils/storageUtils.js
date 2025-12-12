export const STORAGE_KEYS = {
  CITY: "user_city_data",
  SPOTIFY: "user_spotify_data",
};

// GET Checks if data exists
export const getLocalData = (key) => {
  if (typeof window === "undefined") return null;

  try {
    const itemStr = localStorage.getItem(key);

    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date();

    // Check if the data has expired
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
      // Expiry = Current Time + (Hours * 3600 * 1000)
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
