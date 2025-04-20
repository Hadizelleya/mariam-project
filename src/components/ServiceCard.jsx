import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import categoryImage from "../assets/wood-category-1.jpg";
export default function ServiceCard({ icon, title, subtitle, description }) {
  return (
    <div className="flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 group  shadow-lg h-full  rounded-t-lg hover:shadow-xl">
      <div className="flex flex-col items-center justify-center gap-5 p-5 rounded-t-lg cursor-pointer bg-white w-full h-full">
        <div>
          <img
            src={categoryImage}
            alt="category image"
            className="rounded-md"
          />
        </div>
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <h2 className="text-xl font-semibold text-center text-(--color-primary)/70">
          {subtitle}
        </h2>
        <p className="text-center text-gray-600">{description}</p>
      </div>
      <div className="flex items-center justify-between w-full px-4 py-2 bg-(--color-primary) text-white rounded-b-lg shadow-md hover:bg-(--color-black)/90 hover:text-(--color-white) transition-all duration-300 cursor-pointer">
        <p className="text-lg font-semibold">Check More</p>
        <i>
          <FaArrowRight className="text-xl font-semibold" />
        </i>
      </div>
    </div>
  );
}
