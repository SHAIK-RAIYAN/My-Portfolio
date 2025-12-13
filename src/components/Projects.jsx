// eslint-disable-next-line
import { motion } from "framer-motion";
import { MajorProjects, OtherProjects } from "./../data/myProjects";
import { ProjectCard } from "./ui/ProjectCard";
import TextRevealHover from "./ui/TextRevealHover";

function Projects() {
  return (
    <div className="relative pb-40 -mt-20" id="skills">
      <div className="relative mx-auto z-10 md:px-4" id="projects">
        <div className="px-4 py-8">
          <div className="text-3xl text-white flex flex-col">
            <p className="text-xl text-neutral-400 ">Featured</p>

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
            className="border-b-2 border-gray-400 pt-3 mb-3"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {MajorProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="text-3xl text-white mt-3">
            <p className="text-xl text-neutral-400 ">Other</p>
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
            className="border-b-2 border-gray-400 pt-3 mb-3"
          />
          {/* projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
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
