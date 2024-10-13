import React from "react";
import { location } from "../assets/images";
const AboutUsDetail = () => {
  return (
    <section className="py-3 px-4 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex items-center justify-center">
          <img
            src={location}
            alt="image.png"
            className="w-full h-auto object-cover  max-w-[61%]"
          />
        </div>
        <div className="flex flex-col justify-center bg-white p-6">
          <h2 className="text-3xl font-bold text-[#354a64] mb-4">ABOUT</h2>
          <p className="text-lg text-gray-700">
            <span className="font-bold">Forest Group</span> specialises in civil
            construction projects ranging from small residential subdivision,
            large-scale greenfield subdivision and heavy civil infrastructure
            projects. We currently have 8 projects in Auckland and Christchurch.
            The founders Shawn and Kevin bring a combined 25-year industry
            experience that covers project planning, programming, delivering,
            cost control, quality control and project completion reporting. The
            team prides themselves in their uttermost work ethics, attention to
            detail, problem-solving mindset. Our business principle is that we
            always finish what we start with, leaving our Clients satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsDetail;
