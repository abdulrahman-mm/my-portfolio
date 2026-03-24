// import React from "react";
// import project1 from "../assets/projects/project-1.png";
// import project2 from "../assets/projects/project-2.png";
// import project3 from "../assets/projects/project-3.png";
// import project4 from "../assets/projects/project-4.png";
// import project5 from "../assets/projects/project-5.png";
// import project6 from "../assets/projects/project-6.png";
// import project7 from "../assets/projects/project-7.png";
// import project8 from "../assets/projects/project-8.png";
// import project9 from "../assets/projects/project-9.png";
// import project10 from "../assets/projects/project-10.png";
// import { motion } from "framer-motion";

// function Projects() {
//   const PROJECTS = [
//     {
//       title: "QR Code Generator",
//       image: project1,
//       description:
//         "This project is a QR code generator website developed using React.js. Users can easily generate QR codes by entering their desired text or URL and then download the generated QR code for use. The site leverages React components for a seamless and interactive user experience. Additionally, it features a clean and responsive design for optimal performance across devices.",
//       technologies: ["React JS", "Bootstrap"],
//       link: "https://modernqrcodegenerator.netlify.app/",
//     },
//     {
//       title: "Strong Password Generator",
//       image: project2,
//       description:
//         "This project is a strong password generator website developed using React.js. Users can specify the desired password length and choose to include uppercase letters, numbers, and special characters. The site utilizes React components for dynamic and interactive password generation. It also features a clean and responsive design to ensure a smooth user experience across different devices.",
//       technologies: ["React JS", "Bootstrap"],
//       link: "https://yourpasswordcreator.netlify.app/",
//     },
//     {
//       title: "News Website",
//       image: project3,
//       description:
//         "This project is a news reading website developed using React.js. It allows users to select and browse news articles by category, providing a personalized reading experience. The site utilizes React components for dynamic content rendering . Additionally, it features a clean and responsive design to ensure accessibility across various devices.",
//       technologies: ["React JS", "Bootstrap", "CSS"],
//       link: "https://yournewspartner.netlify.app/",
//     },
//     {
//       title: "To-Do list",
//       image: project4,
//       description:
//         "The to-do list app enables users to efficiently manage their tasks. Users can add new tasks, mark them as completed when done, and delete tasks as needed. The app utilizes local storage to save the to-do list, allowing users to resume where they left off even after closing the webpage. This feature ensures that users' task lists are always available and persistent.",
//       technologies: ["React JS", "Tailwind CSS"],
//       link: "https://todolistdo.netlify.app/",
//     },
//     {
//       title: "E-Commerce Website",
//       image: project5,
//       description:
//         "This project is a simple E-Commerce website developed using React.js. It features a user-friendly interface for browsing products, adding items to the cart, and proceeding to checkout. The website leverages React components for efficient rendering and state management. Additionally, it includes basic styling and responsive design to enhance user experience.",
//       technologies: ["React JS", "Bootstrap", "CSS"],
//       link: "https://clicknbuy1.netlify.app/",
//     },
//     {
//       title: "YouTube Clone",
//       image: project6,
//       description:
//         "The YouTube clone project, built with React.js, and the YouTube API allows changing video categories. It features a responsive design and uses CSS for styling. React hooks manage state and API integration, while React Router handles navigation. Currently, users can only watch videos without additional interaction capabilities.",
//       technologies: ["React JS", "CSS"],
//       link: "https://youtubecloneit.netlify.app/",
//     },
//     {
//       title: "Text to Speech & Speech to Text Convertor",
//       image: project7,
//       description:
//         "The Text-to-Speech and Speech-to-Text Converter is a web application built with React.js. It enables users to convert text to speech and speech to text. Users can input text and have it spoken aloud using customizable voices through the Speech Synthesis API. The app also allows users to record their speech via a microphone, which is then automatically transcribed into text using the Speech Recognition API. This responsive application is great for auditory learning and easy transcription. ",
//       technologies: ["React JS", "Tailwind CSS"],
//       link: "https://texttospeechtotext.netlify.app/",
//     },
//     {
//       title: "Zomato Landing Page Clone",
//       image: project8,
//       description:
//         "I created a Zomato landing page clone using React.js and Tailwind CSS. The clone replicates the design and layout of the Zomato homepage, providing a responsive and visually appealing user interface. The project demonstrates the effective use of React components and Tailwind CSS for styling.",
//       technologies: ["React JS", "Tailwind css"],
//       link: "https://zomatocloneify.netlify.app/",
//     },
//     {
//       title: "Madras Classic Cafe",
//       image: project9,
//       description:
//         "I created a modern restaurant landing page using React.js, featuring a dynamic video background on the home page to enhance visual appeal. The next section showcases a variety of dishes, offering a clean and appetizing display. Framer Motion was integrated to add smooth and engaging animations throughout the site. The project highlights my skills in combining multimedia elements with interactive design. It's fully responsive, ensuring a seamless experience across devices.",
//       technologies: ["React JS", "Tailwind css", "Framer Motion"],
//       link: "https://madrasclassiccafe.netlify.app/",
//     },
//     {
//       title: "JarvisXX AI Voice Assistant",
//       image: project10,
//       description:
//         "Jarvisxx is a voice-activated personal assistant website created using React.js. It draws inspiration from the Jarvis AI featured in the Iron Man movies. By utilizing JavaScript speech recognition, it can interpret user commands and open popular websites such as YouTube, ChatGPT, WhatsApp, Google, Email, and LinkedIn in new tabs based on voice prompts. Additionally, Jarvisxx can provide the time, date, or battery percentage when prompted and also conduct Google searches when asked 'who is' or 'what is', providing a seamless, hands-free browsing experience.",
//       technologies: ["React JS", "Tailwind css", "Framer Motion"],
//       link: "https://jarvisxx.netlify.app/",
//     },
//   ];

