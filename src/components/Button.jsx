import React from "react";

const Button = ({ label, icon, fullWidth, phoneNumber }) => {
  return (
    <a
      href={phoneNumber ? `tel:${phoneNumber}` : "#"}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-audiowide text-lg leading-none
      bg-[#1a4b27] hover:bg-[#615043] rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {icon && <span className="ml-2">{icon}</span>}
    </a>
  );
};

export default Button;
