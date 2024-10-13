import React, { useEffect, useRef, useState } from "react";
import videoBackground from "../assets/videos/background2.mp4";

const Background = ({ content }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Event listener to determine when the video has loaded enough to start playing
    const handleLoadedData = () => {
      setIsVideoLoaded(true);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("loadeddata", handleLoadedData);
    }

    // Cleanup event listener when component unmounts
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("loadeddata", handleLoadedData);
      }
    };
  }, []);

  return (
    <section className="relative mt-20 w-full h-[500px] overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={videoBackground}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Content Over the Video */}
      <div className="relative z-4 h-full text-white flex items-center justify-center lg:justify-start px-8">
        {content && content}
      </div>
    </section>
  );
};

export default Background;
