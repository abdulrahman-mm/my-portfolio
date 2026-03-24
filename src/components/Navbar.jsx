// import React from "react";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { CgMail } from "react-icons/cg";
// import resume from "../assets/resume.pdf"; // Importing the file directly

// function Navbar() {
//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = resume;
//     link.download = "resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };
//   return (
//     <nav className="flex items-center justify-between py-2 ">
//       <div className="flex text-3xl flex-shrink-0 items-center">
//         <h1 className="font-extrabold">AR</h1>
//       </div>

//       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         <button
//           className=" px-3 py-1 text-lg font-medium text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-md shadow-md hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-300 ease-in-out"
//           onClick={handleDownload}
//         >
//           Resume
//         </button>

//         <a href="https://github.com/abdulrahman-mm" target="_blank">
//           <FaGithub />
//         </a>
//         <a href="https://www.linkedin.com/in/abdulrahman124/" target="_blank">
//           <FaLinkedin />
//         </a>
//         <a href="mailto:www.abdulrahman.mm124@gmail.com" target="_blank">
//           <CgMail />
//         </a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";

function Navbar() {
  const socialVariants = {
    hover: { y: -3, scale: 1.1, color: "#a855f7" }, // Purple-500
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/10 border-b border-white/5">
      {/* Logo Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-shrink-0 items-center"
      >
        <h1 className="text-2xl font-black tracking-tighter text-white group cursor-pointer">
          A<span className="text-purple-500 transition-colors group-hover:text-cyan-400">R</span>
        </h1>
      </motion.div>

      {/* Actions & Socials */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-6"
      >
        {/* Social Icons */}
        <div className="flex items-center gap-5 text-neutral-400 text-xl">
          <motion.a 
            variants={socialVariants}
            whileHover="hover"
            href="https://github.com/abdulrahman-mm" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
          </motion.a>
          
          <motion.a 
            variants={socialVariants}
            whileHover="hover"
            href="https://www.linkedin.com/in/abdulrahman124/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </motion.a>
          
          <motion.a 
            variants={socialVariants}
            whileHover="hover"
            href="mailto:www.abdulrahman.mm124@gmail.com"
          >
            <HiOutlineMail className="text-2xl" />
          </motion.a>
        </div>

        {/* Separator */}
        <div className="h-6 w-[1px] bg-white/10 hidden sm:block"></div>

        {/* Modern Resume Button */}
        <a
          href={resume}
          download="Abdul_Rahman_Resume.pdf"
          className="relative group overflow-hidden px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono tracking-widest text-white uppercase transition-all hover:border-purple-500/50"
        >
          <span className="relative z-10">Resume</span>
          {/* Button Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
        </a>
      </motion.div>
    </nav>
  );
}

export default Navbar;