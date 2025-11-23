import { getSession, setSession, STORAGE_KEYS } from "../utils/storageUtils"; // Now this import works because both are in 'src'

export const fetchLocationData = async () => {
  // 1. CHECK UTILS
  const cached = getSession(STORAGE_KEYS.LOCATION);

  if (cached) {
    return cached;
  }

  try {
    // CHANGE THIS LINE: Call your own backend
    const res = await fetch("/api/location");

    if (!res.ok) throw new Error("Internal API Request Failed");

    const data = await res.json();

    // ... rest of the logic (payload, setSession) remains exactly the same
    const payload = {
      city: data.city,
      timezone: data.timezone,
      country: data.country_name,
      isp: data.org,
    };

    setSession(STORAGE_KEYS.LOCATION, payload);
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
