import React, { useState } from 'react'
import { navLinks } from '../constants'
import { IoMenu } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { logo3 } from '../assets/images'

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
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
