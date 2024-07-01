import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';


function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6i4za5a", "template_73vwnt1", form.current, {
        publicKey: "7ihUlmNH72tVXsg9Y",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          toast.success("message send successfully")

          setTimeout(()=>{
            window.scrollTo(top)
          },4000)
          
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="mb-20">
      <motion.h1
       initial={{ y: -100, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration: 1.1 }} 
      className="text-center my-20 text-4xl">Contact <span className="text-neutral-500">Me</span> </motion.h1>

      <form className="max-w-md mx-auto" ref={form} onSubmit={sendEmail}>
        <div className="mb-5">
          <motion.label
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
            htmlFor="your_name"
            className="block mb-2 lg:text-xl sm:text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </motion.label>
          <motion.input
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
            type="text"
            id="your_name"
            name="from_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 lg:text-xl sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-5">
          <motion.label
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
            htmlFor="your_email"
            className="block mb-2 lg:text-xl sm:text-sm font-medium text-gray-900 dark:text-white"
          >
            Mail
          </motion.label>
          <motion.input
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
            type="text"
            id="your_email"
            name="from_email"
            className="bg-gray-50 border border-gray-300 text-gray-900 lg:text-xl sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div>
          <motion.label
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
            htmlFor="message"
            className="block mb-2 lg:text-xl sm:text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </motion.label>
          <motion.textarea
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
            id="message"
            rows="4"
            name="message"
            className="block p-2.5 w-full lg:text-xl sm:text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
          ></motion.textarea>
        </div>

        <div className="text-center mt-5">
          <button
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contacts;
