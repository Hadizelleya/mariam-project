import React from "react";
import { IoSearch } from "react-icons/io5";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  // Use Framer Motion's useScroll to track scroll progress
  const { scrollY } = useScroll();

  // Transform scrollY to dynamic height and opacity values
  const heroHeight = useTransform(scrollY, [0, 600], [1000, 500]); // Shrinks from 800px to 200px
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0]); // Fades out from 1 to 0

  return (
    <motion.div
      className="w-full bg-[url(./assets/background2.jpg)] bg-cover bg-no-repeat bg-center relative"
      style={{
        height: heroHeight, // Dynamically adjust height
        opacity: heroOpacity, // Dynamically adjust opacity
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/65" />
      <div className="z-10 relative flex flex-col p-7 md:p-0 items-center justify-center">
        <h1 className="text-7xl sm:text-8xl text-(--color-primary)  text-shadow-md text-shadow-white font-bold mt-40 mb-20">
          عربسات
        </h1>
        <h2 className="text-white text-5xl font-semibold">Start Here</h2>
        <p className="text-white text-xl font-light mt-5 max-w-[600px] text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
          non. Est ratione voluptate in eos laboriosam rem, minima cum rerum.
        </p>
        <div className="flex items-center justify-between mt-20 bg-white w-full max-w-[600px] rounded-md shadow-md">
          <input
            type="text"
            placeholder="Search"
            className="text-xl px-5 py-3 rounded-l-md focus:outline-none w-full"
          />
          <i>
            <IoSearch className="bg-(--color-primary) rounded-r-md text-2xl p-2 text-white font-bold w-[53px] h-[53px] cursor-pointer" />
          </i>
        </div>
      </div>
    </motion.div>
  );
}
