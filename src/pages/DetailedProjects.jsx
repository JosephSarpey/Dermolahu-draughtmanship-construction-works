/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import projects from "../data/projects";
import { slideUpVariants, zoomInVariants } from "../sections/animation";

const DetailedProjects = () => {
  return (
    <div className="relative w-full min-h-screen text-gray-200">
      {/* Full Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
          className="w-full h-full object-cover"
          alt="Construction background"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="relative z-10">
        <Header />

        {/* Hero Title */}
        <section className="relative w-full h-[40vh] flex items-center justify-center">
          <motion.h1
            variants={slideUpVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold text-white text-center px-4"
          >
            Our Completed Projects
          </motion.h1>
        </section>

      {/* Projects Grid */}
      <section className="w-[90%] mx-auto py-10 backdrop-blur-sm bg-black/30 rounded-2xl my-10 p-6">
        <motion.h2
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center mb-12"
        >
          Explore Our Work
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={zoomInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg rounded-xl overflow-hidden
                         transform transition-transform duration-300 hover:scale-[1.03] cursor-pointer hover:shadow-2xl"
              onClick={() => (window.location.href = `/project/${project.id}`)}
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400 mt-2 text-sm line-clamp-3">
                  {project.description}
                </p>
                <button className="mt-4 text-turquoise font-medium">
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 text-center mt-20">
        <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl p-10 border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-bold text-white">Let’s Build Your Dream Project</h2>
          <p className="mt-4 text-gray-300 text-sm w-[75%] md:w-[55%] mx-auto leading-relaxed">
            From architectural planning to premium construction solutions, our team
            delivers high-quality results that exceed expectations. Talk to us today
            and bring your vision to life.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-turquoise/90 hover:bg-turquoise text-black font-medium 
                      px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default DetailedProjects;
