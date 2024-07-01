import React from "react";
import aboutImg from "../assets/aff1.png";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              width={350}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src={aboutImg}
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8 lg:mt-3">
          <div className="flex items-center justify-center ">
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="my-2 max-w-xl py-6"
            >
              I am a dedicated and passionate front-end web developer with a
              solid foundation in HTML, CSS, Bootstrap, Tailwind CSS,
              JavaScript, TypeScript, and React.js. As a fresher in the
              industry, I bring a fresh perspective and a strong eagerness to
              learn and grow in the ever-evolving field of web development.My
              expertise lies in creating responsive, user-friendly, and
              aesthetically pleasing web interfaces. I am proficient in using
              modern front-end frameworks and libraries to build dynamic and
              interactive web applications. My knowledge of Bootstrap and
              Tailwind CSS allows me to efficiently design and implement
              visually appealing and functional web pages.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