//   return (
//     <div className="border-b border-neutral-900 pb-4">
//       <h1 className="my-20 text-center text-4xl">Projects</h1>
//       <div>
//         {PROJECTS.reverse().map((project, index) => (
//           <div
//             key={index}
//             className="mb-8 flex flex-wrap gap-10 lg:justify-center mt-20 items-center"
//           >
//             <div className="w-full lg:w-1/4 overflow-hidden ">
//               <a
//                 href={project.link}
//                 target="_blank"
//                 className="overflow-hidden block "
//               >
//                 <motion.img
//                   initial={{ x: -100, opacity: 0 }}
//                   whileInView={{ x: 0, opacity: 1 }}
//                   transition={{ duration: 0.5 }}
//                   whileHover={{
//                     scale: 1.1,
//                     transition: { duration: 0.5 },
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                   src={project.image}
//                   alt={project.title}
//                   className="rounded overflow-hidden object-cover "
//                 />
//               </a>
//             </div>

//             <motion.div
//               initial={{ x: 100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1 }}
//               className="w-full max-w-xl lg:w-3/4"
//             >
//               <h6 className="mb-2 font-semibold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-serif  text-xl ">
//                 {project.title}
//               </h6>
//               <p>{project.description}</p>
//               <a href={project.link} target="_blank" className="">
//                 {" "}
//                 <button className="mb-4 block mt-2  text-black bg-slate-400 hover:text-white hover:bg-slate-600 font-semibold px-3 rounded">
//                   Click Here To Open Website
//                 </button>
//               </a>

//               {project.technologies.map((tech, index) => (
//                 <span
//                   key={index}
//                   className="mr-2  rounded bg-neutral-800 px-1 py-1 text-sm font-medium text-slate-300"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiArrowUpRight, FiFilter } from "react-icons/fi";

// // Asset Imports
// import project1 from "../assets/projects/project-1.png";
// import project2 from "../assets/projects/project-2.png";
// import project3 from "../assets/projects/project-3.png";
// import project4 from "../assets/projects/project-4.png";
// import project5 from "../assets/projects/project-5.png";
// import project6 from "../assets/projects/project-6.png";
// import project7 from "../assets/projects/project-7.png";
// import project8 from "../assets/projects/project-8.png";
// import project9 from "../assets/projects/project-9.png";
// import project10 from "../assets/projects/project-10.png";

