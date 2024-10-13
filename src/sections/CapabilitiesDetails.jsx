import React from "react";
import { FaBuilding, FaMap, FaClipboardCheck, FaHardHat } from "react-icons/fa";

const CapabilitiesDetails = () => {
  const capabilities = [
    {
      title: "Early Contractor Involvement (ECI)",
      description:
        "We offer ECI service to Clients that study sites during the pre-development stage. We have pragmatic lens that can advise Clients to look out for critical issues that define the project feasibility.",
      icon: <FaBuilding className="text-5xl text-indigo-600" />,
      bgColor: "bg-indigo-100",
    },
    {
      title: "Cadastral and Construction Survey",
      description:
        "We offer a full range of survey services including topographic survey, construction survey set-out, as-built and cadastral survey.",
      icon: <FaMap className="text-5xl text-green-600" />,
      bgColor: "bg-green-100",
    },
    {
      title: "Detailed Construction Planning",
      description:
        "We keep our Clients fully engaged across all aspects of the projects. We prepare daily site reports and provide early warnings to Clients if any potential scope variations arise.",
      icon: <FaClipboardCheck className="text-5xl text-yellow-600" />,
      bgColor: "bg-yellow-100",
    },
    {
      title: "Civil Construction",
      description:
        "Our team has vast experience with Tier 1 Contractors and has built core competencies in managing a wide range of civil construction techniques.",
      icon: <FaHardHat className="text-5xl text-red-600" />,
      bgColor: "bg-red-100",
    },
  ];

  return (
    <div className="h-auto bg-[#FFFFFF] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#354a64] mb-16">
          Our Capabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg shadow-lg ${capability.bgColor} flex`}
            >
              <div className="mr-6">{capability.icon}</div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesDetails;
