import { motion } from "framer-motion";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTabs } from "./ui/animated-tabs";

function SkillSet() {
  return (
    <div className="relative pb-40 mt-10" id="skills">
      <WavyBackground className="absolute inset-0 w-full h-full z-0">
        <div
          className="relative mx-auto z-10 md:w-[60%] py-4 md:px-4"
          id="skills">
          <div className="px-4 py-8">
            <div className="text-3xl text-white">My Skills</div>
            <motion.div
              initial={{ width: 0, opacity: 0.5 }}
              whileInView={{ width: "100%", opacity: 1 }}
              transition={{ type: "tween", duration: 1.5 }}
              className="border-b-2 border-gray-400 pt-3 mb-3"
            />
            <AnimatedTabs/>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
}

export default SkillSet;
