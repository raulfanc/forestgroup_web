import React, { useState } from "react";
import { logo } from "../assets/images";
import { navLinks } from "../constants";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <header className="padding-x py-8  fixed z-10 w-full  bg-orange-200">
      <nav className="flex justify-between items-center max-container">
        <Link to="/">
          <img src={logo} alt="Logo" width={120} height={40} />
        </Link>
        <ul className="flex-1 flex justify-end items-end gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="hover:bg-slate-400 font-bold">
              <Link
                to={item.href}
                className="font-montserrat leading-normal text-lg text-slate-900"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="hidden max-lg:block cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpenMenu ? (
            <IoClose size={60} color="white" />
          ) : (
            <IoMenu size={60} color="white" />
          )}
        </div>
      </nav>
      {isOpenMenu && (
        <div className="absolute mt-5 pl-5 top-20 left-0 w-full bg-blue-800 flex flex-col items-center max-lg:block lg:hidden">
          <ul className="flex flex-col gap-4 py-4">
            {navLinks.map((item) => (
              <li key={item.label} className="hover:bg-slate-400">
                <Link
                  to={item.href}
                  className="font-montserrat text-lg text-slate-100"
                  onClick={() => setIsOpenMenu(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
