import React from "react";
import { motion } from "framer-motion";

export default function AnimatedDiv({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move down
      animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
      exit={{ opacity: 0, y: -50 }} // Fade out and move up
      transition={{ duration: 0.5 }} // Animation duration
    >
      {children}
    </motion.div>
  );
}
