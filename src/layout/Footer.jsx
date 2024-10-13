import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWeixin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E2D3B] text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold">Forest Group</h2>
            <p className="text-md text-gray-400">
              Building a sustainable future together.
            </p>
            <p className="text-lg font-semibold text-yellow-400">
              Serving <span className="font-bold text-white">Auckland</span> and{" "}
              <span className="font-bold text-white">Christchurch</span>.
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl font-bold">Contact Us</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-400" />{" "}
                <a
                  href="mailto:forestgroupwork@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors text-lg font-semibold"
                >
                  forestgroupwork@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaWeixin className="mr-2 text-green-500" />{" "}
                <span className="text-gray-300 text-lg">cuxt009</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="flex items-center">
                  <FaPhoneAlt className="mr-2 text-red-500" />
                  <span className="text-gray-300 text-lg">0220899308</span>
                  <span className="mx-2 text-gray-300 text-lg">|</span>
                  <span className="text-gray-300 text-lg">0211065271</span>
                </div>
                <span className="ml-0 md:ml-4 mt-2 md:mt-0 text-gray-300 text-lg font-semibold">
                  Contact: Shawn Fei
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
