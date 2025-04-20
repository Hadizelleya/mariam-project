import React from "react";
import ServiceCard from "./ServiceCard";
import { FaCloud } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoTv } from "react-icons/io5";
import { HiServer } from "react-icons/hi2";

export default function Services() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10 p-5 md:px-30 px-6 py-30 bg-(--color-wheat)">
        <h1 className="text-5xl font-bold text-center text-(--color-primary) mb-20">
          Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <ServiceCard
            icon={<FaCloud />}
            title="Cloud Services"
            subtitle="Cloud Solutions"
            description="We offer a range of cloud services to help you scale your business."
          />
          <ServiceCard
            icon={<IoMail />}
            title="Email Services"
            subtitle="Email Solutions"
            description="Secure and reliable email services for your business."
          />
          <ServiceCard
            icon={<IoTv />}
            title="TV Services"
            subtitle="Entertainment Solutions"
            description="High-quality TV services for your entertainment needs."
          />
          <ServiceCard
            icon={<HiServer />}
            title="Server Solutions"
            subtitle="Hosting Solutions"
            description="Reliable server solutions to host your applications."
          />
        </div>
      </div>
    </div>
  );
}
