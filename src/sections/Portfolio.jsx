/* eslint-disable no-unused-vars */
import React from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const Portfolio = () => {
  return (
    <section id="projects" className="w-full m-auto py-14 pt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="flex flex-col justify-between items-center gap-5"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-turquoise text-2xl md:text-3xl"
        >
          PORTFOLIO
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-2xl font-semibold text-center md:text-3xl lg:text-4xl"
        >
          SOME OF OUR PROJECTS
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-1.5 bg-turquoise"
        ></motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="w-full m-auto grid grid-cols-1 gap-5 pt-15 px-10 md:grid-cols-2 lg:grid-cols-3"
      >
        <img src={project1} alt="project image" className="h-64 w-full rounded-2xl" />
        <img src={project2} alt="project image" className="h-64 w-full rounded-2xl" />
        <img src={project3} alt="project image" className="h-64 w-full rounded-2xl" />
        <img src={project4} alt="project image" className="h-64 w-full rounded-2xl" />
        <img src={project5} alt="project image" className="h-64 w-full rounded-2xl" />
        <img src={project6} alt="project image" className="h-64 w-full rounded-2xl" />
        <img src={project7} alt="project image" className="h-64 w-full rounded-2xl" />
        <img src={project8} alt="project image" className="h-64 w-full rounded-2xl" />
      </motion.div>
    </section>
  );
};

export default Portfolio;
