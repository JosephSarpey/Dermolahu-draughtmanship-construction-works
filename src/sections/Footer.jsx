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
  return (
    <>
      <div className="bg-black text-white px-10 pt-10 pb-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p>
              DERMOLAHU DRAUGHTSMANSHIP & CONSTRUCTION WORKS is dedicated to
              providing top-notch construction services. Our team of experts
              ensures quality and reliability in every project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li>
                <Link to="/services" className="hover:underline cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline cursor-pointer">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:underline cursor-pointer">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>Email: Demolahu.const@gmail.com</p>
            <p>Phone: 0249308701 / 0508930080</p>
            <p>Address: Agona Nkwanta (Damtse Junction)</p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/share/r/19xwCNKL9j/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="cursor-pointer hover:text-turquoise" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="cursor-pointer hover:text-turquoise" />
              </a>
              <a
                href="https://www.instagram.com/demolahu_engineering.kenjack?utm_source=qr&igsh=anBoeTVlZW1lejd1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer hover:text-turquoise" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="cursor-pointer hover:text-turquoise" />
              </a>
              <a
                href="https://wa.me/+233249308701"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="cursor-pointer hover:text-turquoise" />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-5 border-gray-600" />

        <div className="flex justify-center items-center gap-2 mt-5">
          <p className="text-sm text-center">
            &copy; 2025, DERMOLAHU DRAUGHTSMANSHIP & CONSTRUCTION LTD, All
            Rights Reserved.
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="text-xs text-center italic mt-3">
            Powered By <b>J&K </b>
            Technologies
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <div
        id="icon-box"
        className="bg-turquoise text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
      >
        <a href="#top">
          <FaArrowUp className="size-6" />
        </a>
      </div>
    </>
  );
};

export default Footer;
