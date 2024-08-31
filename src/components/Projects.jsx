import React from "react";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";
import project10 from "../assets/projects/project-10.png";
import { motion } from "framer-motion";

function Projects() {
  const PROJECTS = [
    {
      title: "QR Code Generator",
      image: project1,
      description:
        "This project is a QR code generator website developed using React.js. Users can easily generate QR codes by entering their desired text or URL and then download the generated QR code for use. The site leverages React components for a seamless and interactive user experience. Additionally, it features a clean and responsive design for optimal performance across devices.",
      technologies: ["React JS", "Bootstrap"],
      link: "https://modernqrcodegenerator.netlify.app/",
    },
    {
      title: "Strong Password Generator",
      image: project2,
      description:
        "This project is a strong password generator website developed using React.js. Users can specify the desired password length and choose to include uppercase letters, numbers, and special characters. The site utilizes React components for dynamic and interactive password generation. It also features a clean and responsive design to ensure a smooth user experience across different devices.",
      technologies: ["React JS", "Bootstrap"],
      link: "https://yourpasswordcreator.netlify.app/",
    },
    {
      title: "News Website",
      image: project3,
      description:
        "This project is a news reading website developed using React.js. It allows users to select and browse news articles by category, providing a personalized reading experience. The site utilizes React components for dynamic content rendering . Additionally, it features a clean and responsive design to ensure accessibility across various devices.",
      technologies: ["React JS", "Bootstrap", "CSS"],
      link: "https://yournewspartner.netlify.app/",
    },
    {
      title: "To-Do list",
      image: project4,
      description:
        "The to-do list app enables users to efficiently manage their tasks. Users can add new tasks, mark them as completed when done, and delete tasks as needed. The app utilizes local storage to save the to-do list, allowing users to resume where they left off even after closing the webpage. This feature ensures that users' task lists are always available and persistent.",
      technologies: ["React JS", "Tailwind CSS"],
      link: "https://todolistdo.netlify.app/",
    },
    {
      title: "E-Commerce Website",
      image: project5,
      description:
        "This project is a simple E-Commerce website developed using React.js. It features a user-friendly interface for browsing products, adding items to the cart, and proceeding to checkout. The website leverages React components for efficient rendering and state management. Additionally, it includes basic styling and responsive design to enhance user experience.",
      technologies: ["React JS", "Bootstrap", "CSS"],
      link: "https://clicknbuy1.netlify.app/",
    },
    {
      title: "YouTube Clone",
      image: project6,
      description:
        "The YouTube clone project, built with React.js, and the YouTube API allows changing video categories. It features a responsive design and uses CSS for styling. React hooks manage state and API integration, while React Router handles navigation. Currently, users can only watch videos without additional interaction capabilities.",
      technologies: ["React JS", "CSS"],
      link: "https://youtubecloneit.netlify.app/",
    },
    {
      title: "Text to Speech & Speech to Text Convertor",
      image: project7,
      description:
        "The Text-to-Speech and Speech-to-Text Converter is a web application built with React.js. It enables users to convert text to speech and speech to text. Users can input text and have it spoken aloud using customizable voices through the Speech Synthesis API. The app also allows users to record their speech via a microphone, which is then automatically transcribed into text using the Speech Recognition API. This responsive application is great for auditory learning and easy transcription. ",
      technologies: ["React JS", "Tailwind CSS"],
      link: "https://texttospeechtotext.netlify.app/",
    },
    {
      title: "Zomato Landing Page Clone",
      image: project8,
      description:
        "I created a Zomato landing page clone using React.js and Tailwind CSS. The clone replicates the design and layout of the Zomato homepage, providing a responsive and visually appealing user interface. The project demonstrates the effective use of React components and Tailwind CSS for styling.",
      technologies: ["React JS", "Tailwind css"],
      link: "https://zomatocloneify.netlify.app/",
    },
    {
      title: "Madras Classic Cafe",
      image: project9,
      description:
        "I created a modern restaurant landing page using React.js, featuring a dynamic video background on the home page to enhance visual appeal. The next section showcases a variety of dishes, offering a clean and appetizing display. Framer Motion was integrated to add smooth and engaging animations throughout the site. The project highlights my skills in combining multimedia elements with interactive design. It's fully responsive, ensuring a seamless experience across devices.",
      technologies: ["React JS", "Tailwind css", "Framer Motion"],
      link: "https://madrasclassiccafe.netlify.app/",
    },
    {
      title: "JarvisXX AI Voice Assistant",
      image: project10,
      description:
        "Jarvisxx is a voice-activated personal assistant website created using React.js. It draws inspiration from the Jarvis AI featured in the Iron Man movies. By utilizing JavaScript speech recognition, it can interpret user commands and open popular websites such as YouTube, ChatGPT, WhatsApp, Google, Email, and LinkedIn in new tabs based on voice prompts. Additionally, Jarvisxx can provide the time, date, or battery percentage when prompted and also conduct Google searches when asked 'who is' or 'what is', providing a seamless, hands-free browsing experience.",
      technologies: ["React JS", "Tailwind css", "Framer Motion"],
      link: "https://jarvisxx.netlify.app/",
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.reverse().map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap gap-10 lg:justify-center mt-20 items-center"
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
              <h6 className="mb-2 font-semibold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-serif  text-xl ">
                {project.title}
              </h6>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" className="">
                {" "}
                <button className="mb-4 block mt-2  text-black bg-slate-400 hover:text-white hover:bg-slate-600 font-semibold px-3 rounded">
                  Click Here To Open Website
                </button>
              </a>

              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2  rounded bg-neutral-800 px-1 py-1 text-sm font-medium text-slate-300"
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
