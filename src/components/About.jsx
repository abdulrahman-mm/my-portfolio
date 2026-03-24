// import React from "react";
// import aboutImg from "../assets/aff1.png";
// import { motion } from "framer-motion";

// function About() {
//   return (
//     <div className="border-b border-neutral-900 pb-4">
//       <h1 className="my-20 text-center text-4xl">
//         About <span className="text-neutral-500">Me</span>
//       </h1>

//       <div className="flex flex-wrap">
//         <div className="w-full lg:w-1/2 lg:p-8">
//           <div className="flex items-center justify-center">
//             <motion.img
//               width={350}
//               initial={{ x: -100, opacity: 0 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               src={aboutImg}
//               alt=""
//               className="rounded-3xl"
//             />
//           </div>
//         </div>

//         <div className="w-full lg:w-1/2 lg:p-8 lg:mt-3">
//           <div className="flex items-center justify-center ">
//             <motion.p
//               initial={{ x: 100, opacity: 0 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="my-2 max-w-xl text-xl py-6"
//             >
//               I am a dedicated and passionate front-end web developer with a
//               solid foundation in HTML, CSS, Bootstrap, Tailwind CSS,
//               JavaScript, TypeScript, React and React Native.My
//               expertise lies in creating responsive, user-friendly, and
//               aesthetically pleasing web interfaces. I am proficient in using
//               modern front-end frameworks and libraries to build dynamic and
//               interactive web applications. My knowledge of Bootstrap and
//               Tailwind CSS allows me to efficiently design and implement
//               visually appealing and functional web pages.
//             </motion.p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;






// import React from "react";
// import { motion } from "framer-motion";

// function About() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };

//   return (
//     <div className="relative pb-32 pt-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Header */}
//         <motion.div 
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           className="mb-12 flex items-center gap-4"
//         >
//           <div className="h-[1px] w-12 bg-purple-500"></div>
//           <span className="font-mono text-xs tracking-widest text-purple-400 uppercase">System.Profile_Summary</span>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
//           {/* Left Side: The Core Pitch */}
//           <motion.div 
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="lg:col-span-8"
//           >
//             <motion.h2 variants={itemVariants} className="text-4xl lg:text-6xl font-light tracking-tighter text-white leading-tight">
//               Designing <span className="text-neutral-500">scalable</span> high-performance <span className="italic">web ecosystems.</span>
//             </motion.h2>

//             <motion.p variants={itemVariants} className="mt-8 text-xl text-neutral-400 font-light leading-relaxed max-w-2xl">
//               Front-End Developer with <span className="text-white">1+ year of experience</span>. 
//               I specialize in bridging the gap between clean, modular component architecture 
//               and <span className="text-purple-400">pixel-perfect</span> responsive interfaces.
//             </motion.p>

//             <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
//                <div className="px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-sm text-neutral-300">
//                   ⚡ REST API Integration
//                </div>
//                <div className="px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-sm text-neutral-300">
//                   🏗️ Enterprise Dashboards
//                </div>
//                <div className="px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-sm text-neutral-300">
//                   ✨ Motion Design
//                </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Side: The Technical Specs (Experimental Grid) */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="lg:col-span-4 relative"
//           >
//             <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-full"></div>
            
//             <div className="relative border border-white/10 bg-neutral-900/50 backdrop-blur-2xl rounded-3xl p-8 space-y-8">
//               <div>
//                 <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Stack.Core</h3>
//                 <p className="mt-2 text-white font-medium">React, Next.js, TypeScript</p>
//               </div>

//               <div>
//                 <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Styling.Engine</h3>
//                 <p className="mt-2 text-white font-medium">Tailwind CSS, GSAP, Framer Motion</p>
//               </div>

//               <div>
//                 <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Architecture.Pattern</h3>
//                 <p className="mt-2 text-white font-medium">Modular, Pixel-Perfect, Scalable</p>
//               </div>

//               {/* A simple "Experience Meter" or decorative graphic */}
//               <div className="pt-4 border-t border-white/5">
//                 <div className="flex justify-between text-[10px] font-mono text-neutral-500 mb-2">
//                   <span>PERFORMANCE_OPTIMIZATION</span>
//                   <span>99%</span>
//                 </div>
//                 <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
//                   <motion.div 
//                     initial={{ width: 0 }}
//                     whileInView={{ width: "99%" }}
//                     transition={{ duration: 1.5, ease: "easeOut" }}
//                     className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
//                   ></motion.div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;


// import React from "react";
// import { motion } from "framer-motion"; // or "framer-motion"

// function About() {
//   const reveal = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
//     },
//   };