// const PROJECTS = [
//   {
//     title: "QR Code Generator",
//     image: project1,
//     description:
//       "This project is a QR code generator website developed using React.js. Users can easily generate QR codes by entering their desired text or URL and then download the generated QR code for use. The site leverages React components for a seamless and interactive user experience. Additionally, it features a clean and responsive design for optimal performance across devices.",
//     technologies: ["React JS", "Bootstrap"],
//     link: "https://modernqrcodegenerator.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "Strong Password Generator",
//     image: project2,
//     description:
//       "This project is a strong password generator website developed using React.js. Users can specify the desired password length and choose to include uppercase letters, numbers, and special characters. The site utilizes React components for dynamic and interactive password generation. It also features a clean and responsive design to ensure a smooth user experience across different devices.",
//     technologies: ["React JS", "Bootstrap"],
//     link: "https://yourpasswordcreator.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "News Website",
//     image: project3,
//     description:
//       "This project is a news reading website developed using React.js. It allows users to select and browse news articles by category, providing a personalized reading experience. The site utilizes React components for dynamic content rendering . Additionally, it features a clean and responsive design to ensure accessibility across various devices.",
//     technologies: ["React JS", "Bootstrap", "CSS"],
//     link: "https://yournewspartner.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "To-Do list",
//     image: project4,
//     description:
//       "The to-do list app enables users to efficiently manage their tasks. Users can add new tasks, mark them as completed when done, and delete tasks as needed. The app utilizes local storage to save the to-do list, allowing users to resume where they left off even after closing the webpage. This feature ensures that users' task lists are always available and persistent.",
//     technologies: ["React JS", "Tailwind CSS"],
//     link: "https://todolistdo.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "E-Commerce Website",
//     image: project5,
//     description:
//       "This project is a simple E-Commerce website developed using React.js. It features a user-friendly interface for browsing products, adding items to the cart, and proceeding to checkout. The website leverages React components for efficient rendering and state management. Additionally, it includes basic styling and responsive design to enhance user experience.",
//     technologies: ["React JS", "Bootstrap", "CSS"],
//     link: "https://clicknbuy1.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "YouTube Clone",
//     image: project6,
//     description:
//       "The YouTube clone project, built with React.js, and the YouTube API allows changing video categories. It features a responsive design and uses CSS for styling. React hooks manage state and API integration, while React Router handles navigation. Currently, users can only watch videos without additional interaction capabilities.",
//     technologies: ["React JS", "CSS"],
//     link: "https://youtubecloneit.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "Text to Speech & Speech to Text Convertor",
//     image: project7,
//     description:
//       "The Text-to-Speech and Speech-to-Text Converter is a web application built with React.js. It enables users to convert text to speech and speech to text. Users can input text and have it spoken aloud using customizable voices through the Speech Synthesis API. The app also allows users to record their speech via a microphone, which is then automatically transcribed into text using the Speech Recognition API. This responsive application is great for auditory learning and easy transcription. ",
//     technologies: ["React JS", "Tailwind CSS"],
//     link: "https://texttospeechtotext.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "Zomato Landing Page Clone",
//     image: project8,
//     description:
//       "I created a Zomato landing page clone using React.js and Tailwind CSS. The clone replicates the design and layout of the Zomato homepage, providing a responsive and visually appealing user interface. The project demonstrates the effective use of React components and Tailwind CSS for styling.",
//     technologies: ["React JS", "Tailwind css"],
//     link: "https://zomatocloneify.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "Madras Classic Cafe",
//     image: project9,
//     description:
//       "I created a modern restaurant landing page using React.js, featuring a dynamic video background on the home page to enhance visual appeal. The next section showcases a variety of dishes, offering a clean and appetizing display. Framer Motion was integrated to add smooth and engaging animations throughout the site. The project highlights my skills in combining multimedia elements with interactive design. It's fully responsive, ensuring a seamless experience across devices.",
//     technologies: ["React JS", "Tailwind css", "Framer Motion"],
//     link: "https://madrasclassiccafe.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "JarvisXX AI Voice Assistant",
//     image: project10,
//     description:
//       "Jarvisxx is a voice-activated personal assistant website created using React.js. It draws inspiration from the Jarvis AI featured in the Iron Man movies. By utilizing JavaScript speech recognition, it can interpret user commands and open popular websites such as YouTube, ChatGPT, WhatsApp, Google, Email, and LinkedIn in new tabs based on voice prompts. Additionally, Jarvisxx can provide the time, date, or battery percentage when prompted and also conduct Google searches when asked 'who is' or 'what is', providing a seamless, hands-free browsing experience.",
//     technologies: ["React JS", "Tailwind css", "Framer Motion"],
//     link: "https://jarvisxx.netlify.app/",
//     category: "React",
//   },
// ];

// const CATEGORIES = ["All", "React", "Next.js", "React Native"];

// function Projects() {
//   const [activeFilter, setActiveFilter] = useState("All");

