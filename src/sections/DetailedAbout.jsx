/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { slideUpVariants, zoomInVariants } from "./animation";
import { planning } from "../export";

const DetailedAbout = () => {
  return (
    <div className="w-full">
      <Header />
      <section id="about" className="w-[90%] m-auto lg:w-full py-10 mt-17">
        <div className="flex flex-col m-auto justify-between items-start pb-10 gap-12 lg:flex-row lg:w-[90%] lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-3 lg:gap-6"
          >
            <motion.h1
              variants={slideUpVariants}
              className="text-2xl text-turquoise md:text-left md:text-3xl"
            >
              WELCOME TO
            </motion.h1>
            <motion.h1
              variants={slideUpVariants}
              className="text-white uppercase text-2xl font-semibold md:text-left md:text-3xl lg:text-4xl"
            >
              DEMOLAHU DRAUGHTSMANSHIP & CONSTRUCTION LTD.
            </motion.h1>
            <div className="w-[120px] h-1.5 bg-turquoise"></div>
            <p className="text-2xl italic text-gray-50 mt-10">
              Your trusted partner in architectural design, construction, and
              land development. We transform visions into reality with
              precision, innovation, and excellence.
            </p>
            <p className="text-white text-lg mt-5">
              At Demolahu Draughtmanship & Construction Ltd, our vision is to be
              the leading provider of innovative and sustainable construction
              solutions. Our goal is to exceed client expectations through our
              commitment to quality, safety, and customer satisfaction. We
              aspire to create lasting impacts on the communities we serve by
              delivering exceptional building solutions tailored to our clients'
              needs.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className="w-full flex flex-col justify-center items-start lg:w-[40%] lg:gap-6"
          >
            <p className="text-white text-lg text-justify">
              Our company specializes in architectural and building drawings,
              construction works, land surveying, and cost estimation to help
              bring your projects to life with precision and efficiency. Beyond
              construction, we provide comprehensive consultancy services for
              building permits, soil testing, environmental and fire safety
              certifications, planning schemes, land acquisition, and
              registration—ensuring your projects meet all regulatory standards.
            </p>
            <p className="text-white text-lg text-justify mt-5">
              We also offer AutoCAD training for professionals and students
              looking to master architectural and structural design tools. With
              a strong commitment to quality, safety, and customer satisfaction,
              we aim to deliver exceptional building solutions tailored to your
              needs. Whether you're starting a new construction project, need
              expert guidance, or require premium building materials, we are
              your trusted partner every step of the way.
            </p>
          </motion.div>
        </div>
        <div className="w-full m-auto flex flex-col gap-10 py-10 md:px-50 lg:w-[80%]">
          <div className="">
            <h2 className="text-white text-2xl font-semibold mb-3">
              Our Vision
            </h2>
            <p className="text-white text-base text-justify">
              To be the leading provider of innovative and sustainable
              construction solutions, transforming the built environment with
              excellence and integrity.
            </p>
          </div>

          <div className="">
            <h2 className="text-white text-2xl font-semibold mb-3">
              Our Goals
            </h2>
            <p className="text-white text-base text-justify">
              Our goals are to exceed client expectations through our commitment
              to quality, safety, and customer satisfaction. We aim to create
              lasting impacts on the communities we serve by delivering
              exceptional building solutions tailored to our clients' needs.
            </p>
          </div>

          <div className="">
            <h2 className="text-white text-2xl font-semibold mb-3">
              Our Mission
            </h2>
            <p className="text-white text-base text-justify">
              Our mission is to provide comprehensive construction services that
              meet the highest standards of quality and safety. We strive to
              innovate and excel in every project, ensuring our clients' visions
              are realized with precision and efficiency.
            </p>
          </div>
        </div>

        <div id="working" className="w-full bg-white py-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className="w-[90%] m-auto flex flex-col justify-between items-center gap-5"
          >
            <motion.h1
              variants={slideUpVariants}
              className="text-turquoise text-2xl"
            >
              A SYSTEMATIC APPROACH
            </motion.h1>
            <motion.h1
              variants={slideUpVariants}
              className="text-black uppercase text-2xl font-semibold text-center lg:text-4xl"
            >
              HOW OUR EXPERT ENGINEERS WORK
            </motion.h1>
            <motion.div
              variants={slideUpVariants}
              className="w-[120px] h-1.5 bg-turquoise"
            ></motion.div>

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
                  <h1 className="text-xl font-semibold uppercase">
                    {item.title}
                  </h1>
                  <p className="text-lg text-center text-gray-600">
                    {item.about}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="lg:w-[80%] w-[90%] m-auto pt-10">
          <h2 className="text-white text-center text-2xl font-semibold">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap justify-between items-start gap-7">
            <div className="w-80 m-auto pt-10  flex flex-col items-center">
              <img
                src="/assets/ceo_profile.png"
                alt="Staff Member 1"
                className="team-image"
              />
              <h3 className="text-turquoise text-xl mt-[20px]">
                Eng. Kenneth Cudjoe
              </h3>
              <p className="text-white text-lg text-center">
                CEO/Managing Director
              </p>
            </div>
            <div className="w-80 m-auto pt-10  flex flex-col items-center">
              <img
                src="/assets/mg_director.jpg"
                alt="Staff Member 2"
                className="team-image"
              />
              <h3 className="text-turquoise text-xl mt-[20px]">
                Miss Elizabeth Obeng
              </h3>
              <p className="text-white text-lg text-center">
                Assistant Managing Director
              </p>
            </div>
            <div className="w-80 m-auto pt-10  flex flex-col items-center">
              <img
                src="/assets/qty_surveyor.jpg"
                alt="Staff Member 3"
                className="team-image"
              />
              <h3 className="text-turquoise text-xl mt-[20px]">
                Sampson kofi Imbeah
              </h3>
              <p className="text-white text-lg text-center">
                Quantity Surveyor
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      <style>
        {`
          .team-image {
            width: 150px; /* Set a fixed width */
            height: 150px; /* Set a fixed height */
            object-fit: cover; /* Ensure the image covers the area */
            border-radius: 50%; /* Make the image rounded */
          }
        `}
      </style>
    </div>
  );
};

export default DetailedAbout;
