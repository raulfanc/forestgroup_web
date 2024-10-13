import React from "react";
import videoBackground from "../assets/videos/background2.mp4"; // Assuming your video is saved in this path

const Background = ({ content }) => {
  return (
    <section className="relative mt-20 w-full h-[500px] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoBackground}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content Over the Video */}
      <div className="relative z-4 h-full text-white flex items-center justify-center lg:justify-start px-8">
        {content && content}
      </div>
    </section>
  );
};

export default Background;
