const Button = ({ label, icon, fullWidth, phoneNumber }) => {
  return (
    <a
      href={phoneNumber ? `tel:${phoneNumber}` : "#"}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-sans text-lg leading-none
      bg-orange-400 hover:bg-orange-500 rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {icon && <span className="ml-2">{icon}</span>}
    </a>
  );
};

export default Button;
