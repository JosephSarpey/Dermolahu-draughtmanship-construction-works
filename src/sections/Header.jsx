/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo-cropped.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // filepath: /c:/Users/HP/OneDrive/Desktop/demorlahu construction/vite-project/src/sections/Header.jsx

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Services", path: "/services" },
    { link: "Projects", path: "/projects" },
    { link: "Contact", path: "/contact" },
    { link: "Blog", path: "/blog" },
    { link: "Booking", path: "/booking" }, // Add Booking link
  ];

  return (
    <header
      className={`fixed w-full z-10 flex flex-col justify-between items-center bg-white transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-full flex justify-between items-center px-6 py-2 gap-1 lg:px-6">
        <div className="flex flex-row space-x-1 items-center">
          <img src={logo} alt="Logo" className="h-13 w-13 rounded-full" />{" "}
          <div className="flex flex-col text-base font-bold font-rubik md:text-xl">
            <h1 className="text-black">
              Demolahu <span className="text-turquoise">Draughtsmanship</span>
            </h1>
            <h1 className="text-turquoise -mt-2">& Construction Ltd</h1>
          </div>
        </div>

        <ul className="hidden justify-center items-center text-sm lg:flex ">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                className="text-black py-6 px-3 hover:text-turquoise hover:border-b-4 hover:border-b-turquoise"
                to={path}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* mobile menu starts here */}
        <div
          className="flex justify-between items-center lg:hidden mt-3"
          onClick={toggleMenu}
        >
          <div>
            {isMenuOpen ? (
              <FaXmark className="text-amber-500 text-3xl cursor-pointer" />
            ) : (
              <FaBars className="text-amber-500 text-3xl cursor-pointer" />
            )}
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } w-full h-fit bg-amber-500 p-4 absolute top-[72px] left-0`}
          onClick={closeMenu}
        >
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  className="text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center"
                  to={path}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
