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

      setDisplayData({
        city: location.city,
        time: timeData.timeString,
        text: message,
        isLate: timeData.isLate,
      });
      const message = timeData.isLate
        ? "BRO. Go to sleep. My portfolio will still exist in the morning. Your Sleep cycle won’t." //"You should be sleeping, but since you're here, look at my projects."
        : "Procrastinating? Good strategy. This portfolio offers a significantly higher ROI than doom-scrolling social media."; //"There are thousands of developers coding right now, but you are currently looking at my Portfolio best choice.";
    };

    init();
  }, []);

  if (!displayData) return null;

  return (
    <div className="w-full border border-neutral-600  p-2 md:p-5 rounded-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-neutral-200 text-lg md:text-2xl mb-1 font-pixel">
            It is {displayData.time} in {displayData.city}.
          </h3>
          <p className="text-sm font-medium text-neutral-500 font-mono">
            {displayData.text}
          </p>
        </div>
        <span className="text-2xl">{displayData.isLate ? "🌙" : "⚡"}</span>
      </div>
    </div>
  );
};

export default TimePolice;