//   const filteredProjects =
//     activeFilter === "All"
//       ? PROJECTS
//       : PROJECTS.filter((p) => p.category === activeFilter);

//   return (
//     <div className="pb-32 pt-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header & Dynamic Filter Tabs */}
//         <div className="flex flex-col items-center mb-20">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-xs font-mono tracking-[0.5em] text-purple-500 uppercase mb-4"
//           >
//             Engineering Archive
//           </motion.h2>

//           <h1 className="text-5xl lg:text-8xl font-light tracking-tighter text-white mb-12 text-center">
//             Selected <span className="text-neutral-600 italic">Projects.</span>
//           </h1>

//           {/* Filter Navigation */}
//           <div className="flex flex-wrap justify-center gap-2 p-1 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
//             {CATEGORIES.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveFilter(cat)}
//                 className={`relative px-6 py-2 text-[10px] font-mono tracking-widest uppercase transition-all duration-500 ${
//                   activeFilter === cat
//                     ? "text-white"
//                     : "text-neutral-500 hover:text-neutral-300"
//                 }`}
//               >
//                 <span className="relative z-10">{cat}</span>
//                 {activeFilter === cat && (
//                   <motion.div
//                     layoutId="active-pill"
//                     className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-white/10"
//                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//                   />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Project Grid */}
//         <motion.div
//           layout
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           <AnimatePresence mode="popLayout">
//             {filteredProjects.map((project) => (
//               <motion.div
//                 layout
//                 key={project.title}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.4 }}
//                 className="group relative flex flex-col h-full rounded-[2.5rem] border border-white/5 bg-white/[0.01] overflow-hidden hover:border-white/10 hover:bg-white/[0.03] transition-all duration-500"
//               >
//                 {/* Visual Cover */}
//                 <div className="relative aspect-[16/10] overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-60"></div>

//                   {/* Category Tag */}
//                   <div className="absolute top-6 left-6">
//                     <span className="px-3 py-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-[9px] font-mono text-purple-400">
//                       {project.category.toUpperCase()}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content Details */}
//                 <div className="p-8 flex flex-col flex-grow">
//                   <h3 className="text-2xl font-light tracking-tight text-white mb-3">
//                     {project.title}
//                   </h3>
//                   <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8 line-clamp-2">
//                     {project.description}
//                   </p>

//                   <div className="mt-auto flex items-center justify-between">
//                     <div className="flex gap-2">
//                       {project.technologies.slice(0, 2).map((tech, i) => (
//                         <span
//                           key={i}
//                           className="text-[10px] font-mono text-neutral-600"
//                         >
//                           #{tech.replace(/\s/g, "")}
//                         </span>
//                       ))}
//                     </div>

//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500"
//                     >
//                       <FiArrowUpRight />
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Dynamic Counter */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="mt-20 text-center text-[10px] font-mono text-neutral-600 tracking-[0.2em] uppercase"
//         >
//           Showing {filteredProjects.length} of {PROJECTS.length} Systems
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Projects;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiArrowUpRight, FiSearch } from "react-icons/fi";

// // Asset Imports (Ensure paths are correct)
// import project1 from "../assets/projects/project-1.png";
// import project2 from "../assets/projects/project-2.png";
// import project3 from "../assets/projects/project-3.png";
// import project4 from "../assets/projects/project-4.png";
// import project5 from "../assets/projects/project-5.png";
// import project6 from "../assets/projects/project-6.png";
// import project7 from "../assets/projects/project-7.png";
// import project8 from "../assets/projects/project-8.png";
// import project9 from "../assets/projects/project-9.png";
// import project10 from "../assets/projects/project-10.png";
// // Add imports for projects 11-15 here...

//  const PROJECTS = [
//   {
//     title: "QR Code Generator",
//     image: project1,
//     description:
//       "This project is a QR code generator website developed using React.js. Users can easily generate QR codes by entering their desired text or URL and then download the generated QR code for use. The site leverages React components for a seamless and interactive user experience. Additionally, it features a clean and responsive design for optimal performance across devices.",
//     technologies: ["React JS", "Bootstrap"],
//     link: "https://modernqrcodegenerator.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "Strong Password Generator",
//     image: project2,
//     description:
//       "This project is a strong password generator website developed using React.js. Users can specify the desired password length and choose to include uppercase letters, numbers, and special characters. The site utilizes React components for dynamic and interactive password generation. It also features a clean and responsive design to ensure a smooth user experience across different devices.",
//     technologies: ["React JS", "Bootstrap"],
//     link: "https://yourpasswordcreator.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "News Website",
//     image: project3,
//     description:
//       "This project is a news reading website developed using React.js. It allows users to select and browse news articles by category, providing a personalized reading experience. The site utilizes React components for dynamic content rendering . Additionally, it features a clean and responsive design to ensure accessibility across various devices.",
//     technologies: ["React JS", "Bootstrap", "CSS"],
//     link: "https://yournewspartner.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "To-Do list",
//     image: project4,
//     description:
//       "The to-do list app enables users to efficiently manage their tasks. Users can add new tasks, mark them as completed when done, and delete tasks as needed. The app utilizes local storage to save the to-do list, allowing users to resume where they left off even after closing the webpage. This feature ensures that users' task lists are always available and persistent.",
//     technologies: ["React JS", "Tailwind CSS"],
//     link: "https://todolistdo.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "E-Commerce Website",
//     image: project5,
//     description:
//       "This project is a simple E-Commerce website developed using React.js. It features a user-friendly interface for browsing products, adding items to the cart, and proceeding to checkout. The website leverages React components for efficient rendering and state management. Additionally, it includes basic styling and responsive design to enhance user experience.",
//     technologies: ["React JS", "Bootstrap", "CSS"],
//     link: "https://clicknbuy1.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "YouTube Clone",
//     image: project6,
//     description:
//       "The YouTube clone project, built with React.js, and the YouTube API allows changing video categories. It features a responsive design and uses CSS for styling. React hooks manage state and API integration, while React Router handles navigation. Currently, users can only watch videos without additional interaction capabilities.",
//     technologies: ["React JS", "CSS"],
//     link: "https://youtubecloneit.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "Text to Speech & Speech to Text Convertor",
//     image: project7,
//     description:
//       "The Text-to-Speech and Speech-to-Text Converter is a web application built with React.js. It enables users to convert text to speech and speech to text. Users can input text and have it spoken aloud using customizable voices through the Speech Synthesis API. The app also allows users to record their speech via a microphone, which is then automatically transcribed into text using the Speech Recognition API. This responsive application is great for auditory learning and easy transcription. ",
//     technologies: ["React JS", "Tailwind CSS"],
//     link: "https://texttospeechtotext.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "Zomato Landing Page Clone",
//     image: project8,
//     description:
//       "I created a Zomato landing page clone using React.js and Tailwind CSS. The clone replicates the design and layout of the Zomato homepage, providing a responsive and visually appealing user interface. The project demonstrates the effective use of React components and Tailwind CSS for styling.",
//     technologies: ["React JS", "Tailwind css"],
//     link: "https://zomatocloneify.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "Madras Classic Cafe",
//     image: project9,
//     description:
//       "I created a modern restaurant landing page using React.js, featuring a dynamic video background on the home page to enhance visual appeal. The next section showcases a variety of dishes, offering a clean and appetizing display. Framer Motion was integrated to add smooth and engaging animations throughout the site. The project highlights my skills in combining multimedia elements with interactive design. It's fully responsive, ensuring a seamless experience across devices.",
//     technologies: ["React JS", "Tailwind css", "Framer Motion"],
//     link: "https://madrasclassiccafe.netlify.app/",
//     category: "React",
//   },
//   {
//     title: "JarvisXX AI Voice Assistant",
//     image: project10,
//     description:
//       "Jarvisxx is a voice-activated personal assistant website created using React.js. It draws inspiration from the Jarvis AI featured in the Iron Man movies. By utilizing JavaScript speech recognition, it can interpret user commands and open popular websites such as YouTube, ChatGPT, WhatsApp, Google, Email, and LinkedIn in new tabs based on voice prompts. Additionally, Jarvisxx can provide the time, date, or battery percentage when prompted and also conduct Google searches when asked 'who is' or 'what is', providing a seamless, hands-free browsing experience.",
//     technologies: ["React JS", "Tailwind css", "Framer Motion"],
//     link: "https://jarvisxx.netlify.app/",
//     category: "React",
//   },
// ];

// function Projects() {
//   const [filter, setFilter] = useState("All");

//   const categories = ["All", "React","Next.js"];

//   const filteredProjects = filter === "All"
//     ? PROJECTS
//     : PROJECTS.filter(p => p.category === filter);

//   return (
//     <div className="pb-32 px-4 overflow-hidden">
//       <div className="max-w-7xl mx-auto">

