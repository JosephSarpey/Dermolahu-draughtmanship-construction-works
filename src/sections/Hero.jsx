import backgroundImage from "../assets/homeimg3.jpg";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { FaHardHat, FaClipboardCheck, FaAward, FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelopeCircleCheck, FaHelmetUn } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[88vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="relative z-10 w-[90%] lg:w-[60%] px-6 py-20 flex flex-col gap-6 text-center md:text-left"
      >
        {/* Headline */}
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight">
          Precision-Driven Construction & Architectural Design
        </h1>

        {/* Subheadline */}
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl">
          Delivering trusted architectural drawings, land development services, and full project execution across Ghana — on time, on budget, with excellence.
        </p>

        {/* KPI Badges */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-1">
          {[
            { text: "10+ Years Industry Experience", icon: <FaHardHat className="mr-2" /> },
            { text: "500+ Completed Projects", icon: <FaClipboardCheck className="mr-2" /> },
            { text: "ISO-Certified Work Standards", icon: <FaAward className="mr-2" /> },
            { text: "Serving Ghana Nationwide", icon: <FaMapMarkerAlt className="mr-2" /> },
          ].map((item, index) => (
            <motion.span
              key={index}
              variants={zoomInVariants}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm md:text-base font-medium px-4 py-2 rounded-full flex items-center"
            >
              {item.icon}
              {item.text}
            </motion.span>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="flex flex-col sm:flex-row gap-5 mt-6 justify-center md:justify-start"
        >
          <a
            href="/contact"
            className="bg-turquoise hover:brightness-110 text-black px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 group"
          >
            Request A Quote
            <FaEnvelopeCircleCheck className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/projects" 
            className="border-2 border-white hover:border-turquoise hover:text-turquoise px-6 py-3 rounded-lg text-white font-semibold transition-all flex items-center gap-2 group"
          >
            <FaHelmetUn className="group-hover:animate-pulse" />
            Visit Our Portfolio
          </a>
        </motion.div>

        {/* Optional — TRUST LOGOS (COMMENTED OUT UNTIL READY) */}
        {/*
        <div className="mt-8 flex flex-wrap gap-6 opacity-80">
          <img src="/trust/client1.png" alt="Client Logo" className="h-10" />
          <img src="/trust/client2.png" alt="Client Logo" className="h-10" />
          <img src="/trust/client3.png" alt="Client Logo" className="h-10" />
          <img src="/trust/client4.png" alt="Client Logo" className="h-10" />
        </div>
        */}
      </motion.div>
    </section>
  );
};

export default Hero;
