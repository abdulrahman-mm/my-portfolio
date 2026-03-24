// import React from "react";
// import { RiReactjsLine } from "react-icons/ri";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { BsBootstrapFill } from "react-icons/bs";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { IoLogoJavascript } from "react-icons/io5";
// import { SiTypescript } from "react-icons/si";
// import { FaSquareGithub } from "react-icons/fa6";
// import { motion } from "framer-motion";

// function Technologies() {
//   let iconVarients = (duration) => ({
//     initial: { y: -10 },
//     animate: {
//       y: [10, -10],
//       transition: {
//         duration: duration,
//         ease: "linear",
//         repeat: Infinity,
//         repeatType: "reverse",
//       },
//     },
//   });
//   return (
//     <div className="border-b border-neutral-800 pb-24">
//       <h1 className="my-20 text-center text-4xl">Technologies</h1>

//       <motion.div
//         initial={{ x: -100, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="flex flex-wrap items-center justify-center gap-4"
//       >
//         <motion.div
//           variants={iconVarients(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <FaHtml5 className="text-6xl text-red-500" />
//         </motion.div>

//         <motion.div
//           variants={iconVarients(3.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <FaCss3Alt className="text-6xl text-blue-500" />
//         </motion.div>

//         <motion.div
//           variants={iconVarients(1.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <BsBootstrapFill className="text-6xl text-violet-600" />
//         </motion.div>

//         <motion.div
//           variants={iconVarients(4.2)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <RiTailwindCssFill className="text-6xl text-sky-400" />
//         </motion.div>

//         <motion.div
//           variants={iconVarients(1.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <IoLogoJavascript className="text-6xl text-yellow-400" />
//         </motion.div>

//         <motion.div
//           variants={iconVarients(5.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiTypescript className="text-6xl text-blue-500" />
//         </motion.div>

//         <motion.div
//           variants={iconVarients(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <RiReactjsLine className="text-6xl text-cyan-400" />
//         </motion.div>

//         <motion.div
//           variants={iconVarients(5.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <FaSquareGithub className="text-6xl text-white" />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// export default Technologies;




// import React from "react";
// import { RiReactjsLine, RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
// import { FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
// import { SiTypescript, SiFramer, SiGreensock, SiReact, SiBootstrap } from "react-icons/si";
// import { motion } from "framer-motion";

// function Technologies() {
//   const iconVariants = (duration) => ({
//     initial: { y: -10 },
//     animate: {
//       y: [10, -10],
//       transition: {
//         duration: duration,
//         ease: "easeInOut",
//         repeat: Infinity,
//         repeatType: "reverse",
//       },
//     },
//   });

//   const techStack = [
//     { icon: <RiNextjsFill className="text-white" />, name: "Next.js", color: "border-white/20", delay: 2.5 },
//     { icon: <RiReactjsLine className="text-cyan-400" />, name: "React", color: "border-cyan-400/20", delay: 3 },
//     { icon: <SiReact className="text-blue-400" />, name: "Native", color: "border-blue-400/20", delay: 5 },
//     { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript", color: "border-blue-600/20", delay: 4 },
//     { icon: <IoLogoJavascript className="text-yellow-400" />, name: "JavaScript", color: "border-yellow-400/20", delay: 1.5 },
//     { icon: <RiTailwindCssFill className="text-sky-400" />, name: "Tailwind", color: "border-sky-400/20", delay: 3.5 },
//     { icon: <SiFramer className="text-pink-500" />, name: "Motion", color: "border-pink-500/20", delay: 4.5 },
//     { icon: <SiGreensock className="text-green-500" />, name: "GSAP", color: "border-green-500/20", delay: 2 },
//     { icon: <SiBootstrap className="text-purple-500" />, name: "Bootstrap", color: "border-purple-500/20", delay: 3.2 },
//     { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5", color: "border-orange-500/20", delay: 5.5 },
//     { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3", color: "border-blue-500/20", delay: 2.8 },
//     { icon: <FaGithub className="text-white" />, name: "GitHub", color: "border-white/20", delay: 6 },
//   ];

