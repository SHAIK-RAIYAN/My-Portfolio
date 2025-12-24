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
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50 transition-colors duration-300 hover:border-neutral-600"
    >
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-900 to-transparent opacity-60 group-hover:from-neutral-900/50 group-hover:to-transparent" />
        <img
          src={project.imgSrc}
          alt={project.title}
          className="h-full w-full transform object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="z-20 flex flex-grow flex-col p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="group relative w-fit">
            <h3 className="mb-1 text-xl font-bold text-white">
              {project.title}
            </h3>
            <span className="absolute bottom-1 left-0 h-[1px] w-full origin-left scale-x-0 bg-neutral-300 transition-transform duration-300 group-hover:scale-x-100" />
          </div>

          {/* Icon Links */}
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-neutral-800 p-2 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
                aria-label="View Source Code"
              >
                <FiGithub size={18} />
              </a>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-neutral-800 p-2 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
              aria-label="View Live Project"
            >
              <FiGlobe size={18} />
            </a>
          </div>
        </div>

        <p className="mb-6 flex-grow text-sm leading-relaxed text-neutral-400">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-auto flex items-center justify-between border-t border-neutral-800 pt-4">
          <div className="flex items-center gap-2">
            <FiLayers size={16} className="text-neutral-500" />
            <div className="flex flex-wrap gap-2 font-mono text-xs text-neutral-300">
              {project.techStack?.map((tech, i) => (
                <span key={i} className="rounded bg-neutral-800 px-2 py-1">
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
