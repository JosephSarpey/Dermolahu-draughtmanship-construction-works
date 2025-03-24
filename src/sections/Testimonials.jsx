/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { clients } from "../export";

const Testimonials = () => {
  return (
    <div id="clients" className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="w-[90%] m-auto py-10 pt-20 flex flex-col justify-between items-center gap-5 lg:w-[90%]"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-turquoise text-2xl md:text-3xl"
        >
          TESTIMONIALS
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-2xl font-semibold text-center md:text-3xl lg:text-4xl"
        >
          WHAT OUR CLIENTS SAY
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
          className="w-[90%]  gap-8 pt-10 grid grid-cols-1 justify-center items-center lg:grid-cols-3 lg:w-full"
        >
          {clients.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div className="border-2 border-white hover:bg-turquoise px-3 pb-20 pt-8 lg:min-h-65">
                <p className="text-white hover:text-black text-lg text-center">
                  {item.about}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-1.5">
                <img
                  className="-mt-12"
                  src={item.image}
                  alt="client image"
                />
                <h1 className="text-white text-2xl font-semibold uppercase">
                  {item.name}
                </h1>
                <h1 className="text-turquoise text-2xl">{item.post}</h1>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