//   return (
//     <div className="relative py-24 md:py-40 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Simple Numbered Header */}
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={reveal}
//           className="flex items-center gap-4 mb-20"
//         >
//           <span className="text-xs font-medium tracking-[0.3em] text-neutral-500 font-mono">01 / ABOUT</span>
//           <div className="h-[1px] w-8 bg-neutral-800"></div>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
//           {/* Large Hero Text */}
//           <div className="lg:col-span-12">
//             <motion.h2 
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={reveal}
//               className="text-5xl md:text-7xl lg:text-9xl font-medium tracking-tighter leading-[1] text-white"
//             >
//               I create <span className="text-neutral-600">seamless</span> digital <br className="hidden md:block" /> 
//               experiences that <span className="italic font-serif text-neutral-400">matter.</span>
//             </motion.h2>
//           </div>

//           {/* Detailed Bio */}
//           <div className="lg:col-span-7 mt-12">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               variants={reveal}
//             >
//               <p className="text-2xl md:text-3xl text-neutral-400 font-light leading-snug">
//                 Based in Chennai, I am a <span className="text-white">Frontend Developer</span> dedicated 
//                 to the craft of building clean, high-performance web applications.
//               </p>
              
//               <p className="mt-8 text-lg text-neutral-500 max-w-xl leading-relaxed">
//                 With a focus on <span className="text-white">React</span> and <span className="text-white">Next.js</span>, 
//                 I bridge the gap between complex engineering and intuitive design. I believe that 
//                 speed is a feature and clarity is a necessity.
//               </p>
//             </motion.div>
//           </div>

//           {/* Clean Skills List */}
//           <div className="lg:col-span-5 mt-12 lg:mt-12">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ delay: 0.4 }}
//               variants={reveal}
//               className="space-y-12"
//             >
//               {/* Expertise */}
//               <div className="group">
//                 <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-600 uppercase">Core Expertise</span>
//                 <div className="mt-4 h-[1px] w-full bg-neutral-900 group-hover:bg-neutral-700 transition-colors duration-500"></div>
//                 <p className="mt-4 text-xl font-medium text-neutral-200">React, Next.js, TypeScript, Tailwind</p>
//               </div>

//               {/* Motion */}
//               <div className="group">
//                 <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-600 uppercase">Creative Motion</span>
//                 <div className="mt-4 h-[1px] w-full bg-neutral-900 group-hover:bg-neutral-700 transition-colors duration-500"></div>
//                 <p className="mt-4 text-xl font-medium text-neutral-200">Framer Motion, GSAP, CSS Animations</p>
//               </div>

//               {/* Education */}
//               <div className="group">
//                 <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-600 uppercase">Education</span>
//                 <div className="mt-4 h-[1px] w-full bg-neutral-900 group-hover:bg-neutral-700 transition-colors duration-500"></div>
//                 <p className="mt-4 text-xl font-medium text-neutral-200">Master of Computer Applications</p>
//               </div>
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;



// import React from "react";
// import { motion } from "framer-motion";

// function About() {
//   // Reveal animation for containers
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
//     },
//   };

//   // Line drawing animation
//   const lineVariants = {
//     hidden: { scaleX: 0 },
//     visible: { 
//       scaleX: 1, 
//       transition: { duration: 1.5, ease: "circOut" } 
//     },
//   };

//   return (
//     <div className="relative py-24 md:py-40 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Animated Header Label */}
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={itemVariants}
//           className="flex items-center gap-4 mb-20"
//         >
//           <span className="text-xs font-medium tracking-[0.3em] text-neutral-500 font-mono">01 / ABOUT</span>
//           <motion.div 
//             variants={lineVariants}
//             className="h-[1px] w-12 bg-neutral-800 origin-left"
//           ></motion.div>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
//           {/* Main Headline with Word Stagger */}
//           <div className="lg:col-span-12">
//             <motion.h2 
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={containerVariants}
//               className="text-5xl md:text-7xl lg:text-9xl font-medium tracking-tighter leading-[1] text-white"
//             >
//               <motion.span variants={itemVariants} className="inline-block mr-4">I create</motion.span>
//               <motion.span variants={itemVariants} className="inline-block text-neutral-600 mr-4 italic">seamless</motion.span>
//               <motion.span variants={itemVariants} className="inline-block">digital</motion.span> 
//               <br className="hidden md:block" /> 
//               <motion.span variants={itemVariants} className="inline-block mr-4">experiences that</motion.span>
//               <motion.span variants={itemVariants} className="italic font-serif text-neutral-400">matter.</motion.span>
//             </motion.h2>
//           </div>