//         {/* Modern Header & Filter Section */}
//         <div className="text-center mb-24">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-sm font-mono tracking-[0.4em] text-purple-500 uppercase mb-4">Portfolio</h2>
//             <h1 className="text-5xl lg:text-8xl font-light tracking-tighter text-white">
//               Project <span className="text-neutral-500 italic">Matrix.</span>
//             </h1>
//           </motion.div>

//           {/* Category Filter Pills */}
//           <div className="mt-12 flex flex-wrap justify-center gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setFilter(cat)}
//                 className={`px-8 py-2 rounded-full border text-[10px] font-mono tracking-widest transition-all duration-300 ${
//                   filter === cat
//                   ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
//                   : "border-white/10 text-neutral-500 hover:border-purple-500/50 hover:text-white"
//                 }`}
//               >
//                 {cat.toUpperCase()}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* The Project Grid */}
//         <motion.div
//           layout
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
//         >
//           <AnimatePresence mode="popLayout">
//             {filteredProjects.reverse().map((project, index) => (
//               <motion.div
//                 layout
//                 key={project.title}
//                 initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.9, y: 20 }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 className="group relative flex flex-col h-full rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl overflow-hidden hover:border-white/10 transition-all duration-500"
//               >
//                 {/* Image Container */}
//                 <div className="relative aspect-video overflow-hidden">
//                   <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0"
//                   />

//                   {/* Floating Action Button */}
//                   <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-xl hover:scale-110 active:scale-95 transition-transform"
//                     >
//                       <FiArrowUpRight size={22} />
//                     </a>
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-10 flex flex-col flex-grow">
//                   <div className="flex items-center gap-2 mb-4">
//                     <span className="h-[1px] w-6 bg-purple-500"></span>
//                     <span className="text-[10px] font-mono text-purple-400 tracking-tighter uppercase">{project.category}</span>
//                   </div>

//                   <h3 className="text-2xl font-light tracking-tight text-white mb-4 group-hover:text-purple-300 transition-colors">
//                     {project.title}
//                   </h3>

//                   <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8 line-clamp-3">
//                     {project.description}
//                   </p>

//                   {/* Tech Stack Footer */}
//                   <div className="mt-auto flex flex-wrap gap-2">
//                     {project.technologies.map((tech, idx) => (
//                       <span
//                         key={idx}
//                         className="text-[9px] font-mono text-neutral-500 border border-white/5 bg-white/5 px-3 py-1 rounded-full uppercase tracking-tighter"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Empty State */}
//         {filteredProjects.length === 0 && (
//           <div className="text-center py-20 text-neutral-500 font-mono">
//             <FiSearch size={40} className="mx-auto mb-4 opacity-20" />
//             No projects found in this sector.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Projects;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiSearch, FiCode } from "react-icons/fi";

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
import project11 from "../assets/projects/project-11.png";
import project12 from "../assets/projects/project-12.png";
import project13 from "../assets/projects/project-13.png";
import project14 from "../assets/projects/project-14.png";
import project15 from "../assets/projects/project-15.png";
import project16 from "../assets/projects/project-16.png";
import project17 from "../assets/projects/project-17.png";

