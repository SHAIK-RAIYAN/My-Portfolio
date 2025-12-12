// eslint-disable-next-line
import { motion } from "framer-motion";
import { FiGithub, FiGlobe, FiLayers } from "react-icons/fi";
import TextRevealHover from "./ui/TextRevealHover";

const MajorProjects = [
  {
    title: "WanderNest",
    description:
      "A travel platform offering unique stays and experiences across popular destinations.",
    link: "https://thewandernest.vercel.app/listings",
    imgSrc: "/project-Images/wandernest.png",
    github: "https://github.com/SHAIK-RAIYAN/WanderNest",
    techStack: ["Node.js", "Express", "MongoDB", "EJS"],
  },
  {
    title: "TripSage",
    description:
      "A personalized trip planning platform that suggests itineraries based on destination, budget, dates, and interests.",
    link: "https://planwithtripsage.vercel.app",
    imgSrc: "/project-Images/tripsage.png",
    github: "https://github.com/SHAIK-RAIYAN/TripSage",
    techStack: ["Node.js", "Gemini AI", "Socket.io", "Tailwind", "EJS"],
  },
];

const OtherProjects = [
  {
    title: "My Gsap Learnings",
    description:
      "A travel platform offering unique stays and experiences across popular destinations.",
    link: "https://my-gsap-animations.vercel.app/",
    imgSrc: "/project-Images/gsap.png",
    github: "https://github.com/SHAIK-RAIYAN/GSAP",
    techStack: ["GSAP", "React", "Tailwind", "Vite"],
  },

  {
    title: "Currency Convertor",
    description:
      "A personalized trip planning platform that suggests itineraries based on destination, budget, dates, and interests.",
    link: "https://fxchange.vercel.app/",
    imgSrc: "/project-Images/currency-convertor.png",
    github: "https://github.com/SHAIK-RAIYAN/currency-convertor-react",
    techStack: ["React", "Vite", "Tailwind", "Framer Motion"],
  },

  {
    title: "Equi Trade",
    description:
      "A personalized trip planning platform that suggests itineraries based on destination, budget, dates, and interests.",
    link: "https://equi-trade.vercel.app/",
    imgSrc: "/project-Images/equitrade.png",
    github: "https://github.com/SHAIK-RAIYAN/EquiTrade",
    techStack: ["React", "Vite", "Framer Motion", "Lenis"],
  },

  {
    title: "Weather widget",
    description:
      "A personalized trip planning platform that suggests itineraries based on destination, budget, dates, and interests.",
    link: "https://findthesky.vercel.app",
    imgSrc: "/project-Images/weatherwidget.png",
    github: "https://github.com/SHAIK-RAIYAN/Weather-Widget",
    techStack: ["React", "Vite", "Material UI", "MUI Icons"],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full bg-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-600 transition-colors duration-300">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-10 opacity-60 group-hover:from-neutral-900/50 group-hover:to-transparent" />
        <img
          src={project.imgSrc}
          alt={project.title}
          className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6 z-20">
        <div className="flex justify-between items-start mb-4">
          <div className="relative group w-fit">
            <h3 className="text-xl font-bold text-white mb-1">
              {project.title}
            </h3>
            <span className="absolute bottom-1 left-0 w-full h-[1px] bg-neutral-300 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </div>

          {/* Icon Links */}
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 rounded-full text-neutral-400 hover:bg-neutral-700 hover:text-white transition-colors"
                aria-label="View Source Code">
                <FiGithub size={18} />
              </a>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-neutral-800 rounded-full text-neutral-400 hover:bg-neutral-700 hover:text-white transition-colors"
              aria-label="View Live Project">
              <FiGlobe size={18} />
            </a>
          </div>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-auto pt-4 border-t border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FiLayers size={16} className="text-neutral-500" />
            <div className="flex gap-2 flex-wrap text-xs text-neutral-300 font-mono">
              {project.techStack?.map((tech, i) => (
                <span key={i} className="bg-neutral-800 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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
