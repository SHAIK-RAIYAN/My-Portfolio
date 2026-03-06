// eslint-disable-next-line
import { MajorProjects, OtherProjects } from "./../data/myProjects";
import Line from "./ui/Line";
import { ProjectCard } from "./ui/ProjectCard";
import TextRevealHover from "./ui/TextRevealHover";

function Projects() {
  return (
    <div className="relative -mt-20 pb-20" id="skills">
      <div className="relative z-10 mx-auto md:px-4" id="projects">
        <div className="px-4 py-8">
          <div className="text-text-primary flex flex-col text-3xl">
            <p className="text-text-muted text-xl">Featured</p>

            <div className="w-full">
              <TextRevealHover
                word="Projects"
                className="text-text-primary text-2xl font-bold uppercase"
                hoverColor="text-accent-navy dark:text-accent-amber"
              />
            </div>
          </div>
          <Line />

          <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2">
            {MajorProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="text-text-primary mt-3 text-3xl">
            <p className="text-text-muted text-xl">Other</p>
            <div className="w-full">
              <TextRevealHover
                word="Experiments"
                className="text-text-primary text-2xl font-bold uppercase"
                hoverColor="text-accent-navy dark:text-accent-amber"
              />
            </div>
          </div>

          <Line />
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