const PROJECTS = [
  {
    title: "QR Code Generator",
    image: project1,
    description:
      "This project is a QR code generator website developed using React.js. Users can easily generate QR codes by entering their desired text or URL and then download the generated QR code for use. The site leverages React components for a seamless and interactive user experience. Additionally, it features a clean and responsive design for optimal performance across devices.",
    technologies: ["React JS", "Bootstrap"],
    link: "https://modernqrcodegenerator.netlify.app/",
    category: "React",
  },
  {
    title: "Strong Password Generator",
    image: project2,
    description:
      "This project is a strong password generator website developed using React.js. Users can specify the desired password length and choose to include uppercase letters, numbers, and special characters. The site utilizes React components for dynamic and interactive password generation. It also features a clean and responsive design to ensure a smooth user experience across different devices.",
    technologies: ["React JS", "Bootstrap"],
    link: "https://yourpasswordcreator.netlify.app/",
    category: "React",
  },
  {
    title: "News Website",
    image: project3,
    description:
      "This project is a news reading website developed using React.js. It allows users to select and browse news articles by category, providing a personalized reading experience. The site utilizes React components for dynamic content rendering . Additionally, it features a clean and responsive design to ensure accessibility across various devices.",
    technologies: ["React JS", "Bootstrap", "CSS"],
    link: "https://yournewspartner.netlify.app/",
    category: "React",
  },
  {
    title: "To-Do list",
    image: project4,
    description:
      "The to-do list app enables users to efficiently manage their tasks. Users can add new tasks, mark them as completed when done, and delete tasks as needed. The app utilizes local storage to save the to-do list, allowing users to resume where they left off even after closing the webpage. This feature ensures that users' task lists are always available and persistent.",
    technologies: ["React JS", "Tailwind CSS"],
    link: "https://todolistdo.netlify.app/",
    category: "React",
  },
  {
    title: "E-Commerce Website",
    image: project5,
    description:
      "This project is a simple E-Commerce website developed using React.js. It features a user-friendly interface for browsing products, adding items to the cart, and proceeding to checkout. The website leverages React components for efficient rendering and state management. Additionally, it includes basic styling and responsive design to enhance user experience.",
    technologies: ["React JS", "Bootstrap", "CSS"],
    link: "https://clicknbuy1.netlify.app/",
    category: "React",
  },
  {
    title: "YouTube Clone",
    image: project6,
    description:
      "The YouTube clone project, built with React.js, and the YouTube API allows changing video categories. It features a responsive design and uses CSS for styling. React hooks manage state and API integration, while React Router handles navigation. Currently, users can only watch videos without additional interaction capabilities.",
    technologies: ["React JS", "CSS"],
    link: "https://youtubecloneit.netlify.app/",
    category: "React",
  },
  {
    title: "Text to Speech & Speech to Text Convertor",
    image: project7,
    description:
      "The Text-to-Speech and Speech-to-Text Converter is a web application built with React.js. It enables users to convert text to speech and speech to text. Users can input text and have it spoken aloud using customizable voices through the Speech Synthesis API. The app also allows users to record their speech via a microphone, which is then automatically transcribed into text using the Speech Recognition API. This responsive application is great for auditory learning and easy transcription. ",
    technologies: ["React JS", "Tailwind CSS"],
    link: "https://texttospeechtotext.netlify.app/",
    category: "React",
  },
  {
    title: "Zomato Landing Page Clone",
    image: project8,
    description:
      "I created a Zomato landing page clone using React.js and Tailwind CSS. The clone replicates the design and layout of the Zomato homepage, providing a responsive and visually appealing user interface. The project demonstrates the effective use of React components and Tailwind CSS for styling.",
    technologies: ["React JS", "Tailwind css"],
    link: "https://zomatocloneify.netlify.app/",
    category: "React",
  },
  {
    title: "Madras Classic Cafe",
    image: project9,
    description:
      "I created a modern restaurant landing page using React.js, featuring a dynamic video background on the home page to enhance visual appeal. The next section showcases a variety of dishes, offering a clean and appetizing display. Framer Motion was integrated to add smooth and engaging animations throughout the site. The project highlights my skills in combining multimedia elements with interactive design. It's fully responsive, ensuring a seamless experience across devices.",
    technologies: ["React JS", "Tailwind css", "Framer Motion"],
    link: "https://madrasclassiccafe.netlify.app/",
    category: "React",
  },
  {
    title: "JarvisXX AI Voice Assistant",
    image: project10,
    description:
      "Jarvisxx is a voice-activated personal assistant website created using React.js. It draws inspiration from the Jarvis AI featured in the Iron Man movies. By utilizing JavaScript speech recognition, it can interpret user commands and open popular websites such as YouTube, ChatGPT, WhatsApp, Google, Email, and LinkedIn in new tabs based on voice prompts. Additionally, Jarvisxx can provide the time, date, or battery percentage when prompted and also conduct Google searches when asked 'who is' or 'what is', providing a seamless, hands-free browsing experience.",
    technologies: ["React JS", "Tailwind css", "Framer Motion"],
    link: "https://jarvisxx.netlify.app/",
    category: "React",
  },
  {
    title: "Innerpece",
    image: project11,
    description:
      "Built a fully responsive travel platform with dynamic carousels, destination and stay pages, and secure login, signup, and booking API integration with seamless user experience flow",
    technologies: ["React JS", "Tailwind css",],
    link: "https://innerpece.com/",
    category: "React",
  },
   {
    title: "Aryu Agency",
    image: project12,
    description:
      "A sleek digital-marketing agency website built with React.js, showcasing branding, digital marketing, ui ux services through a modern UI.Enhanced user engagement using high-quality video sections strategically placed to capture attention and increase on-page interaction.Integrated GSAP animations alongside responsive Tailwind components, to deliver a refined and immersive experience.",
    technologies: ["React JS", "Tailwind css","GSAP"],
    link: "https://aryu.agency/",
    category: "React",
  },
  {
    title: "HRMS",
    image: project13,
    description:
      "Architected a multi-module Human Resource Management System (HRMS) with Employee and Admin dashboards, including attendance tracking, clock-in/clock-out logic, and leave and Work From Home (WFH) request workflows.Integrated REST APIs for real-time employee records and approval flows; implemented form validation and optimized component re-rendering for performance",
    technologies: ["React JS", "Tailwind css",],
    category: "React",
  },
   {
    title: "Yes To Boss",
    image: project14,
    description:
      "Developed a Goods and Services Tax (GST), Income Tax Return (ITR), and compliance services platform using Next.js with modular components, SEO optimization, server-side rendering, and high-performance GSAP animations",
    technologies: ["Next.js", "Tailwind css","GSAP"],
    category: "Next.js",
        link: "https://yestoboss.com/",

  },
   {
    title: "Wp Website Fix",
    image: project15,
    description:
      "Built a service showcase platform with GSAP scroll animations, micro-interactions, reusable component library, and optimized rendering for high Lighthouse scores.",
    technologies: ["Next.js", "Tailwind css","GSAP"],
    category: "Next.js",
            link: "https://wpwebsitefix.com/",

  },
   {
    title: "Pss Agencies",
    image: project16,
    description:
      "Built a service showcase platform with GSAP scroll animations, micro-interactions, reusable component library, and optimized rendering for high Lighthouse scores.",
    technologies: ["Next.js", "Tailwind css","GSAP"],
    category: "Next.js",
                link: "https://pssagencies.com/",

  },
   {
    title: "Medics Research",
    image: project17,
    description:
      "Built a service showcase platform with GSAP scroll animations, micro-interactions, reusable component library, and optimized rendering for high Lighthouse scores.",
    technologies: ["Next.js", "Tailwind css","GSAP"],
    category: "Next.js",
                link: "https://medicsresearch.com/",

  },
];

