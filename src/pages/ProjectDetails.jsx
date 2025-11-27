/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import projects from "../data/projects";
import { slideUpVariants, zoomInVariants } from "../sections/animation";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-black text-white text-xl">
        Project not found.
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen text-gray-200">
      {/* Full Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          src={project.image}
          className="w-full h-full object-cover"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="relative z-10">
        <Header />

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            variants={slideUpVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold text-white"
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={slideUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-4 w-[90%] md:w-[60%] text-gray-300 text-sm md:text-base leading-relaxed"
          >
            {project.subtitle || "A detailed look into the project execution and results."}
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="w-[90%] mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT COLUMN — IMAGE */}
          <motion.div
            variants={zoomInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 overflow-hidden rounded-xl"
          >
            <img
              src={project.image}
              className="w-full h-full rounded-xl object-cover shadow-lg"
            />
          </motion.div>

          {/* RIGHT COLUMN — DETAILS */}
          <motion.div
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-white">Project Details</h3>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Project Metadata */}
            <div className="mt-6 space-y-3 text-sm">
              {project.location && (
                <p>
                  <span className="font-semibold text-white">Location:</span>{" "}
                  {project.location}
                </p>
              )}
              {project.client && (
                <p>
                  <span className="font-semibold text-white">Client:</span>{" "}
                  {project.client}
                </p>
              )}
              {project.duration && (
                <p>
                  <span className="font-semibold text-white">Duration:</span>{" "}
                  {project.duration}
                </p>
              )}
              {project.category && (
                <p>
                  <span className="font-semibold text-white">Category:</span>{" "}
                  {project.category}
                </p>
              )}
            </div>
          </motion.div>
        </div>

        {/* WRITEUP SECTION */}
        <motion.div
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 w-full md:w-[80%] mx-auto"
        >
          <h2 className="text-3xl font-semibold">Project Overview</h2>
          <p className="mt-4 text-gray-300 leading-relaxed text-sm md:text-base">
            {project.longDescription ||
              "This project was executed with precision, ensuring top-tier quality in design, functionality, and finishing. Our team deployed advanced methods and premium materials to deliver a structure that is both elegant and durable. From planning to execution, every detail reflects our commitment to excellence."}
          </p>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-20 text-center mt-20">
        <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl p-10 border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-bold text-white">Do You Want Something Like This?</h2>
          <p className="mt-4 text-gray-300 text-sm w-[75%] md:w-[55%] mx-auto leading-relaxed">
            Let our team craft a remarkable project tailored specifically for your needs.
            From initial concept to final execution — we deliver premium results every time.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-turquoise/90 hover:bg-turquoise text-black font-medium 
                      px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default ProjectDetails;
