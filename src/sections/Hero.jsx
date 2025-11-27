import backgroundImage from "../assets/homeimg_hd.jpg";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { FaHardHat, FaClipboardCheck, FaAward, FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelopeCircleCheck, FaHelmetSafety } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative mt-5 w-full min-h-[88vh] bg-cover bg-center flex items-center justify-center md:justify-start"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="relative z-10 w-[95%] sm:w-[90%] lg:w-[60%] px-4 sm:px-6 md:pl-12 lg:pl-24 py-12 sm:py-16 md:py-20 flex flex-col gap-5 sm:gap-6 text-center md:text-left justify-center md:justify-start items-center md:items-start"
      >
        {/* Headline */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tight">
          Precision-Driven Construction & Architectural Design
        </h1>

        {/* Subheadline */}
        <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mt-1 sm:mt-3 md:max-w-2xl">
          Delivering trusted architectural drawings, land development services, and full project execution across Ghana — on time, on budget, with excellence.
        </p>

        {/* KPI Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center md:justify-start gap-3 sm:gap-4 mt-2 sm:mt-4">
          {[
            { text: "10+ Years Industry Experience", icon: <FaHardHat className="mr-2" /> },
            { text: "500+ Completed Projects", icon: <FaClipboardCheck className="mr-2" /> },
            { text: "ISO-Certified Work Standards", icon: <FaAward className="mr-2" /> },
            { text: "Serving Ghana Nationwide", icon: <FaMapMarkerAlt className="mr-2" /> },
          ].map((item, index) => (
            <motion.span
              key={index}
              variants={zoomInVariants}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm md:text-base font-medium px-3 sm:px-4 py-2 sm:py-2.5 rounded-full flex items-center justify-center"
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
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center md:justify-start w-full"
        >
          <a
            href="/contact"
            className="bg-turquoise hover:brightness-110 text-black px-6 py-3 sm:py-3.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group text-sm sm:text-base w-full sm:w-auto"
          >
            Request A Quote
            <FaEnvelopeCircleCheck className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/projects"
            className="border-2 border-turquoise hover:border-turquoise hover:text-turquoise px-6 py-3 sm:py-3.5 rounded-lg text-white font-semibold transition-all flex items-center justify-center gap-2 group text-sm sm:text-base w-full sm:w-auto"
          >
            Visit Our Portfolio
            <FaHelmetSafety className="group-hover:animate-pulse" />
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
