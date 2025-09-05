import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <a
      href="https://github.com/SHAIK-RAIYAN"
      target="_blank"
      className="hidden md:block mx-auto">
      <motion.div
        initial={{ scale: 1, boxShadow: "0 0 0px rgba(191,219,254,0)" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(191,219,254,0.3)",
        }}
        transition={{ type: "tween", duration: 0.4 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[rgb(8,10,13)] py-3 px-4 text-white rounded-lg flex justify-center items-center ">
        <GitHubCalendar colorScheme="dark" username="SHAIK-RAIYAN" />
      </motion.div>
    </a>
  );
}

export default Github;
