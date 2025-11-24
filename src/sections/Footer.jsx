/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaArrowUp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        className="relative text-white px-8 pt-20 pb-10"
        style={{
          backgroundImage: "url('/assets/footer-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 z-10">

          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/logo-cropped.jpg" 
                alt="Demolahu Draughtsmanship & Construction" 
                className="h-16 w-16 rounded-full border-2 border-turquoise"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Demolahu <span className="text-turquoise">Draughtsmanship</span>
                </h1>
                <p className="text-sm text-gray-300">& Construction Ltd</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              DERMOLAHU DRAUGHTSMANSHIP & CONSTRUCTION WORKS delivers reliable,
              high-standard construction services with unmatched precision,
              expertise, and commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-turquoise">
              Quick Links
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/services" className="hover:text-white transition-all">Services</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-all">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-all">About</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-all">Projects</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-turquoise">
              Contact Us
            </h2>
            <p className="text-gray-300">Email: Demolahu.const@gmail.com</p>
            <p className="text-gray-300">Phone: 0249308701 / 0508930080</p>
            <p className="text-gray-300">Address: Agona Nkwanta (Damtse Junction)</p>

            <div className="flex gap-5 mt-5">
              {[
                { icon: FaFacebook, link: "https://www.facebook.com/share/r/19xwCNKL9j/" },
                { icon: FaTwitter, link: "https://twitter.com" },
                {
                  icon: FaInstagram,
                  link: "https://www.instagram.com/demolahu_engineering.kenjack?utm_source=qr&igsh=anBoeTVlZW1lejd1",
                },
                { icon: FaLinkedin, link: "https://linkedin.com" },
                { icon: FaWhatsapp, link: "https://wa.me/+233249308701" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <item.icon className="size-6 text-gray-300 group-hover:text-turquoise group-hover:scale-110 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Separator */}
        <div className="relative z-10">
          <hr className="my-10 border-gray-700" />

          <p className="text-center text-sm text-gray-400">
            &copy; 2025, DERMOLAHU DRAUGHTSMANSHIP & CONSTRUCTION LTD. All Rights Reserved.
          </p>

          <p className="text-center text-xs italic mt-2 text-gray-500">
            Powered By <span className="font-semibold text-turquoise">THE MEGAS TECH INC.</span>
          </p>
        </div>
      </footer>

      {/* Scroll to Top */}
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 bg-turquoise text-black shadow-xl 
                 p-3 rounded-full hover:bg-white hover:scale-105 active:scale-95 
                 transition-all duration-300"
      >
        <FaArrowUp className="size-6" />
      </button>
    </>
  );
};

export default Footer;
 