// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { motion } from "framer-motion";
// import { toast } from 'react-toastify';


// function Contacts() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_6i4za5a", "template_73vwnt1", form.current, {
//         publicKey: "7ihUlmNH72tVXsg9Y",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//           e.target.reset();
//           toast.success("message send successfully")

//           setTimeout(()=>{
//             window.scrollTo(top)
//           },4000)
          
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <div className="mb-20">
//       <motion.h1
//        initial={{ y: -100, opacity: 0 }}
//        whileInView={{ y: 0, opacity: 1 }}
//        transition={{ duration: 1.1 }} 
//       className="text-center my-20 text-4xl">Contact <span className="text-neutral-500">Me</span> </motion.h1>

//       <form className="max-w-md mx-auto" ref={form} onSubmit={sendEmail}>
//         <div className="mb-5">
//           <motion.label
//           initial={{ x: -100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//             htmlFor="your_name"
//             className="block mb-2 lg:text-xl sm:text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Name
//           </motion.label>
//           <motion.input
//           initial={{ x: 100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//             type="text"
//             id="your_name"
//             name="from_name"
//             className="bg-gray-50 border border-gray-300 text-gray-900 lg:text-xl sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-5">
//           <motion.label
//           initial={{ x: -100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//             htmlFor="your_email"
//             className="block mb-2 lg:text-xl sm:text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Mail
//           </motion.label>
//           <motion.input
//           initial={{ x: 100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//             type="text"
//             id="your_email"
//             name="from_email"
//             className="bg-gray-50 border border-gray-300 text-gray-900 lg:text-xl sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             required
//           />
//         </div>

//         <div>
//           <motion.label
//           initial={{ x: -100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//             htmlFor="message"
//             className="block mb-2 lg:text-xl sm:text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Your message
//           </motion.label>
//           <motion.textarea
//           initial={{ x: 100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//             id="message"
//             rows="4"
//             name="message"
//             className="block p-2.5 w-full lg:text-xl sm:text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Leave a comment..."
//           ></motion.textarea>
//         </div>

//         <div className="text-center mt-5">
//           <button
//             type="submit"
//             className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Contacts;



// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { motion } from "framer-motion";
// import { toast } from 'react-toastify';
// import { FiSend, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";

// function Contacts() {
//   const form = useRef();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     emailjs
//       .sendForm("service_6i4za5a", "template_73vwnt1", form.current, {
//         publicKey: "7ihUlmNH72tVXsg9Y",
//       })
//       .then(
//         () => {
//           setIsSubmitting(false);
//           toast.success("Message sent successfully!");
//           e.target.reset();

//           setTimeout(() => {
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//           }, 4000);
//         },
//         (error) => {
//           setIsSubmitting(false);
//           toast.error("Failed to send message.");
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <div className="pb-24 px-6">
//       {/* Section Header */}
//       <motion.div
//         initial={{ y: -50, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="text-center my-20"
//       >
//         <h2 className="text-xs font-mono tracking-[0.5em] text-purple-500 uppercase mb-4">Get In Touch</h2>
//         <h1 className="text-4xl lg:text-6xl font-light tracking-tighter text-white">
//           Let's Build <span className="text-neutral-500 italic font-medium">Something.</span>
//         </h1>
//       </motion.div>

//       <div className="max-w-2xl mx-auto relative">
//         {/* Background Glow */}
//         <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-3xl rounded-[3rem]"></div>

//         <motion.form
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           ref={form}
//           onSubmit={sendEmail}
//           className="relative z-10 p-8 lg:p-12 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl shadow-2xl"
//         >
//           {/* Name Field */}
//           <div className="mb-8 group">
//             <label htmlFor="your_name" className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-neutral-500 uppercase group-focus-within:text-purple-400 transition-colors">
//               <FiUser /> Name
//             </label>
//             <input
//               type="text"
//               id="your_name"
//               name="from_name"
//               required
//               placeholder="John Doe"
//               className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-4 text-white outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all duration-300"
//             />
//           </div>

//           {/* Email Field */}
//           <div className="mb-8 group">
//             <label htmlFor="your_email" className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-neutral-500 uppercase group-focus-within:text-purple-400 transition-colors">
//               <FiMail /> Email
//             </label>
//             <input
//               type="email"
//               id="your_email"
//               name="from_email"
//               required
//               placeholder="hello@world.com"
//               className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-4 text-white outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all duration-300"
//             />
//           </div>

