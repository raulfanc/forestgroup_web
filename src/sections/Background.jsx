import React, { useEffect, useRef, useState } from "react";
import videoBackground from "../assets/videos/background2.mp4";
import { useLocation, useNavigate } from "react-router-dom";

const Background = ({ content }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 检测是否是微信浏览器
    const isWeChatBrowser = () => /MicroMessenger/i.test(window.navigator.userAgent);

    // 当页面首次加载时跳转到其他页面并回来
    if (isWeChatBrowser() && !location.search.includes('redirected=true')) {
      // 跳转到 About 页面，附加查询参数 redirected=true，避免无限循环
      navigate('/about-us?redirected=true');
    } else {
      // 如果已经重定向过，继续加载视频
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
      };

      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement.addEventListener("loadeddata", handleLoadedData);
      }

      // 清理事件监听器
      return () => {
        if (videoElement) {
          videoElement.removeEventListener("loadeddata", handleLoadedData);
        }
      };
    }
  }, [location, navigate]);

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
