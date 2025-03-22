/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import backgroundImage from "../assets/homeimg3.jpg";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mt-17 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={slideUpVariants}
        className="h-full py-10 px-7 gap-5 w-full flex flex-col justify-between items-center md:justify-normal md:gap-5 md:w-[60%] md:items-start lg:w-1/2"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-white text-2xl text-center md:text-left md:text-3xl"
        >
          WE ARE HERE TO HELP YOU
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white text-3xl font-semibold text-center md:text-left md:text-4xl"
        >
          Quality of work is our priority
        </motion.h1>
        <div className="text-white text-base text-center md:text-left md:text-xl">
          <p>
            At Demorlahu Construction, we pride ourselves on delivering
            top-notch construction services with a focus on quality and customer
            satisfaction. Our team of experienced professionals is dedicated to
            bringing your vision to life, whether it's a residential project or
            a commercial development.
          </p>
          <p>
            We use the latest technology and sustainable practices to ensure
            every project is completed on time and within budget. Trust us to
            handle your construction needs with precision and care. Your dream
            project is our priority.
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="flex justify-center items-center gap-5"
        >
          <motion.button
            variants={zoomInVariants}
            className="bg-turquoise hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold"
          >
            READ MORE
          </motion.button>
          <motion.button
            variants={zoomInVariants}
            className="border-white hover:border-turquoise hover:text-turquoise border-2 px-10 py-3 rounded-lg text-white font-bold"
          >
            REACH US
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
