import React from "react";
import ServiceCard from "./ServiceCard";
import categoryImage from "../assets/wood-category-1.jpg";
import categoryImage2 from "../assets/wood-category-2.jpg";
import categoryImage3 from "../assets/wood-category-3.jpg";
import categoryImage4 from "../assets/wood-category-4.jpg";
export default function Services() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10 p-5 md:px-30 px-6 py-30 bg-(--color-wheat)">
        <h1 className="text-5xl font-bold text-center text-(--color-primary) mb-20">
          Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <ServiceCard
            image={categoryImage}
            title="Cloud Services"
            subtitle="Cloud Solutions"
            description="We offer a range of cloud services to help you scale your business."
          />
          <ServiceCard
            image={categoryImage2}
            title="Email Services"
            subtitle="Email Solutions"
            description="Secure and reliable email services for your business."
          />
          <ServiceCard
            image={categoryImage3}
            title="TV Services"
            subtitle="Entertainment Solutions"
            description="High-quality TV services for your entertainment needs."
          />
          <ServiceCard
            image={categoryImage4}
            title="Server Solutions"
            subtitle="Hosting Solutions"
            description="Reliable server solutions to host your applications."
          />
        </div>
      </div>
    </div>
  );
}
