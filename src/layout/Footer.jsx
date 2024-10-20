import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaWeixin } from 'react-icons/fa'

const Footer = () => {
  return (
    // <footer className="bg-[#1E2D3B] text-white py-8">
    //   <div className="max-w-screen-xl mx-auto px-4">
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

    //       {/* Left Section - Company Info */}
    //       <div className="flex flex-col space-y-3 text-center md:text-left">
    //         <h2 className="text-3xl font-bold">Forest Group</h2>
    //         <p className="text-sm text-gray-300">
    //           Building a sustainable future together.
    //         </p>
    //         <p className="text-md font-semibold text-white">
    //           Serving <span className="font-bold text-yellow-400">Auckland</span> and{" "}
    //           <span className="font-bold text-yellow-400">Christchurch</span>.
    //         </p>
    //       </div>

    //       {/* Middle Section - keep it blank */}
    //       <div className="flex flex-col space-y-6 text-center md:text-left">
    //       </div>

    //       {/* Right Section - Contact Info */}
    //       <div className="flex flex-col space-y-6 text-center md:text-left">
    //         <h3 className="text-xl font-bold">Contact: Shawn Fei</h3>
    //         <div className="space-y-3">
    //           <div className="flex items-center justify-center md:justify-start">
    //             <FaEnvelope className="mr-2 text-blue-400" />
    //             <a
    //               href="mailto:forestgroupwork@gmail.com"
    //               className="text-white hover:text-yellow-400 transition-colors text-md"
    //             >
    //               forestgroupwork@gmail.com
    //             </a>
    //           </div>
    //           <div className="flex items-center justify-center md:justify-start">
    //             <FaWeixin className="mr-2 text-green-500" />
    //             <span className="text-white text-md">cuxt009</span>
    //           </div>
    //           <div className="flex items-center justify-center md:justify-start">
    //             <FaPhoneAlt className="mr-2 text-[#f5d430]" />
    //             <span className="text-white text-md">0220899308 | 0211065271</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* CTA */}
    //     <div className="text-center mt-8">
    //       <p className="text-lg text-gray-200">
    //         Ready to build a sustainable future? <a href="/contact-us" className="text-yellow-400 hover:text-white transition-colors">Get in touch with us!</a>
    //       </p>
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-[#eae0d5] py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> */}
        <div className="md:flex md:justify-between">
          {/* Left Section - Company Info */}
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-3xl font-bold">Forest Group</h2>
            <p className="text-sm text-[#584a41]">
              Building a sustainable future together.
            </p>
            <p className="text-md font-semibold ">
              Serving <span className="font-bold text-[#085332]">Auckland</span>{' '}
              and <span className="font-bold text-[#085332]">Christchurch</span>
              .
            </p>
          </div>

          {/* Right Section - Contact Info */}
          <div className="pt-8 space-y-2 text-center md:text-left md:pt-0 ">
            <h3 className="text-xl font-bold">Contact: Shawn Fei</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 text-blue-400" />
                <a
                  href="mailto:forestgroupwork@gmail.com"
                  className="hover:text-[#085332] transition-colors text-md"
                >
                  forestgroupwork@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaWeixin className="mr-2 text-green-500" />
                <span className=" text-md">cuxt009</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="mr-2 text-[#f9c938]" />
                <span className=" text-md">0220899308 | 0211065271</span>
              </div>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-lg text-[#584a41]">
            Ready to build a sustainable future?
            <span className="block sm:inline">
              {' '}
              <a
                href="/contact-us"
                className="text-[#085332] hover:text-[#073e29] transition-colors"
              >
                Get in touch with us!
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
