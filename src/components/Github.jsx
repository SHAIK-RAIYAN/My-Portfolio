import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <a href="https://github.com/SHAIK-RAIYAN" target="_blank">
      <motion.div
        initial={{}}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[rgb(8,10,13)] py-3 px-4 text-white rounded-lg flex justify-center items-center">
        <GitHubCalendar colorScheme="dark" username="SHAIK-RAIYAN" />
      </motion.div>
    </a>
  );
}

export default Github;
