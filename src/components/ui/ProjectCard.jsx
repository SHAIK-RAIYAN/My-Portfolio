// eslint-disable-next-line
import { motion } from "framer-motion";
import { useState } from "react";
import { FiGlobe } from "react-icons/fi";
import GithubIcon from "../icons/GithubIcon";
import LayersIcon from "./../icons/LayersIcon";

export function ProjectCard({ project }) {
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "anticipate", duration: 1 }}
      viewport={{ once: true, margin: "-70px" }}
      className="group border-border-secondary bg-bg-tertiary hover:border-border-primary relative flex h-full flex-col overflow-hidden rounded-3xl border transition-colors duration-300"
    >
      <div className="bg-bg-primary relative h-48 w-full overflow-hidden">
        <div className="from-bg-secondary/70 group-hover:from-bg-secondary/50 absolute inset-0 z-10 bg-linear-to-t to-transparent opacity-60 group-hover:to-transparent" />
        <img
          src={project.imgSrc}
          alt={project.title}
          className="h-full w-full transform object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="z-20 flex grow flex-col p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="group relative w-fit">
            <h3 className="text-text-primary mb-1 text-xl font-bold">
              {project.title}
            </h3>
            <span className="bg-border-primary absolute bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </div>

          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-primary text-text-muted hover:bg-text-secondary/10 border-border-primary/40 hover:text-text-primary rounded-full border p-2 transition-colors"
                aria-label="View Source Code"
                onMouseEnter={() => setIsGithubHovered(true)}
                onMouseLeave={() => setIsGithubHovered(false)}
              >
                <GithubIcon isHovered={isGithubHovered} />
              </a>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bg-primary text-text-muted hover:bg-text-secondary/10 border-border-primary/40 hover:text-text-primary rounded-full border p-2 transition-colors"
              aria-label="View Live Project"
            >
              <FiGlobe size={18} />
            </a>
          </div>
        </div>

        <p className="text-text-muted mb-6 grow text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="border-border-secondary mt-auto flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-2">
            <LayersIcon size={16} className="text-text-tertiary" />
            <div className="text-text-secondary flex flex-wrap gap-2 font-mono text-xs">
              {project.techStack?.map((tech, i) => (
                <span key={i} className="bg-border-tertiary rounded px-2 py-1">
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
