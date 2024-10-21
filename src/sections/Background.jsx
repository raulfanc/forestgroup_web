import React, { useEffect, useRef, useState } from "react";
import videoBackground from "../assets/videos/background2.mp4";
import wx from 'weixin-js-sdk'; 

const Background = ({ content }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // 检测是否为微信浏览器
    const isWeChatBrowser = () => /MicroMessenger/i.test(window.navigator.userAgent);

    // 视频加载完成时触发
    const handleLoadedData = () => {
      setIsVideoLoaded(true);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("loadeddata", handleLoadedData);

      // 如果是微信浏览器，使用微信JS-SDK确保自动播放
      if (isWeChatBrowser()) {
        wx.ready(() => {
          videoElement.play();
        });
      }
    }

    // 清理事件监听
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("loadeddata", handleLoadedData);
      }
    };
  }, []);

  // 判断是否是微信浏览器
  const isWeChatBrowser = /MicroMessenger/i.test(window.navigator.userAgent);

  return (
    <section className="relative mt-20 w-full h-[500px] overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={videoBackground}
        autoPlay={!isWeChatBrowser}
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Content Over the Video */}
      <div className="relative z-4 h-full text-white flex items-center justify-center lg:justify-start px-8 sm:px-1">
        {content && content}
      </div>
    </section>
  );
};

export default Background;
