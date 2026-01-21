// eslint-disable-next-line
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import Magnet from "./ui/magnet";
import WordAppear from "./ui/WordAppear";

function SkillSet() {
  const skills = [
    { name: "Java" },
    { name: "Python" },
    { name: "JavaScript" },
    { name: "Html" },
    { name: "CSS" },
    { name: "React" },
    { name: "Tailwind" },
    { name: "Bootstrap" },
    { name: "NodeJS" },
    { name: "MongoDB" },
    { name: "MySQL" },
    { name: "Git" },
    { name: "FramerMotion" },
    { name: "Bun" },
    { name: "Docker" },
    { name: "GSAP" },
    { name: "Motion" },
    { name: "NextJS" },
    { name: "Redux" },
    { name: "Shadcn" },
    { name: "Typescript" },
  ];

  return (
    <div className="relative" id="skills">
      <div className="relative z-10 mx-auto mt-10 py-4 pb-40" id="skills">
        <div className="px-4 py-8">
          <div className="text-3xl text-white">
            <WordAppear word={"My"} className="text-lg text-neutral-500" />
            <WordAppear word={"Skills"} className="text-3xl text-white" />
          </div>
          <motion.div
            initial={{ width: 0, opacity: 0.5 }}
            whileInView={{ width: "100%", opacity: 1 }}
            transition={{ type: "tween", duration: 1.5 }}
            viewport={{ margin: "0px 0px -20% 0px", once: true }}
            className="mb-3 border-b-2 border-gray-400 pt-3"
          />

          <div>
            {skills.map((skill, index) => (
              <Magnet key={skill.name} disabled={false} magnetStrength={10}>
                <div className="px-4">
                  <div
                    className="text-white"
                    data-tooltip-id="main-tooltip"
                    data-tooltip-content={skill.name}
                  >
                    <motion.img
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      viewport={{ margin: "0px 0px -15% 0px", once: true }}
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      src={`/skills/${skill.name}.svg`}
                      alt={skill.name}
                      width={20}
                      className="pointer-events-none size-10 md:pointer-events-auto md:size-18"
                    />
                  </div>
                </div>
              </Magnet>
            ))}
          </div>
        </div>
      </div>
      <Tooltip
        id="main-tooltip"
        place="top"
        variant="light"
        style={{
          backgroundColor: "#e5e5e5",
          color: "#000",
          borderRadius: "6px",
          fontSize: "10px",
          zIndex: 20,
        }}
      />
    </div>
  );
}

export default SkillSet;