//           {/* Detailed Bio with Fade-in-up */}
//           <div className="lg:col-span-7 mt-12">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={containerVariants}
//             >
//               <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-neutral-400 font-light leading-snug">
//                 Based in Chennai, I am a <span className="text-white">Frontend Developer</span> dedicated 
//                 to the craft of building clean, high-performance web applications.
//               </motion.p>
              
//               <motion.p variants={itemVariants} className="mt-8 text-lg text-neutral-500 max-w-xl leading-relaxed">
//                 With a focus on <span className="text-white">React</span> and <span className="text-white">Next.js</span>, 
//                 I bridge the gap between complex engineering and intuitive design. I believe that 
//                 speed is a feature and clarity is a necessity.
//               </motion.p>
//             </motion.div>
//           </div>

//           {/* Interactive Skills List */}
//           <div className="lg:col-span-5 mt-12 lg:mt-12">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={containerVariants}
//               className="space-y-12"
//             >
//               {[
//                 { label: "Core Expertise", content: "React, Next.js, TypeScript, Tailwind" },
//                 { label: "Creative Motion", content: "Framer Motion, GSAP, CSS Animations" },
//                 { label: "Education", content: "Master of Computer Applications" }
//               ].map((skill, index) => (
//                 <motion.div 
//                   key={index}
//                   variants={itemVariants}
//                   className="group cursor-default"
//                 >
//                   <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-600 uppercase group-hover:text-purple-500 transition-colors duration-300">
//                     {skill.label}
//                   </span>
                  
//                   {/* Decorative Line that expands on hover */}
//                   <div className="relative mt-4 h-[1px] w-full bg-neutral-900 overflow-hidden">
//                     <motion.div 
//                       className="absolute inset-0 bg-white origin-left translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
//                     />
//                   </div>
                  
//                   <p className="mt-4 text-xl font-medium text-neutral-200 group-hover:translate-x-2 transition-transform duration-300">
//                     {skill.content}
//                   </p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;







import React from "react";
import { motion } from "framer-motion";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };



  return (
    <div className="relative py-20 md:py-32 lg:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
      

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24">
          
          {/* Main Headline - Responsive Text Sizes */}
          <div className="lg:col-span-12">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium tracking-tighter leading-[1.1] md:leading-[1] text-white"
            >
              <motion.span variants={itemVariants} className="inline-block mr-2 md:mr-4">I create</motion.span>
              <motion.span variants={itemVariants} className="inline-block text-neutral-600 mr-2 md:mr-4 italic">seamless</motion.span>
              <motion.span variants={itemVariants} className="inline-block">digital</motion.span> 
              <br className="max-md:hidden md:block" /> 
              <motion.span variants={itemVariants} className="inline-block mr-2 md:mr-4">experiences that</motion.span>
              <motion.span variants={itemVariants} className="italic font-serif text-neutral-400">matter.</motion.span>
            </motion.h2>
          </div>

          {/* Detailed Bio - Adjusted spacing for mobile */}
          <div className="lg:col-span-7 mt-4 md:mt-8 lg:mt-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.p variants={itemVariants} className="text-xl md:text-2xl lg:text-3xl text-neutral-400 font-light leading-snug">
                Based in Chennai, I am a <span className="text-white">Frontend Developer</span> dedicated 
                to the craft of building clean, high-performance web applications.
              </motion.p>
              
              <motion.p variants={itemVariants} className="mt-6 md:mt-8 text-base md:text-lg text-neutral-500 max-w-xl leading-relaxed">
                With a focus on <span className="text-white font-medium">React</span> and <span className="text-white font-medium">Next.js</span>, 
                I bridge the gap between complex engineering and intuitive design. I believe that 
                speed is a feature and clarity is a necessity.
              </motion.p>
            </motion.div>
          </div>

          {/* Interactive Skills List - Stacked on mobile */}
          <div className="lg:col-span-5 mt-8 md:mt-12 lg:mt-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-10 md:space-y-12"
            >
              {[
                { label: "Core Expertise", content: "React, Next.js, TypeScript, Tailwind" },
                { label: "Creative Motion", content: "Framer Motion, GSAP, CSS Animations" },
                { label: "Education", content: "Master of Computer Applications" }
              ].map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group cursor-default"
                >
                  <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-neutral-600 uppercase group-hover:text-purple-500 transition-colors duration-300">
                    {skill.label}
                  </span>
                  
                  <div className="relative mt-3 md:mt-4 h-[1px] w-full bg-neutral-900 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-white origin-left translate-x-[-100%] lg:group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                  
                  <p className="mt-3 md:mt-4 text-lg md:text-xl font-medium text-neutral-200 lg:group-hover:translate-x-2 transition-transform duration-300">
                    {skill.content}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;