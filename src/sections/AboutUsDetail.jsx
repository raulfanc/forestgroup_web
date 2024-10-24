import React from 'react'
import { map2_svg } from '../assets/images'
const AboutUsDetail = () => {
  return (
    // text over map
    // <section className="py-3 px-4 max-w-screen-2xl mx-auto">
    //   <div className="relative grid grid-cols-1 lg:grid-cols-1 gap-4">
    //     <div className="flex items-center justify-center">
    //       <img
    //         src={map2_svg}
    //         alt="NZ Map"
    //         className="h-auto object-cover w-[230px] lg:w-[400px] lg:relative mt-4"
    //       />
    //     </div>
    //     <div className="lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center">
    //       <div className="flex flex-col justify-center bg-[#584a41] bg-opacity-60 text-white rounded-lg p-6 lg:max-w-[60%] lg:z-4 lg:mt-0">
    //         <h2 className="text-3xl font-bold mb-4">About Us </h2>
    //         <p className="text-lg">
    //           <span className="font-bold">Forest Group</span> specialises in
    //           civil construction projects ranging from small residential
    //           subdivision, large-scale greenfield subdivision and heavy civil
    //           infrastructure projects. We currently have 8 projects in Auckland
    //           and Christchurch. The founders Shawn and Kevin bring a combined
    //           25-year industry experience that covers project planning,
    //           programming, delivering, cost control, quality control and project
    //           completion reporting. The team prides themselves in their
    //           uttermost work ethics, attention to detail, problem-solving
    //           mindset. Our business principle is that we always finish what we
    //           start with, leaving our Clients satisfaction.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // text on the right
    <section className="py-3 px-4 max-w-screen-xl mx-auto m-16">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 pb-4">
        <div className="lg:col-start-1 lg:col-span-3 flex items-center justify-center">
          <img
            src={map2_svg}
            alt="location"
            className="w-[260px] h-auto object-cover lg:relative"
          />
        </div>
        <div className=" lg:col-start-4 lg:col-span-6 flex flex-col justify-center bg-[#584a41] bg-opacity-60 text-white rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
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
  )
}

export default AboutUsDetail
