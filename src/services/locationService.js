import {
  getLocalData,
  setLocalData,
  STORAGE_KEYS,
} from "../utils/storageUtils.js";

export const fetchLocationData = async () => {
  const cached = getLocalData(STORAGE_KEYS.LOCATION);

  if (cached) {
    return cached;
  }

  try {
    const res = await fetch("/api/location");

    if (!res.ok) throw new Error("Internal API Request Failed");

    const data = await res.json();

    const payload = {
      city: data.city,
      timezone: data.timezone,
      country: data.country_name,
      isp: data.org,
    };
    setLocalData(STORAGE_KEYS.LOCATION, payload, 2);

    return payload;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const calculateLocalTime = (timezone) => {
  try {
    const now = new Date();
    const userTime = now.toLocaleTimeString("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const hour24 = parseInt(
      now.toLocaleTimeString("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        hour12: false,
      })
    );

    const isLate = hour24 >= 23 || hour24 < 5;

    return {
      timeString: userTime,
      isLate: isLate,
      hour24: hour24,
    };
  } catch (error) {
    return null;
  }
};
