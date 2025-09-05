"use client";

import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const projects = [
  {
    title: "WanderNest",
    description:
      "A travel platform offering unique stays and experiences across popular destinations.",
    link: "https://wandernest-sffj.onrender.com/listings",
    imgSrc: "../../src/assets/wandernest.png",
  },
  {
    title: "TripSage",
    description:
      "A personalized trip planning platform that suggests itineraries based on destination, budget, dates, and interests.",
    link: "https://trip-sage.onrender.com/",
    imgSrc: "../../src/assets/tripsage.png",
  },
];

function Projects() {
  return (
    <div className="relative pb-40 -mt-20" id="skills">
      <div className="relative mx-auto z-10 md:w-[80%] md:px-4" id="projects">
        <div className="px-4 py-8">
          <div className="text-3xl text-white">My Projects</div>
          <motion.div
            initial={{ width: 0, opacity: 0.5 }}
            whileInView={{ width: "100%", opacity: 1 }}
            transition={{ type: "tween", duration: 1.5 }}
            className="border-b-2 border-gray-400 pt-3 mb-3"
          />
          <div className="flex flex-wrap justify-start">
            {projects.map((project, index) => (
              <CardContainer key={index} className="inter-var mx-10">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.3] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-2 border">
                  <CardItem translateZ="20" className="w-full p-2">
                    <img
                      src={project.imgSrc}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover group-hover/card:shadow-xl"
                      alt={`${project.title} thumbnail`}
                    />
                  </CardItem>
                  <CardItem
                    translateZ="20"
                    className="text-xl font-bold text-neutral-600 dark:text-white">
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="20"
                    className="text-neutral-500 text-sm mt-2 mb-2 dark:text-neutral-300">
                    {project.description}
                  </CardItem>
                  <CardItem
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    translateZ="20"
                    className="mt-4 text-gray-400 hover:text-white font-mono transition-colors duration-200">
                    Visit {project.title}
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
