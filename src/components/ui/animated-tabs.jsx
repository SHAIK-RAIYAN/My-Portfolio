import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/accernity";
import Magnet from "./magnet";

const tab1 = [
  { name: "java"},
  { name: "python" },
  { name: "js" },
];

const tab2 = [
  { name: "html"},
  { name: "css" },
  { name: "react" },
  { name: "tailwind" },
  { name: "bootstrap" },
  { name: "node" },
];

const tab3 = [
  { name: "mongo"},
  { name: "sql" },
  { name: "git" },
  { name: "FramerMotion" },
];

const defaultTabs = [
  {
    id: "tab1",
    label: "Languages",
    content: (
      <div className="gap-4 w-full h-full">
        <div className="flex flex-wrap gap-8 relative">
          {tab1.map((skill) => (
            <Magnet key={skill.name} disabled={false} magnetStrength={10}>
              <div className="text-white ">
                <motion.img
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  src={`/${skill.name}.svg`}
                  alt={skill.name}
                  width={70}
                  className="size-18 md:size-25"
                />
              </div>
            </Magnet>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "tab2",
    label: "Web Technologies",
    content: (
      <div className="gap-4 w-full h-full">
        <div className="flex flex-wrap gap-8 relative">
          {tab2.map((skill) => (
            <Magnet key={skill.name} disabled={false} magnetStrength={10}>
              <div className="text-white ">
                <motion.img
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  src={`/${skill.name}.svg`}
                  alt={skill.name}
                  width={70}
                  className="size-18 md:size-25"
                />
              </div>
            </Magnet>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "tab3",
    label: " Databases & Tools",
    content: (
      <div className="gap-4 w-full h-full">
        <div className="flex flex-wrap gap-8 relative">
          {tab3.map((skill) => (
            <Magnet key={skill.name} disabled={false} magnetStrength={10}>
              <div className="text-white ">
                <motion.img
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  src={`/${skill.name}.svg`}
                  alt={skill.name}
                  width={70}
                  className="size-18 md:size-25"
                />
              </div>
            </Magnet>
          ))}
        </div>
      </div>
    ),
  },
];

export const AnimatedTabs = ({ tabs = defaultTabs, defaultTab, className }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  if (!tabs?.length) return null;

  return (
    <div className={cn("w-full  flex flex-col gap-y-1", className)}>
      <div className="flex gap-2 flex-wrap bg-[#2e2e2e98] bg-opacity-50 backdrop-blur-sm p-1 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-3 py-1.5 text-sm font-medium rounded-lg text-white outline-none transition-colors"
            )}>
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-[#000000d1] bg-opacity-50 shadow-[0_0_20px_rgba(225,225,225,0.2)] backdrop-blur-sm rounded-lg"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="w-full p-4 mt-4 bg-[#11111198] shadow-[0_0_20px_rgba(0,0,0,0.2)] text-white bg-opacity-50 backdrop-blur-sm rounded-xl border min-h-60 h-full">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  x: -10,
                  filter: "blur(10px)",
                }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, x: -10, filter: "blur(10px)" }}
                transition={{
                  duration: 0.5,
                  ease: "circInOut",
                  type: "spring",
                }}>
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};
