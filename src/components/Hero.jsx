
// import React from "react";
// import image from "../assets/a.png";
// import { motion } from "framer-motion";

// function Hero() {
//   let container1 = (delay) => ({
//     hidden: { x: -100, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.5, delay: delay },
//     },
//   });

//   return (
//     <div className="border-b border-neutral-900 pb-9 lg:mb-36">
//       <div className="flex flex-wrap">
//         <div className="w-full lg:w-1/2">
//           <div className="flex flex-col items-center lg:items-start lg:mt-14 max-md:mt-8">

//           <motion.h1
//               variants={container1(0.2)}
//               initial="hidden"
//               animate="visible"
//               className=" text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl max-sm:text-3xl"
//             >
//              HI,
//             </motion.h1>

//             <motion.h1
//               variants={container1(0.5)}
//               initial="hidden"
//               animate="visible"
//               className="pb-7 text-6xl font-thin tracking-tight lg:mt-10 lg:text-6xl max-sm:text-3xl"
//             >
//              I'm Abdul Rahman
//             </motion.h1>
//             <motion.span
//               variants={container1(0.9)}
//               initial="hidden"
//               animate="visible"
//               className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent max-sm:text-3xl"
//             >
//               React & React Native Developer
//             </motion.span>
//           </div>
//         </div>

//         <div className="w-full lg:w-1/2 lg:p-8 mt-7">
//           <div className="flex justify-center">
//             <motion.img
//               className="rounded-2xl"
//               initial={{ opacity: 0 }}
//               width={350}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1, delay: 1.2 }}
//               src={image}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;




// import React from "react";
// import image from "../assets/a.png";
// import { motion } from "framer-motion";


// function Hero() {
//   const container = (delay) => ({
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, delay: delay, ease: [0.2, 0.65, 0.3, 0.9] },
//     },
//   });

//   return (
//     <div className="relative pt-20 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="flex flex-wrap items-center">
//           {/* Text Content */}
//           <div className="w-full lg:w-3/5">
//             <div className="flex flex-col items-center lg:items-start">
              
//               {/* Animated Badge */}
//               <motion.div 
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-purple-300 backdrop-blur-md"
//               >
//                 <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-purple-400"></span>
//                 Available for Projects
//               </motion.div>

//               <motion.h1
//                 variants={container(0.2)}
//                 initial="hidden"
//                 animate="visible"
//                 className="text-center lg:text-left text-5xl font-extralight tracking-tight text-white lg:text-8xl"
//               >
//                 Hi, I'm <br />
//                 <span className="font-bold bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
//                    Abdul Rahman
//                 </span>
//               </motion.h1>

//               <motion.div
//                 variants={container(0.4)}
//                 initial="hidden"
//                 animate="visible"
//                 className="mt-6 flex flex-col items-center lg:items-start"
//               >
//                 <span className="bg-gradient-to-r from-purple-400 via-slate-100 to-pink-400 bg-clip-text text-3xl font-medium tracking-tight text-transparent lg:text-5xl">
//                   Software Developer
//                 </span>
                
//                 <p className="mt-8 max-w-lg text-center lg:text-left text-lg leading-relaxed text-neutral-400 font-light">
//                   Specializing in <span className="text-white">Next.js</span> and <span className="text-white">React </span>. I turn complex logic into smooth, high-performance user interfaces.
//                 </p>

             
//               </motion.div>
//             </div>
//           </div>

//           {/* Image / Visual Side */}
//           <div className="w-full lg:w-2/5 mt-20 lg:mt-0">
//             <div className="relative flex justify-center">
//               {/* Layered Glow Effects */}
//               <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]"></div>
//               <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-pink-600/10 blur-[100px]"></div>
              
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1, delay: 0.8 }}
//                 className="relative group"
//               >
//                 {/* Image Border Glow */}
//                 <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-purple-500/50 to-pink-500/50 opacity-20 blur-xl transition duration-500 group-hover:opacity-40"></div>
                
//                 <img
//                   className="relative rounded-[2rem] border border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
//                   width={450}
//                   src={image}
//                   alt="Abdul Rahman"
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;





import React from "react";
import image from "../assets/a.png";
import { motion } from "framer-motion";

function Hero() {
  const container = (delay) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: delay, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  });

  return (
    <div className="relative pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-36 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Changed to flex-col for mobile, flex-row for lg screens */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          
          {/* Text Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left ">
            <div className="flex flex-col items-center lg:items-start">
              
              {/* Animated Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs sm:text-sm text-purple-300 backdrop-blur-md"
              >
                <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-purple-400"></span>
                Available for Projects
              </motion.div>

              {/* Fluid Heading: Scales from 4xl to 8xl */}
              <motion.h1
                variants={container(0.2)}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-white leading-tight"
              >
                Hi, I'm <br />
                <span className="font-bold bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
                  Abdul Rahman
                </span>
              </motion.h1>

              <motion.div
                variants={container(0.4)}
                initial="hidden"
                animate="visible"
                className="mt-6 flex flex-col items-center lg:items-start"
              >
                {/* Fluid Subheading */}
                <span className="bg-gradient-to-r from-purple-400 via-slate-100 to-pink-400 bg-clip-text text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-transparent">
                  Software Developer
                </span>
                
                <p className="mt-8 max-w-lg text-sm sm:text-lg leading-relaxed text-neutral-400 font-light px-4 lg:px-0">
                  Specializing in <span className="text-white font-medium">Next.js</span> and <span className="text-white font-medium">React</span>. I turn complex logic into smooth, high-performance user interfaces.
                </p>

              
              </motion.div>
            </div>
          </div>

          {/* Image / Visual Side */}
          <div className="w-full lg:w-2/5 ">
            <div className="relative flex justify-center lg:justify-end">
              {/* Layered Glow Effects - Responsive Sizes */}
              <div className="absolute -top-10 -left-10 h-32 w-32 sm:h-64 sm:w-64 rounded-full bg-purple-600/20 blur-[60px] sm:blur-[100px]"></div>
              <div className="absolute -bottom-10 -right-10 h-32 w-32 sm:h-64 sm:w-64 rounded-full bg-pink-600/10 blur-[60px] sm:blur-[100px]"></div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative group w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none"
              >
                {/* Image Border Glow */}
                <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-purple-500/30 to-pink-500/30 opacity-20 blur-xl transition duration-500 group-hover:opacity-40"></div>
                
                <img
                  className="relative rounded-[2rem] border border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] w-full h-auto grayscale hover:grayscale-0"
                  src={image}
                  alt="Abdul Rahman"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;

