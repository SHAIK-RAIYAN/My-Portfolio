import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  const [total, setTotal] = useState(null);

  const handleTransform = useCallback((data) => {
    const totalCount = data.reduce((sum, day) => sum + day.count, 0);

    setTimeout(() => {
      setTotal((prev) => {
        if (prev !== totalCount) return totalCount;
        return prev;
      });
    }, 0);

    return data;
  }, []);

  return (
    <div className="px-4">
      
      <h2 className="text-2xl">GitHub Activity</h2>
      {total !== null && (
        <span className="text-neutral-400">Total: {total} contributions</span>
      )}{" "}
      <motion.div
        initial={{ width: 0, opacity: 0.5 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ type: "tween", duration: 1.5 }}
        className="border-b-2 border-gray-400 pt-3 mb-3"
      />
      <a
        href="https://github.com/SHAIK-RAIYAN"
        target="_blank"
        className="hidden md:block mx-auto">
        <div className="bg-[rgb(8,10,13)] py-3 px-6 w-full mx-auto text-white rounded-lg flex justify-center items-center border border-dashed border-neutral-600">
          <GitHubCalendar
            colorScheme="dark"
            username="SHAIK-RAIYAN"
            transformData={handleTransform}
            hideTotalCount
          />
        </div>
      </a>
    </div>
  );
}

export default Github;
