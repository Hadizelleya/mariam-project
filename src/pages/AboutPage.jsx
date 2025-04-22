import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";
import About from "../components/About";

export default function AboutPage() {
  return (
    <AnimatedDiv>
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 mt-30">
        <h1 className="text-4xl font-bold mt-20">About Us</h1>
        <About />
      </div>
    </AnimatedDiv>
  );
}
