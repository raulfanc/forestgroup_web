import React, { useEffect, useState } from "react";
import {
  background3,
  background4,
  background5,
  background6,
  background7,
  background8,
  background9,
  background10,
  background11,
  background12,
  background13,
  background14,
  background15,
  background16,
  background17,
  background18,
  background19,
  background20,
  _background3,
  _background4,
  _background5,
  _background6,
  _background7,
  _background8,
  _background9,
  _background10,
  _background11,
  _background12,
  _background13,
  _background14,
  _background15,
  _background16,
  _background17,
  _background18,
  _background19,
  _background20,
} from "../assets/images";

const highResImages = {
  background3,
  background4,
  background5,
  background6,
  background7,
  background8,
  background9,
  background10,
  background11,
  background12,
  background13,
  background14,
  background15,
  background16,
  background17,
  background18,
  background19,
  background20,
};

const lowResImages = {
  background3: _background3,
  background4: _background4,
  background5: _background5,
  background6: _background6,
  background7: _background7,
  background8: _background8,
  background9: _background9,
  background10: _background10,
  background11: _background11,
  background12: _background12,
  background13: _background13,
  background14: _background14,
  background15: _background15,
  background16: _background16,
  background17: _background17,
  background18: _background18,
  background19: _background19,
  background20: _background20,
};

const projects = [
  {
    title: "Demolition",
    images: ["background3", "background4", "background5"],
  },
  {
    title: "Earthwork",
    images: ["background6", "background7", "background8"],
  },
  {
    title: "Drainage",
    images: ["background10", "background11", "background9"],
  },
  {
    title: "Retaining Wall",
    images: ["background14", "background13", "background12"],
  },
  {
    title: "All-in-one Service",
    images: ["background16", "background17", "background15"],
  },
  {
    title: "Common Accessway",
    images: ["background19", "background20", "background18"],
  },
];

const ProjectGallery = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Effect to handle window resize events to set mobile state dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-pale-800 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#354a64] mb-12">
          Our Projects
        </h1>
        {projects.map((project, index) => (
          <div key={index} className="mb-12 bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">
              {project.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((imageKey, idx) => {
                // Select the appropriate image based on isMobile flag
                const imageSrc = isMobile
                  ? lowResImages[imageKey]
                  : highResImages[imageKey];
                return (
                  <div
                    key={idx}
                    className="bg-gray-200 rounded-lg overflow-hidden"
                  >
                    <img
                      src={imageSrc}
                      alt={`${project.title} project image ${idx + 1}`}
                      className="object-cover w-full h-48"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