function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "React", "Next.js"];

  const filteredProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);


  return (
    <div className="pb-20 md:pb-32 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full h-[300px] bg-purple-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
           

            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-light tracking-tighter text-white leading-[0.9] mb-8">
              Project{" "}
              <span className="text-neutral-600 italic font-serif">
                Matrix.
              </span>
            </h1>
          </motion.div>

          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-5 sm:px-6 md:px-10 py-2 sm:py-2.5 md:py-3 rounded-full text-[10px] md:text-[11px]  font-mono tracking-[0.2em] transition-all duration-500 overflow-hidden ${
                  filter === cat
                    ? "text-black border-transparent"
                    : "text-neutral-400 border border-white/10 hover:border-white/30"
                }`}
              >
                <span className="relative z-10">{cat.toUpperCase()}</span>
                {filter === cat && (
                  <motion.div
                    layoutId="pill-bg"
                    className="absolute inset-0 bg-white"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-14"
        >
          <AnimatePresence mode="popLayout">
              {[...filteredProjects].reverse().map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative flex flex-col h-full rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 bg-neutral-900/40 backdrop-blur-3xl hover:border-purple-500/40 transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] m-2 md:m-3 overflow-hidden rounded-[1.2rem] md:rounded-[2rem]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Action Button - Visible on Hover (Desktop) / Always slightly visible (Mobile hint) */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-white text-black hover:bg-purple-500 hover:text-white transition-all shadow-xl"
                    >
                      <FiArrowUpRight size={24} className="md:size-7" />
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 pt-2 md:pt-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <FiCode className="text-purple-500 text-xs" />
                    <span className="text-[9px] font-mono text-purple-400 tracking-widest uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-xs md:text-sm font-normal leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Footer */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[8px] md:text-[9px] font-mono text-neutral-300 border border-white/10 bg-white/5 px-3 py-1 md:px-4 md:py-1.5 rounded-full uppercase tracking-widest"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 md:py-40">
            <FiSearch size={40} className="mx-auto mb-6 text-neutral-800" />
            <p className="text-neutral-500 font-mono text-xs tracking-widest uppercase">
              No assets found in this sector.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
