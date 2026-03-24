import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // useSpring makes the bar feel "liquid" and smooth rather than robotic
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 z-[9999] origin-left"
      style={{ scaleX }}
    />
  );
}

export default ScrollProgress;