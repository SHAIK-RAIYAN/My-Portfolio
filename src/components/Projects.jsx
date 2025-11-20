import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const MajorProjects = [
  {
    title: "WanderNest",
    description:
      "A travel platform offering unique stays and experiences across popular destinations.",
    link: "https://thewandernest.vercel.app/listings",
    imgSrc: "/project-Images/wandernest.png",
  },
  {
    title: "TripSage",
    description:
      "A personalized trip planning platform that suggests itineraries based on destination, budget, dates, and interests.",
    link: "https://planwithtripsage.vercel.app",
    imgSrc: "/project-Images/tripsage.png",
  },
];

const projects = [
  {
    title: "My Gsap Learnings",

    description:
      "A travel platform offering unique stays and experiences across popular destinations.",

    link: "https://my-gsap-animations.vercel.app/",

    imgSrc: "/project-Images/gsap.png",
  },

  {
    title: "Currency Convertor",

    description:
      "A personalized trip planning platform that suggests itineraries based on destination, budget, dates, and interests.",

    link: "https://fxchange.vercel.app/",

    imgSrc: "/project-Images/currency-convertor.png",
  },

  {
    title: "Equi Trade",

    description:
      "A personalized trip planning platform that suggests itineraries based on destination, budget, dates, and interests.",

    link: "https://equi-trade.vercel.app/",

    imgSrc: "/project-Images/equitrade.png",
  },

  {
    title: "Weather widget",

    description:
      "A personalized trip planning platform that suggests itineraries based on destination, budget, dates, and interests.",

    link: "https://findthesky.vercel.app",

    imgSrc: "/project-Images/weatherwidget.png",
  },
];

function Projects() {
  return (
    <div className="relative pb-40 -mt-20" id="skills">
      <div className="relative mx-auto z-10 md:px-4" id="projects">
        <div className="px-4 py-8">
          <div className="text-3xl text-white flex flex-col">
            <p className="text-xl text-neutral-400 ">Featured</p>
            <p> Projects</p>
          </div>
          <motion.div
            initial={{ width: 0, opacity: 0.5 }}
            whileInView={{ width: "100%", opacity: 1 }}
            transition={{ type: "tween", duration: 1.5 }}
            className="border-b-2 border-gray-400 pt-3 mb-3"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MajorProjects.map((project, index) => (
              <CardContainer key={index} className="inter-var w-full">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-rose-500/[0.1] dark:bg-black dark:border-white/[0.3] border-black/[0.1] w-full h-auto rounded-xl p-2 border">
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
          <div className="text-3xl text-white mt-3">
            <p className="text-xl text-neutral-400 ">Supporting</p>
            <p> Projects</p>
          </div>
          <motion.div
            initial={{ width: 0, opacity: 0.5 }}
            whileInView={{ width: "100%", opacity: 1 }}
            transition={{ type: "tween", duration: 1.5 }}
            className="border-b-2 border-gray-400 pt-3 mb-3"
          />
          {/* projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <CardContainer key={index} className="w-full">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-rose-500/[0.1] dark:bg-black dark:border-white/[0.3] border-black/[0.1] w-full h-auto rounded-xl p-2 border">
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
