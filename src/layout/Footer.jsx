import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* 使用 grid 布局，小屏幕上下排列，大屏幕左右排列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 左侧：联系方式 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <div className="flex items-center">
              <span className="mr-2 text-lg">📧</span>
              <a
                href="mailto:forestgroupwork@gmail.com"
                className="text-gray-300 hover:text-white transition-colors text-lg font-semibold"
              >
                forestgroupwork@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-lg">📞</span>
              <span className="text-gray-300 text-lg">0220899308</span>
              <span className="mx-2 text-gray-300 text-lg">|</span>
              <span className="text-gray-300 text-lg">0211065271</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-lg">WeChat:</span>
              <span className="text-gray-300 text-lg">
                cuxt009, kevin20090320
              </span>
            </div>
          </div>

          {/* 右侧：公司信息 */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold">Forest Group</h2>
            <p className="text-md text-gray-400">
              Building a sustainable future together.
            </p>
            <p className="text-lg font-semibold text-yellow-400">
              Serving <span className="font-bold text-white">Auckland</span> and{" "}
              <span className="font-bold text-white">Christchurch</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
