import React, { useState } from 'react'
import { logo } from '../assets/images'
import { navLinks } from '../constants'
import { IoMenu } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { logo2, logo3 } from '../assets/images'

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    // original
    // <header className="fixed z-10 w-full">
    //   <nav className="grid grid-cols-5 items-center">
    //     <div className="col-span-1  h-full bg-white flex items-center justify-center p-2">
    //       <NavLink to="/">
    //         <img src={logo} alt="Logo" width={120} height={40} />
    //       </NavLink>
    //     </div>

    //     <div className="col-span-4 h-full bg-[#1E2D3B] text-white flex items-center justify-end p-6 space-x-4">
    //       <ul className="flex-1 flex justify-end items-end gap-16 max-lg:hidden pr-12">
    //         {navLinks.map((item) => (
    //           <li key={item.label} className="hover:text-orange-500 ">
    //             <NavLink
    //               to={item.href}
    //               className={({ isActive }) =>
    //                 `font-sans text-lg ${
    //                   isActive ? "text-orange-500" : "text-slate-50"
    //                 }`
    //               }
    //             >
    //               {item.label}
    //             </NavLink>
    //           </li>
    //         ))}
    //       </ul>
    //       <div
    //         className="hidden max-lg:block cursor-pointer"
    //         onClick={toggleMenu}
    //       >
    //         {isOpenMenu ? (
    //           <IoClose size={35} color="white" />
    //         ) : (
    //           <IoMenu size={35} color="white" />
    //         )}
    //       </div>
    //     </div>
    //   </nav>
    //   {isOpenMenu && (
    //     <div className="absolute mt-5 pl-5 top-20 left-0 w-full bg-[#1E2D3B] rounded-lg shadow-lg">
    //       <ul className="flex flex-col gap-2 py-4">
    //         {navLinks.map((item) => (
    //           <li key={item.label}>
    //             <NavLink
    //               to={item.href}
    //               className={({ isActive }) =>
    //                 `font-montserrat text-lg p-2 block transition-colors duration-200 ${
    //                   isActive ? "text-orange-500" : "text-slate-100"
    //                 } hover:bg-blue-700 rounded-lg`
    //               }
    //               onClick={() => setIsOpenMenu(false)}
    //             >
    //               {item.label}
    //             </NavLink>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   )}
    // </header>

    // beige or white nav bar
    <header className="fixed z-10 w-full">
      {/* <nav className="flex items-center justify-between bg-white p-2"> */}
      {/* for colored backgground for nav bar */}
      <nav className="uppercase shadow-md flex items-center justify-between bg-[#eae0d5] p-2">
        <div className="flex items-center">
          <NavLink to="/">
            <img src={logo3} alt="Logo" className="max-w-[110px] h-auto pl-8" />
          </NavLink>
          <NavLink to="/">
            {' '}
            <span className="font-audiowide pl-4 text-[18px]">
              FOREST GROUP
            </span>
          </NavLink>
        </div>

        <div>
          <ul className="flex-1 flex justify-end gap-8 max-lg:hidden pr-4 text-[15px]">
            {navLinks.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `font-audiowide  ${
                      isActive
                        ? 'text-[#085332]'
                        : 'text-black hover:text-[#085332]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={toggleMenu}
          >
            {isOpenMenu ? (
              <IoClose size={35} color="black" />
            ) : (
              <IoMenu size={35} color="black" />
            )}
          </div>
        </div>
      </nav>
      {isOpenMenu && (
        <div className="uppercase font-audiowide mt-4 absolute top-20 w-full bg-[#eae0d5] transition-colors rounded-lg shadow-lg">
          <ul>
            {navLinks.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `shadow-lg text-[15px] pl-12 p-4 block transition-colors duration-200 ${
                      isActive ? 'text-[#085332]' : 'text-black'
                    } hover:bg-[#d6c6b9] rounded-lg`
                  }
                  onClick={() => setIsOpenMenu(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Nav
