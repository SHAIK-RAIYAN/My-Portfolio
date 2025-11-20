import { motion } from "motion/react";
import ScrollFloat from "./ui/ScrollFloat";

function About() {
  return (
    <div className=" mx-auto  py-2" id="about">
      <div className="px-4 py-8">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="font-jakarta text-3xl text-white ">
          About me.
        </ScrollFloat>
        <motion.div
          initial={{ width: 0, opacity: 0.5 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ type: "tween", duration: 1.5 }}
          className="border-b-2 border-gray-400 mb-3"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.8 }}
          className="md:text-lg text-sm mb-2 text-gray-400">
          I am a Computer Science Engineering student at Kalasalingam Academy of
          Research and Education and a passionate full-stack developer with a
          strong focus on building scalable and user-friendly web applications.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.8 }}
          className="md:text-lg text-sm mb-2 text-gray-400">
          My expertise spans programming languages such as Java, JavaScript, and
          Python, along with foundational knowledge in Data Structures including
          linked lists, stacks, and queues.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.8 }}
          className="md:text-lg text-sm mb-2 text-gray-400">
          I work extensively with modern web technologies like React.js, HTML,
          CSS, Bootstrap, Tailwind CSS, Node.js, and Express, while leveraging
          databases and tools such as MongoDB, SQL, Git, and GitHub. With a
          continuous drive to learn and adapt, I aim to enhance both
          functionality and user experience in every project I build.
        </motion.div>
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="font-jakarta text-3xl text-white mt-10">
          Education.
        </ScrollFloat>
        <motion.div
          initial={{ width: 0, opacity: 0.5 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ type: "tween", duration: 1.5 }}
          className="border-b-2 border-gray-400 mb-3"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.8 }}
          className="md:text-lg text-sm mb-2 text-gray-400">
          2022 – 2026 (present): B.Tech in Computer Science and Engineering
          AIML, Kalasalingam Academy of Research and Education — CGPA: 9.08
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.8 }}
          className="md:text-lg text-sm mb-2 text-gray-400">
          2020 – 2022: Intermediate Education, Krishna Chaitanya Junior College
          — Percentage: 74.6%
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.8 }}
          className="md:text-lg text-sm mb-2 text-gray-400">
          2019 – 2020: 10th Class, Dr. Kishore’s Ratnam — Percentage: 95.16%
        </motion.div>
      </div>
    </div>
  );
}

export default About;