//           {/* Message Field */}
//           <div className="mb-10 group">
//             <label htmlFor="message" className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-neutral-500 uppercase group-focus-within:text-purple-400 transition-colors">
//               <FiMessageSquare /> Message
//             </label>
//             <textarea
//               id="message"
//               rows="5"
//               name="message"
//               required
//               placeholder="Tell me about your project..."
//               className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-4 text-white outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               disabled={isSubmitting}
//               type="submit"
//               className="relative overflow-hidden group w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium tracking-widest flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] disabled:opacity-50"
//             >
//               <span className="relative z-10 flex items-center gap-2 uppercase text-xs tracking-[0.2em]">
//                 {isSubmitting ? "Transmitting..." : "Send Message"} 
//                 <FiSend className={`transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${isSubmitting ? 'animate-pulse' : ''}`} />
//               </span>
              
//               {/* Button Shine Effect */}
//               <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
//             </motion.button>
//           </div>
//         </motion.form>

//         {/* Decorative Mono Text */}
//         <div className="hidden lg:block absolute -right-20 bottom-10 rotate-90 text-[10px] font-mono text-neutral-700 tracking-[1em] uppercase">
//           Transmission_Ready
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contacts;



import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import { FiSend, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";

function Contacts() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_6i4za5a", "template_73vwnt1", form.current, {
        publicKey: "7ihUlmNH72tVXsg9Y",
      })
      .then(
        () => {
          setIsSubmitting(false);
          toast.success("Message sent successfully!");
          e.target.reset();

          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 4000);
        },
        (error) => {
          setIsSubmitting(false);
          toast.error("Failed to send message.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="pb-16 md:pb-24 px-4 md:px-6 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center my-12 md:my-20"
      >
       
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter text-white">
          Let's Build <span className="text-neutral-500 italic font-serif">Something.</span>
        </h1>
      </motion.div>

      <div className="max-w-2xl mx-auto relative ">
        {/* Responsive Background Glow */}
        <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-2xl md:blur-3xl rounded-[2rem] md:rounded-[3rem]"></div>

        <motion.form
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          ref={form}
          onSubmit={sendEmail}
          className="relative z-10 p-6 md:p-10 lg:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 bg-neutral-900/40 backdrop-blur-3xl shadow-2xl"
        >
          {/* Grid for Name & Email on Desktop, Stacked on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            {/* Name Field */}
            <div className="group">
              <label htmlFor="your_name" className="flex items-center gap-2 mb-3 text-sm font-mono tracking-widest text-neutral-500 uppercase group-focus-within:text-purple-400 transition-colors">
                <FiUser /> Name
              </label>
              <input
                type="text"
                id="your_name"
                name="from_name"
                required
                placeholder="Name"
                className="w-full bg-white/[0.03] border border-white/5 rounded-xl md:rounded-2xl p-4 text-white text-sm outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all duration-300 placeholder:text-neutral-700"
              />
            </div>

            {/* Email Field */}
            <div className="group">
              <label htmlFor="your_email" className="flex items-center gap-2 mb-3 text-sm font-mono tracking-widest text-neutral-500 uppercase group-focus-within:text-purple-400 transition-colors">
                <FiMail /> Email
              </label>
              <input
                type="email"
                id="your_email"
                name="from_email"
                required
                placeholder="Email"
                className="w-full bg-white/[0.03] border border-white/5 rounded-xl md:rounded-2xl p-4 text-white text-sm outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all duration-300 placeholder:text-neutral-700"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-8 md:mb-10 group">
            <label htmlFor="message" className="flex items-center gap-2 mb-3 text-sm font-mono tracking-widest text-neutral-500 uppercase group-focus-within:text-purple-400 transition-colors">
              <FiMessageSquare /> Message
            </label>
            <textarea
              id="message"
              rows="4"
              name="message"
              required
              placeholder="Tell me about your project..."
              className="w-full bg-white/[0.03] border border-white/5 rounded-xl md:rounded-2xl p-4 text-white text-sm outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all duration-300 resize-none placeholder:text-neutral-700"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="relative overflow-hidden group w-full py-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium tracking-widest flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_40px_rgba(147,51,234,0.4)] disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center gap-2 uppercase text-[10px] md:text-xs font-bold tracking-[0.2em]">
                {isSubmitting ? "Transmitting..." : "Send Message"} 
                <FiSend className={`transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${isSubmitting ? 'animate-pulse' : ''}`} />
              </span>
              
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </motion.button>
          </div>
        </motion.form>

       
      </div>
    </div>
  );
}

export default Contacts;