/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { planning } from "../export";

const Working = () => {
  return (
    <section
      id="working"
      className="w-full bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: "url('/assets/footer-bg.jpg')", 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="relative w-[90%] lg:w-[80%] mx-auto py-24 flex flex-col items-center gap-6"
      >
        {/* Gradient for title area */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/60 to-transparent -z-10"></div>

        <motion.h2
          variants={slideUpVariants}
          className="text-turquoise text-xl tracking-wide"
        >
          A SYSTEMATIC APPROACH
        </motion.h2>

        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-3xl lg:text-5xl font-bold text-center"
        >
          How Our Expert Engineers Work
        </motion.h1>

        <motion.div
          variants={slideUpVariants}
          className="w-[140px] h-1.5 bg-turquoise"
        ></motion.div>

        {/* Cards */}
        <motion.div
          variants={zoomInVariants}
          className="w-full pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {planning.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center gap-4
              bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8
              transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <item.icon
                className="w-20 h-20 p-4 rounded-full bg-turquoise text-white 
                transition-all duration-300 hover:bg-black"
              />

              <h3 className="text-xl font-semibold uppercase tracking-wide text-white">
                {item.title}
              </h3>

              <p className="text-gray-200 leading-relaxed text-base">
                {item.about}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Working;
