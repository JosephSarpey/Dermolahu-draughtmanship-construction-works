/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { allServices } from "../export";

const Services = () => {
  return (
    <section id="services" className="w-full bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="w-full m-auto py-10 flex flex-col justify-between items-center gap-5"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-turquoise text-2xl md:text-3xl"
        >
          SPECIAL OFFER
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-black uppercase text-3xl font-semibold text-center md:text-4xl lg:text-5xl"
        >
          OUR BEST SERVICES
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-1.5 bg-turquoise"
        ></motion.div>

        {/* make div for services mapping from export js file */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid grid-cols-1 justify-center items-center gap-5 lg:px-10 lg:grid-cols-3 xl:px-20 xl:gap-10"
        >
          {allServices.map((item, index) => (
            <motion.div
              variants={zoomInVariants}
              className="flex justify-center items-start gap-5 p-7 md:p-8 max-h-70 lg:min-h-120 xl:min-h-110"
              key={index}
            >
              <img
                src={item.icon}
                alt="icon"
                className="w-20 border-2 border-turquoise hover:bg-turquoise rounded-lg p-2"
              />
              <div className="flex flex-col justify-center items-start gap-3">
                <h1 className="text-xl font-semibold text-black">{item.title}</h1>
                <p className="text-lg">{item.about}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
