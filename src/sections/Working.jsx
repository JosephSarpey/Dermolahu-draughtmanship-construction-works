/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { planning } from "../export";

const Working = () => {
  return (
    <div id="working" className="w-full bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="w-[90%] m-auto py-10 pt-20 flex flex-col justify-between items-center gap-5 lg:w-[80%] "
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-turquoise text-2xl md:text-3xl"
        >
          A SYSTEMATIC APPROACH
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-black uppercase text-2xl font-semibold text-center md:text-3xl lg:text-4xl"
        >
          HOW OUR EXPERT ENGINEERS WORK
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
          className="w-full gap-5 pt-10 grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-4 "
        >
          {planning.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-5 border-2 border-turquoise rounded-md p-6 lg:min-h-110 xl:min-h-110"
            >
              <div>
                <item.icon className="size-20 bg-turquoise hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer" />
              </div>
              <h1 className="text-xl font-semibold uppercase">{item.title}</h1>
              <p className="text-lg text-center text-gray-600">
                {item.about}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Working;
