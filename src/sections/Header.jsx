import { useState, useEffect, useRef } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo-cropped.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current && currentScroll > 60) {
        setIsNavbarVisible(false); 
      } else {
        setIsNavbarVisible(true);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { link: "About", path: "/about" },
    { link: "Services", path: "/services" },
    { link: "Projects", path: "/projects" },
    { link: "Contact", path: "/contact" },
    { link: "Blog", path: "/blog" },
    { link: "Get A Quote", path: "/booking" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        className="
          w-full flex justify-between items-center px-6 py-2
          backdrop-blur-xl bg-white/30
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          border-b border-white/20
        "
      >
        {/* LOGO + TITLE */}
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 rounded-full shadow-lg"
          />
          <div className="flex flex-col font-bold font-rubik leading-tight">
            <h1 className="text-lg text-black">
              Demolahu <span className="text-turquoise">Draughtsmanship</span>
            </h1>
            <h2 className="text-lg text-turquoise -mt-1">
              & Construction Ltd
            </h2>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`
                  relative px-4 py-2 transition-all
                  ${link === 'Get A Quote' 
                    ? 'bg-turquoise text-white px-6 py-2 rounded-full font-medium hover:bg-turquoise/90 shadow-md hover:shadow-lg transition-all' 
                    : 'text-black hover:text-turquoise'}
                `}
              >
                {link}

                {/* ANIMATED UNDERLINE */}
                <span
                  className="
                    absolute left-1/2 -bottom-1 w-0 h-[2px]
                    bg-turquoise transition-all duration-300
                    group-hover:w-full group-hover:left-0
                  "
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE TOGGLE */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaXmark className="text-turquoise text-3xl" />
          ) : (
            <FaBars className="text-turquoise text-3xl" />
          )}
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            absolute left-0 top-full w-full 
            transition-all duration-300 lg:hidden 
            ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
          `}
        >
          <div
            className="
              backdrop-blur-xl bg-white/50 border-b border-white/20 
              shadow-lg p-5
            "
          >
            <ul className="flex flex-col items-center gap-3">
              {navItems.map(({ link, path }) => (
                <li key={path} className="w-full">
                  <Link
                    to={path}
                    onClick={closeMenu}
                    className={`
                      block text-center w-full py-3 
                      font-semibold rounded-xl
                      transition-all
                      ${link === 'Get A Quote' 
                        ? 'bg-turquoise text-white hover:bg-turquoise/90 shadow-md' 
                        : 'text-black bg-white hover:bg-turquoise hover:text-white'}
                      backdrop-blur-md
                    `}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
