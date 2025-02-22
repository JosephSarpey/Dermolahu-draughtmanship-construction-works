/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import logo from '/assets/logo.jpg' // Adjust the path to your logo image

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  const navItems = [
    { link: 'Home', path: '/' },
    { link: 'About', path: '/about' },
    { link: 'Services', path: '/services' },
    { link: 'Projects', path: '/projects' },
    { link: 'Contact', path: '/contact' },
    { link: 'Blog', path: '/blog' }, // Add Blog link
  ]

  return (
    <header className={`w-full flex flex-col items-center bg-white sticky top-0 z-50 text-sm transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <img src={logo} alt='Logo' className='h-12 w-12 mb-3' /> {/* Adjust the size as needed */}
      <nav className='w-full flex justify-between items-center gap-1 lg:px-16 px-6 py-4'>
        <div className='flex items-center'>
          <h1 className='text-black md:text-4xl text-3xl font-bold font-rubik'>Demolahu
          <span className='text-yellow-500 italic'> Draughtsmanship & Construction Ltd</span></h1>
        </div>

        <ul className='lg:flex justify-center items-center gap-6 hidden'>
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link className='text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-yellow-500 hover:text-black text-[15px]' to={path}>{link}</Link>
            </li>
          ))}
        </ul>

        <button className='bg-yellow-500 hover:bg-black hover:text-white text-black px-10 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden'>BOOK NOW</button>

        {/* mobile menu starts here */}
        <div className='flex justify-between items-center lg:hidden mt-3' onClick={toggleMenu}>
          <div>
            {isMenuOpen ? <FaXmark className='text-yellow-500 text-3xl cursor-pointer' /> : <FaBars className='text-yellow-500 text-3xl cursor-pointer' />}
          </div>
        </div>

        <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-yellow-500 p-4 absolute top-[72px] left-0`} onClick={closeMenu}>
          <ul className='flex flex-col justify-center items-center gap-2 w-full'>
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link className='text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center' to={path}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header