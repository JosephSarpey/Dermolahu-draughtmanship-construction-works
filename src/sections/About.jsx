/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div
    id="about"
    className="flex flex-col justify-between w-[90%] m-auto py-10 gap-10 items-start lg:w-[80%] lg:flex-row"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="w-full flex flex-col justify-center items-center gap-3 md:items-start lg:w-[60%] lg:gap-6"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-2xl text-turquoise md:text-left md:text-3xl"
        >
          WELCOME TO
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-2xl text-center font-semibold md:text-left md:text-3xl lg:text-4xl"
        >
          DEMOLAHU DRAUGHTSMANSHIP & CONSTRUCTION LTD.
        </motion.h1>
        <div className="w-[120px] h-1.5 bg-turquoise"></div>
        <p className="text-xl italic text-center text-gray-50 md:text-2xl md:text-left">
          Your trusted partner in architectural design, construction, and land
          development. We transform visions into reality with precision,
          innovation, and excellence.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="w-full  flex flex-col justify-center items-start gap-6 lg:w-[40%]"
      >
        <p className="text-white text-lg text-justify">
          At Demolahu Draughtsmanship & Construction Ltd, we bring expertise and
          innovation to the construction industry. Our company specializes in
          architectural and building drawings, construction works, land
          surveying, and cost estimation to help bring your projects to life
          with precision and efficiency. Beyond construction, we provide
          comprehensive consultancy services for building permits, soil testing,
          environmental and fire safety certifications, planning schemes, land
          acquisition, and registration—ensuring your projects meet all
          regulatory standards.
        </p>
        <motion.button
          variants={zoomInVariants}
          className="bg-turquoise hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black"
          onClick={() => navigate("/about")}
        >
          READ MORE
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
