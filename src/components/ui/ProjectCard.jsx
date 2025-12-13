// eslint-disable-next-line
import { motion } from "framer-motion";
import { FiGithub, FiGlobe, FiLayers } from "react-icons/fi";
export function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ ease: "anticipate", duration: 1 }}
      viewport={{ once: true, margin: "-70px" }}
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
}
