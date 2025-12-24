import { useEffect, useState } from "react";
import {
  calculateLocalTime,
  fetchLocationData,
} from "../../services/locationService";

const TimePolice = () => {
  const [displayData, setDisplayData] = useState(null);

  useEffect(() => {
    const init = async () => {
      const location = await fetchLocationData();

      if (!location) return;

      const timeData = calculateLocalTime(location.timezone);

      if (!timeData) return;

      const message = timeData.isLate
        ? "BRO. Go to sleep. My portfolio will still exist in the morning. Your Sleep cycle won’t." //"You should be sleeping, but since you're here, look at my projects."
        : "Procrastinating? Good strategy. This portfolio offers a significantly higher ROI than doom-scrolling social media."; //"There are thousands of developers coding right now, but you are currently looking at my Portfolio best choice.";

      setDisplayData({
        city: location.city,
        time: timeData.timeString,
        text: message,
        isLate: timeData.isLate,
      });
    };

    init();
  }, []);

  if (!displayData) return null;

  return (
    <div className="w-full rounded-2xl border border-neutral-600 p-2 md:p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-pixel mb-1 text-lg text-neutral-200 md:text-2xl">
            It is {displayData.time}.
          </h3>
          <p className="font-mono text-sm font-medium text-neutral-500">
            {displayData.text}
          </p>
        </div>
        <span className="text-2xl">{displayData.isLate ? "🌙" : "⚡"}</span>
      </div>
    </div>
  );
};

export default TimePolice;
