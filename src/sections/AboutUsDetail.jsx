import React from 'react'
import { location, logo, nz_map } from '../assets/images'
const AboutUsDetail = () => {
  return (
    // original
    // <section className="py-3 px-4 max-w-screen-xl mx-auto">
    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    //     <div className="flex items-center justify-center">
    //       <img
    //         src={nz_map}
    //         alt="image.png"
    //         className="w-full h-auto object-cover  max-w-[61%]"
    //       />
    //     </div>
    //     <div className="flex flex-col justify-center bg-white p-6">
    //       <h2 className="text-3xl font-bold text-[#354a64] mb-4">ABOUT US</h2>
    //       <p className="text-lg text-gray-700">
    //         <span className="font-bold">Forest Group</span> specialises in civil
    //         construction projects ranging from small residential subdivision,
    //         large-scale greenfield subdivision and heavy civil infrastructure
    //         projects. We currently have 8 projects in Auckland and Christchurch.
    //         The founders Shawn and Kevin bring a combined 25-year industry
    //         experience that covers project planning, programming, delivering,
    //         cost control, quality control and project completion reporting. The
    //         team prides themselves in their uttermost work ethics, attention to
    //         detail, problem-solving mindset. Our business principle is that we
    //         always finish what we start with, leaving our Clients satisfaction.
    //       </p>
    //     </div>
    //   </div>
    // </section>

    // text over map
    <section className="py-3 px-4 max-w-screen-2xl mx-auto">
      <div className="relative grid grid-cols-1 lg:grid-cols-1 gap-4">
        <div className="flex items-center justify-center">
          <img
            src={nz_map}
            alt="NZ Map"
            className="h-auto object-cover max-w-[61%] lg:max-w-[80%] lg:relative"
          />
        </div>
        <div className="lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center">
          <div className="flex flex-col justify-center bg-[#1E2D3B] bg-opacity-60 text-white rounded-lg p-6 lg:max-w-[60%] lg:z-4 lg:mt-0">
            <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
            <p className="text-lg">
              <span className="font-bold">Forest Group</span> specialises in
              civil construction projects ranging from small residential
              subdivision, large-scale greenfield subdivision and heavy civil
              infrastructure projects. We currently have 8 projects in Auckland
              and Christchurch. The founders Shawn and Kevin bring a combined
              25-year industry experience that covers project planning,
              programming, delivering, cost control, quality control and project
              completion reporting. The team prides themselves in their
              uttermost work ethics, attention to detail, problem-solving
              mindset. Our business principle is that we always finish what we
              start with, leaving our Clients satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsDetail
