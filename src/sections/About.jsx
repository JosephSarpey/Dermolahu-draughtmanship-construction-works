/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { useNavigate } from "react-router-dom";
import aboutImage from "../assets/about.jpg";
import { FaInfoCircle } from "react-icons/fa";

const About = () => {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="w-[90%] lg:w-[80%] m-auto py-16 flex flex-col lg:flex-row-reverse items-center gap-14"
    >
      {/* Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="flex-[0.45] w-full"
      >
        <img
          src={aboutImage}
          alt="Architectural construction project by Demolahu Draughtsmanship"
          className="rounded-xl shadow-xl object-cover w-full h-[350px] md:h-[420px]"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="flex-[0.55] flex flex-col gap-6 text-center md:text-left"
      >
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug uppercase">
          Building Excellence from Blueprint to Completion
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Demolahu Draughtsmanship & Construction Ltd. is a trusted construction and
          architectural design company delivering high-precision building plans, land development,
          surveying, and full project consultancy across residential, commercial, and industrial projects.
        </p>

        <ul className="text-gray-200 text-lg leading-relaxed space-y-2">
          <li>• Architectural & structural drawings</li>
          <li>• Land surveying and cost estimation</li>
          <li>• Construction and project supervision</li>
          <li>• Consultancy for permits, soil testing, safety & land registration</li>
        </ul>

        <motion.button
          variants={zoomInVariants}
          onClick={() => navigate("/about")}
          className="bg-turquoise text-black cursor-pointer px-10 py-3 font-semibold rounded-lg hover:brightness-110 transition-all w-fit mx-auto md:mx-0"
        >

          Learn More About Us

        </motion.button>
      </motion.div>
    </section>
  );
};

export default About;
