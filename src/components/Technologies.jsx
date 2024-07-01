import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

function Technologies() {
  let iconVarients = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-6xl text-red-500" />
        </motion.div>

        <motion.div
          variants={iconVarients(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaCss3Alt className="text-6xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVarients(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BsBootstrapFill className="text-6xl text-violet-600" />
        </motion.div>

        <motion.div
          variants={iconVarients(4.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-6xl text-sky-400" />
        </motion.div>

        <motion.div
          variants={iconVarients(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-6xl text-yellow-400" />
        </motion.div>

        <motion.div
          variants={iconVarients(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-6xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVarients(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVarients(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaSquareGithub className="text-6xl text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
