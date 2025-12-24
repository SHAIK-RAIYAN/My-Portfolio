// eslint-disable-next-line
import { motion } from "framer-motion";
import { MajorProjects, OtherProjects } from "./../data/myProjects";
import { ProjectCard } from "./ui/ProjectCard";
import TextRevealHover from "./ui/TextRevealHover";

function Projects() {
  return (
    <div className="relative -mt-20 pb-40" id="skills">
      <div className="relative z-10 mx-auto md:px-4" id="projects">
        <div className="px-4 py-8">
          <div className="flex flex-col text-3xl text-white">
            <p className="text-xl text-neutral-400">Featured</p>

            <div className="w-full">
              <TextRevealHover
                word="Projects"
                className="text-2xl font-bold text-white uppercase"
                hoverColor="text-amber-500"
              />
            </div>
          </div>
          <motion.div
            initial={{ width: 0, opacity: 0.5 }}
            whileInView={{ width: "100%", opacity: 1 }}
            transition={{ type: "tween", duration: 1.5 }}
            viewport={{ margin: "0px 0px -5% 0px", once: true }}
            className="mb-3 border-b-2 border-gray-400 pt-3"
          />

          <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2">
            {MajorProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="mt-3 text-3xl text-white">
            <p className="text-xl text-neutral-400">Other</p>
            <div className="w-full">
              <TextRevealHover
                word="Experiments"
                className="text-2xl font-bold text-white uppercase"
                hoverColor="text-amber-500"
              />
            </div>
          </div>

          <motion.div
            initial={{ width: 0, opacity: 0.5 }}
            whileInView={{ width: "100%", opacity: 1 }}
            transition={{ type: "tween", duration: 1.5 }}
            viewport={{ margin: "0px 0px -5% 0px", once: true }}
            className="mb-3 border-b-2 border-gray-400 pt-3"
          />
          {/* projects */}
          <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2">
            {OtherProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
