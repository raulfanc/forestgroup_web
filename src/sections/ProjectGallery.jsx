import React from "react";
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
} from "../assets/images";
// Assuming images are available with consistent naming
const projects = [
  {
    title: "Demolition",
    images: [background3, background4, background5],
  },
  {
    title: "Earthworks",
    images: [background6, background7, background8],
  },
  {
    title: "Drainage",
    images: [background10, background11, background9],
  },
  {
    title: "Retaining Wall",
    images: [background14, background13, background12],
  },
  {
    title: "All-in-one Service",
    images: [background16, background17, background15],
  },
  {
    title: "Common Accessway",
    images: [background19, background20, background18],
  },
];

const ProjectGallery = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
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
              {project.images.map((image, idx) => (
                <div
                  key={idx}
                  className="bg-gray-200 rounded-lg overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`image.png`}
                    className="object-cover w-full h-48"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
