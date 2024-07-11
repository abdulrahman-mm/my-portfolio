import React from "react";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import { motion } from "framer-motion";

function Projects() {
  const PROJECTS = [
    {
      title: "E-Commerce Website",
      image: project1,
      description:
        "This project is a simple eCommerce website developed using React.js. It features a user-friendly interface for browsing products, adding items to the cart, and proceeding to checkout. The website leverages React components for efficient rendering and state management. Additionally, it includes basic styling and responsive design to enhance user experience.",
      technologies: ["HTML", "CSS", "Bootstrap", "React JS"],
      link: "https://clicknbuy1.netlify.app/",
    },
    {
      title: "News Website",
      image: project2,
      description:
        "This project is a news reading website developed using React.js. It allows users to select and browse news articles by category, providing a personalized reading experience. The site utilizes React components for dynamic content rendering . Additionally, it features a clean and responsive design to ensure accessibility across various devices.",
      technologies: ["HTML", "CSS", "Bootstrap", "React JS"],
      link: "https://yournewspartner.netlify.app/",
    },
    {
      title: "QR Code Generator",
      image: project3,
      description:
        "This project is a QR code generator website developed using React.js. Users can easily generate QR codes by entering their desired text or URL and then download the generated QR code for use. The site leverages React components for a seamless and interactive user experience. Additionally, it features a clean and responsive design for optimal performance across devices.",
      technologies: ["HTML", "CSS", "Bootstrap", "React JS"],
      link: "https://modernqrcodegenerator.netlify.app/",
    },
    {
      title: "Strong Password Generator",
      image: project4,
      description:
        "This project is a strong password generator website developed using React.js. Users can specify the desired password length and choose to include uppercase letters, lowercase letters, numbers, and special characters. The site utilizes React components for dynamic and interactive password generation. It also features a clean and responsive design to ensure a smooth user experience across different devices.",
      technologies: ["HTML", "CSS", "Bootstrap", "React JS"],
      link: "https://yourpasswordcreator.netlify.app/",
    },
    {
      title: "YouTube Clone",
      image: project5,
      description:
        "The YouTube clone project, built with React.js, and the YouTube API allows changing video categories. It features a responsive design and uses CSS for styling. React hooks manage state and API integration, while React Router handles navigation. Currently, users can only watch videos without additional interaction capabilities.",
      technologies: ["HTML", "CSS", "React JS"],
      link: "https://youtubecloneit.netlify.app/",
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap gap-10 lg:justify-center mt-20"
          >
            <div className="w-full lg:w-1/4 overflow-hidden ">
              <a
                href={project.link}
                target="_blank"
                className="overflow-hidden block "
              >
                <motion.img
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  src={project.image}
                  alt={project.title}
                  className="rounded overflow-hidden object-cover "
                />
              </a>
            </div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4">{project.description}</p>

              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-1 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
