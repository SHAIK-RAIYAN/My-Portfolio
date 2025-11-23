import { motion } from "motion/react"; // Keep for the line separator only
import TextAppear from "./ui/TextAppear";
import WordAppear from "./ui/WordAppear";

function About() {
  return (
    <div className="mx-auto py-2" id="about">
      <div className="px-4 py-8">
        <WordAppear word={"About Me"} className="text-3xl text-white" />
        <motion.div
          initial={{ width: 0, opacity: 0.5 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ type: "tween", duration: 1.5 }}
          viewport={{ margin: "0px 0px -25% 0px", once: true }}
          className="border-b-2 border-gray-400 mb-6"
        />

        <TextAppear className="md:text-lg text-sm text-gray-400 leading-relaxed">
          I am a Computer Science Engineering student at Kalasalingam Academy of
          Research and Education and a passionate full-stack developer with a
          strong focus on building scalable and user-friendly web applications.
        </TextAppear>
        <TextAppear className="md:text-lg text-sm text-gray-400 leading-relaxed">
          My expertise spans programming languages such as Java, JavaScript, and
          Python, along with foundational knowledge in Data Structures including
          linked lists, stacks, and queues.
        </TextAppear>
        <TextAppear className="md:text-lg text-sm text-gray-400 leading-relaxed">
          I work extensively with modern web technologies like React.js, HTML,
          CSS, Bootstrap, Tailwind CSS, Node.js, and Express, while leveraging
          databases and tools such as MongoDB, SQL, Git, and GitHub. With a
          continuous drive to learn and adapt, I aim to enhance both
          functionality and user experience in every project I build.
        </TextAppear>

        {/* EDUCATION  */}

        <div className="mt-12">
          <WordAppear word={"Education"} className="text-3xl text-white" />

          <motion.div
            initial={{ width: 0, opacity: 0.5 }}
            whileInView={{ width: "100%", opacity: 1 }}
            transition={{ type: "tween", duration: 1.5 }}
            viewport={{ margin: "0px 0px -25% 0px", once: true }}
            className="border-b-2 border-gray-400 mb-6"
          />

          <TextAppear className="md:text-lg text-sm text-gray-300 font-semibold">
            2022 – 2026 (present): B.Tech in CSE (AIML)
          </TextAppear>
          <TextAppear className="md:text-sm text-xs text-gray-400">
            Kalasalingam Academy of Research and Education — CGPA: 9.08
          </TextAppear>

          <TextAppear className="md:text-lg text-sm text-gray-300 font-semibold">
            2020 – 2022: Intermediate Education
          </TextAppear>
          <TextAppear className="md:text-sm text-xs text-gray-500">
            Krishna Chaitanya Junior College — Percentage: 74.6%
          </TextAppear>

          <TextAppear className="md:text-lg text-sm text-gray-300 font-semibold">
            2019 – 2020: 10th Class
          </TextAppear>
          <TextAppear className="md:text-sm text-xs text-gray-500">
            Dr. Kishore’s Ratnam — Percentage: 95.16%
          </TextAppear>
        </div>
      </div>
    </div>
  );
}

export default About;
