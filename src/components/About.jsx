import Line from "./ui/Line";
import TextAppear from "./ui/TextAppear";
import WordAppear from "./ui/WordAppear";

function About() {
  return (
    <div className="mx-auto py-2" id="about">
      <div className="px-4 py-8">
        <WordAppear word={"About"} className="text-text-muted text-lg" />
        <WordAppear word={"Me"} className="text-text-primary text-3xl" />
        <Line />

        <TextAppear className="text-text-tertiary text-sm leading-relaxed md:text-lg">
          I am a Computer Science Engineering student at Kalasalingam Academy of
          Research and Education and a passionate full-stack developer with a
          strong focus on building scalable and user-friendly web applications.
        </TextAppear>
        <TextAppear className="text-text-tertiary text-sm leading-relaxed md:text-lg">
          My expertise spans programming languages such as Java, JavaScript, and
          Python, along with foundational knowledge in Data Structures including
          linked lists, stacks, and queues.
        </TextAppear>
        <TextAppear className="text-text-tertiary text-sm leading-relaxed md:text-lg">
          I work extensively with modern web technologies like React.js, HTML,
          CSS, Bootstrap, Tailwind CSS, Node.js, and Express, while leveraging
          databases and tools such as MongoDB, SQL, Git, and GitHub. With a
          continuous drive to learn and adapt, I aim to enhance both
          functionality and user experience in every project I build.
        </TextAppear>

        <div className="mt-12">
          <WordAppear
            word={"Education"}
            className="text-text-primary text-3xl"
          />

          <Line />

          <TextAppear className="text-text-secondary text-sm font-semibold md:text-lg">
            2022 – 2026 (present): B.Tech in CSE (AIML)
          </TextAppear>
          <TextAppear className="text-text-tertiary text-xs md:text-sm">
            Kalasalingam Academy of Research and Education — CGPA: 9.08
          </TextAppear>

          <TextAppear className="text-text-secondary text-sm font-semibold md:text-lg">
            2020 – 2022: Intermediate Education
          </TextAppear>
          <TextAppear className="text-text-muted text-xs md:text-sm">
            Krishna Chaitanya Junior College — Percentage: 74.6%
          </TextAppear>

          <TextAppear className="text-text-secondary text-sm font-semibold md:text-lg">
            2019 – 2020: 10th Class
          </TextAppear>
          <TextAppear className="text-text-muted text-xs md:text-sm">
            Dr. Kishore’s Ratnam — Percentage: 95.16%
          </TextAppear>
        </div>
      </div>
    </div>
  );
}

export default About;
