import React, { useEffect, useState } from "react";
import { background2, background3, background4 } from "../assets/images";

const Background = ({ content }) => {
  const backgrounds = [background4, background2, background3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);
  return (
    <section className="relative mt-28 w-full h-[500px] ">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${backgrounds[currentImageIndex]})`,
        }}
      />
      <div className="absolute inset-0 bg-blue-600 bg-opacity-50" />
      <div className="relative z-4 h-full text-white flex justify-center lg:justify-start">
        {content && content}
      </div>
    </section>
  );
};

export default Background;