//   return (
//     <div className="pb-24">
//       <motion.h1 
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -50 }}
//         transition={{ duration: 1 }}
//         className="my-20 text-center text-4xl font-thin tracking-tighter lg:text-6xl text-white"
//       >
//         Technical <span className="text-neutral-500">Universe</span>
//       </motion.h1>

//       <div className="flex flex-wrap items-center justify-center gap-8 px-4 max-w-6xl mx-auto">
//         {techStack.map((tech, index) => (
//           <motion.div
//             key={index}
//             variants={iconVariants(tech.delay)}
//             initial="initial"
//             animate="animate"
//             className="flex flex-col items-center gap-3"
//           >
//             <motion.div 
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               className={`rounded-2xl border ${tech.color} bg-neutral-900/40 p-6 backdrop-blur-xl shadow-2xl transition-all duration-300`}
//             >
//               <div className="text-5xl lg:text-6xl">
//                 {tech.icon}
//               </div>
//             </motion.div>
            
//             {/* Skill Name Label */}
//             <motion.span 
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 + index * 0.1 }}
//               className="text-xs font-mono tracking-widest text-neutral-500 uppercase"
//             >
//               {tech.name}
//             </motion.span>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Technologies;




import React from "react";
import { RiReactjsLine, RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiFramer, SiGreensock, SiReact, SiBootstrap } from "react-icons/si";
import { motion } from "framer-motion";

function Technologies() {
  const floatingVariants = (duration) => ({
    initial: { y: 0 },
    animate: {
      y: [8, -8],
      transition: {
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  const techStack = [
    { icon: <RiNextjsFill />, name: "Next.js", color: "text-white", delay: 2.5 },
    { icon: <RiReactjsLine />, name: "React", color: "text-cyan-400", delay: 3 },
    { icon: <SiReact />, name: "Native", color: "text-blue-400", delay: 5 },
    { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-600", delay: 4 },
    { icon: <IoLogoJavascript />, name: "JavaScript", color: "text-yellow-400", delay: 1.5 },
    { icon: <RiTailwindCssFill />, name: "Tailwind", color: "text-sky-400", delay: 3.5 },
    { icon: <SiFramer />, name: "Motion", color: "text-pink-500", delay: 4.5 },
    { icon: <SiGreensock />, name: "GSAP", color: "text-green-500", delay: 2 },
    { icon: <SiBootstrap />, name: "Bootstrap", color: "text-purple-500", delay: 3.2 },
    { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500", delay: 5.5 },
    { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500", delay: 2.8 },
    { icon: <FaGithub />, name: "GitHub", color: "text-white/80", delay: 6 },
  ];

  return (
    <div className="pb-32 pt-20">
      {/* Section Header */}
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-24 space-y-4 px-6 text-center"
      >
       
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white">
          Technical <span className="text-neutral-600 italic font-serif">Universe</span>
        </h2>
      </motion.div>

      {/* Grid Layout */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 px-6 max-w-6xl mx-auto">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={floatingVariants(tech.delay)}
            initial="initial"
            animate="animate"
            className="group flex flex-col items-center gap-5"
          >
            {/* Icon Container */}
            <motion.div 
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(255, 255, 255, 0.2)" 
              }}
              className="relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-3xl border border-white/5 bg-neutral-900/40 backdrop-blur-3xl transition-all duration-500 shadow-2xl"
            >
              {/* Subtle radial glow that appears on hover */}
              <div className="absolute inset-0 bg-radial from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className={`text-3xl md:text-5xl transition-all duration-500 ${tech.color} opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`}>
                {tech.icon}
              </div>
            </motion.div>
            
            {/* Name Label - Now Always Visible */}
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="text-[10px] md:text-xs font-mono tracking-[0.15em] text-neutral-400 group-hover:text-white transition-colors duration-300 uppercase"
            >
              {tech.name}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;