import React from "react";
import { IoSearch } from "react-icons/io5";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "../assets/mariamLogo.png"; // Adjust the path to your logo image

export default function HeroSection() {
  // Use Framer Motion's useScroll to track scroll progress
  const { scrollY } = useScroll();

  // Transform scrollY to dynamic height and opacity values
  const heroHeight = useTransform(scrollY, [0, 600], [1000, 500]); // Shrinks from 800px to 200px
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0]); // Fades out from 1 to 0

  return (
    <motion.div
      className="w-full bg-[url(./assets/wood.jpg)] bg-cover bg-no-repeat bg-center relative"
      style={{
        height: heroHeight, // Dynamically adjust height
        opacity: heroOpacity, // Dynamically adjust opacity
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white/60" />
      <div className="z-10 relative flex  p-7 md:p-0 items-center justify-evenly h-full">
        <div className="flex flex-col items-center justify-center text-center mt-20 md:mt-0">
          <h2 className="text-black text-6xl font-semibold">Start Here</h2>
          <p className="text-black text-2xl font-semibold mt-5 max-w-[600px] text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            non. Est ratione voluptate in eos laboriosam rem, minima cum rerum.
          </p>
        </div>

        <div>
          <img src={logo} alt="logo" className="w-[90%]" />
        </div>
      </div>
    </motion.div>
  );
}
