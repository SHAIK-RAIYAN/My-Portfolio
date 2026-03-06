// eslint-disable-next-line
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "../Theme/ThemeProvider";
import WordAppear from "./ui/WordAppear";
import Line from './ui/Line';


function Github() {
  const [total, setTotal] = useState(null);

  const { theme } = useTheme();

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
      <WordAppear
        word={"GitHub Activity"}
        className="text-text-primary text-2xl"
      />
      {total !== null && (
        <span className="text-text-muted">Total: {total} contributions</span>
      )}{" "}
      <Line />
      <motion.a
        initial={{ opacity: 0, y: 40, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 15,
          mass: 1.2,
        }}
        viewport={{ margin: "0px 0px -15% 0px", once: true }}
        href="https://github.com/SHAIK-RAIYAN"
        target="_blank"
        className="mx-auto block overflow-hidden"
      >
        <div className="border-border-secondary bg-bg-secondary text-text-primary mx-auto flex w-full items-center justify-end rounded-lg border border-dashed px-6 py-3">
          <GitHubCalendar
            colorScheme={theme}
            username="SHAIK-RAIYAN"
            transformData={handleTransform}
            hideTotalCount
            blockSize={10.5}
            blockMargin={4}
            theme={{
              light: ["#f1f1f1", "#d4d4d4", "#a3a3a3", "#737373", "#262626"],
              dark: ["#1f1f1f", "#494949", "#797979", "#a1a1a1", "#fafafa"],
            }}
          />
        </div>
      </motion.a>
    </div>
  );
}

export default Github;
