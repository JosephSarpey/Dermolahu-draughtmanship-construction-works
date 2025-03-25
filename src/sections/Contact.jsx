/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="bg-white w-full">
      <div className="w-[90%] m-auto py-14 flex lg:flex-row flex-col justify-between items-start gap-12 lg:w-[80%] ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[60%] w-full flex flex-col justify-center items-center gap-3 lg:gap-6 md:items-start"
        >
          <motion.h1
            variants={slideUpVariants}
            className="text-2xl text-turquoise md:text-left md:text-3xl"
          >
            CONTACT US
          </motion.h1>
          <motion.h1
            variants={slideUpVariants}
            className="text-black uppercase text-2xl font-semibold text-center md:text-left md:text-3xl lg:text-4xl"
          >
            REACH US FOR ANY INQUIRY
          </motion.h1>
          <div className="w-[120px] h-1.5 bg-turquoise"></div>
          <p className="text-xl italic text-gray-600 mt-10 pr-3">
            Have questions or need assistance? Get in touch with us! Whether
            you're looking for expert consultation, project estimates, or
            general inquiries, our team is here to help. We strive to respond
            promptly and provide the best solutions tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="w-full flex flex-col justify-center items-start lg:gap-6 lg:w-[40%] "
        >
          <motion.button
            variants={zoomInVariants}
            className="bg-turquoise hover:bg-black hover:text-white px-10 py-4 text-black font-bold rounded-lg w-full flex items-center justify-center"
          >
            <Link to="/contact" className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              CONTACT US
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
