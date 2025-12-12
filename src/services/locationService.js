import {
  getLocalData,
  setLocalData,
  STORAGE_KEYS,
} from "../utils/storageUtils.js";

export const fetchLocationData = async () => {
  const cached = getLocalData(STORAGE_KEYS.CITY);

  if (cached) {
    return cached;
  }

  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone; // time zone of user computer. example output - Asia/Kolkata

    let city = "Local Time";
    if (timezone && timezone.includes("/")) {
      city = timezone.split("/").pop().replace(/_/g, " "); //getting kolkata
    }

    const payload = {
      city: city,
      timezone: timezone,
    };
    setLocalData(STORAGE_KEYS.CITY, payload, 2);

    return payload;
  } catch (error) {
    console.error("Timezone detection failed", error);
    return {
      city: "Earth",
      timezone: "UTC",
    };
  }
};

export const calculateLocalTime = (timezone) => {
  try {
    const now = new Date();

    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    if (timezone) {
      options.timeZone = timezone;
    }

    const userTime = now.toLocaleTimeString("en-US", options);

    const hour24Str = now.toLocaleTimeString("en-GB", {
      timeZone: timezone,
      hour: "2-digit",
      hour12: false,
    });

    const hour24 = parseInt(hour24Str, 10);

    const isLate = hour24 >= 23 || hour24 < 5;

    return {
      timeString: userTime,
      isLate: isLate,
      hour24: hour24,
    };
  } catch (error) {
    console.error("Time calculation error", error);
    return null;
  }
};
