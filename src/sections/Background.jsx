import React, { useEffect, useRef, useState } from "react";
import videoBackground from "../assets/videos/background2.mp4";
import { useNavigate, useLocation } from "react-router-dom";

const Background = ({ content }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 检测是否是微信浏览器
    const isWeChatBrowser = () => /MicroMessenger/i.test(window.navigator.userAgent);

    // 判断是否是第一次加载
    const hasRedirected = localStorage.getItem('hasRedirected');

    if (isWeChatBrowser() && !hasRedirected) {
      // 第一次访问主页，跳转到任意页面（例如 /about-us）
      localStorage.setItem('hasRedirected', 'true'); // 设置已跳转标记
      navigate('/about-us'); // 跳转到其他页面
    } else if (location.pathname === '/about-us') {
      // 如果当前页面是 about-us，返回到主页
      setTimeout(() => {
        navigate('/'); // 自动返回主页
      }, 1000); // 1秒延迟后返回主页
    } else {
      // 视频加载事件监听器
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
      {/* 视频背景 */}
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

      {/* 视频上的内容 */}
      <div className="relative z-4 h-full text-white flex items-center justify-center lg:justify-start px-8">
        {content && content}
      </div>
    </section>
  );
};

export default Background;
