// import React from "react";
// import image from "../assets/aff.png";
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

//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = require('../assets/resume.pdf');  // using require to ensure path correctness
//     link.download = 'resume.pdf';  // replace with the desired file name
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-36">
//       <div className="flex flex-wrap">
//         <div className="w-full lg:w-1/2">
//           <div className="flex flex-col items-center lg:items-start">
//             <motion.h1
//               variants={container1(0)}
//               initial="hidden"
//               animate="visible"
//               className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
//             >
//               Abdul Rahman
//             </motion.h1>
//             <motion.span
//               variants={container1(0.5)}
//               initial="hidden"
//               animate="visible"
//               className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
//             >
//               React JS Developer
//             </motion.span>

//             <button onClick={handleDownload}>Download Resume</button>
//           </div>
//         </div>

//         <div className="w-full lg:w-1/2 lg:p-8">
//           <div className="flex justify-center">
//             <motion.img
//             className="rounded-full"
//             initial={{x:100,opacity:0}}
//             width={450}
//             height={450}
//             animate={{x:0,opacity:1}}
//             transition={{duration:1,delay:1.2}}
//             src={image} alt="" />
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
  let container1 = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-9 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:mt-14 max-md:mt-8">

          <motion.h1
              variants={container1(0.2)}
              initial="hidden"
              animate="visible"
              className=" text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl max-sm:text-3xl"
            >
             HI,
            </motion.h1>

            <motion.h1
              variants={container1(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-7 text-6xl font-thin tracking-tight lg:mt-10 lg:text-6xl max-sm:text-3xl"
            >
             I'm Abdul Rahman
            </motion.h1>
            <motion.span
              variants={container1(0.9)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent max-sm:text-3xl"
            >
              React JS Developer
            </motion.span>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8 mt-7">
          <div className="flex justify-center">
            <motion.img
              className="rounded-2xl"
              initial={{ opacity: 0 }}
              width={350}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
