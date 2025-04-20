import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";
import About from "../components/About";

export default function AboutPage() {
  return (
    <AnimatedDiv>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">About Us</h1>
        <About />
      </div>
    </AnimatedDiv>
  );
}
