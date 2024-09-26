import React from "react";

// Assuming images are available with consistent naming
const projects = [
  {
    title: "Demolition",
    images: [
      "./src/assets/images/background3.png",
      "./src/assets/images/background4.png",
      "./src/assets/images/background5.png",
    ],
  },
  {
    title: "Earthworks",
    images: [
      "./src/assets/images/background6.png",
      "./src/assets/images/background7.png",
      "./src/assets/images/background8.png",
    ],
  },
  {
    title: "Drainage",
    images: [
      "./src/assets/images/background10.png",
      "./src/assets/images/background11.png",
      "./src/assets/images/background9.png",
    ],
  },
  {
    title: "Retaining Wall",
    images: [
      "./src/assets/images/background14.png",
      "./src/assets/images/background13.png",
      "./src/assets/images/background12.png",
    ],
  },
  {
    title: "All-in-one Service",
    images: [
      "./src/assets/images/background16.png",
      "./src/assets/images/background17.png",
      "./src/assets/images/background15.png",
    ],
  },
  {
    title: "Common Accessway",
    images: [
      "./src/assets/images/background19.png",
      "./src/assets/images/background20.png",
      "./src/assets/images/background18.png",
    ],
  },
];

const ProjectGallery = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
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
                    alt={`Project ${project.title} Image ${idx + 1}`}
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
