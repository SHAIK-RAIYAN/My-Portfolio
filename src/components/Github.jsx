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
        viewport={{ margin: "0px 0px -20% 0px", once: true }}
        className="border-b-2 border-gray-400 pt-3 mb-3"
      />
      <motion.a
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ type: "tween", duration: 1 }}
        viewport={{ margin: "0px 0px -15% 0px", once: true }}
        href="https://github.com/SHAIK-RAIYAN"
        target="_blank"
        className="block mx-auto overflow-hidden">
        <div className="bg-[rgb(8,10,13)] py-3 px-6 w-full mx-auto text-white rounded-lg flex justify-end items-center border border-dashed border-neutral-700">
          <GitHubCalendar
            colorScheme="dark"
            username="SHAIK-RAIYAN"
            transformData={handleTransform}
            hideTotalCount
            blockSize={10.5}
            blockMargin={4}
          />
        </div>
      </motion.a>
    </div>
  );
}

export default Github;
