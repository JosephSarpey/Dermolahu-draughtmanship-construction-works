import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { useNavigate } from "react-router-dom";
import aboutImage from "../assets/about.jpg";

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="relative w-full py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={aboutImage}
          className="w-full h-full object-cover"
          alt="Construction background"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content Container */}
      <div className="w-[90%] lg:w-[80%] m-auto flex flex-col lg:flex-row-reverse items-center gap-14 relative z-10">
      {/* Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="flex-[0.45] w-full"
      >
        <img
          src={aboutImage}
          alt="Architectural construction project by Demolahu Draughtsmanship"
          className="rounded-xl shadow-xl object-cover w-full h-[350px] md:h-[420px]"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="flex-[0.55] flex flex-col gap-6 text-center md:text-left"
      >
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug uppercase">
          Building Excellence from Blueprint to Completion
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Demolahu Draughtsmanship & Construction Ltd. is a trusted construction and
          architectural design company delivering high-precision building plans, land development,
          surveying, and full project consultancy across residential, commercial, and industrial projects.
        </p>

        <ul className="text-gray-200 text-lg leading-relaxed space-y-2 backdrop-blur-sm bg-black/30 p-6 rounded-xl">
          <li>• Architectural & structural drawings</li>
          <li>• Land surveying and cost estimation</li>
          <li>• Construction and project supervision</li>
          <li>• Consultancy for permits, soil testing, safety & land registration</li>
        </ul>

        <motion.button
          variants={zoomInVariants}
          onClick={() => navigate("/about")}
          className="bg-turquoise/90 hover:bg-turquoise text-black cursor-pointer px-10 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 w-fit mx-auto md:mx-0"
        >
          Learn More About Us
        </motion.button>
      </motion.div>
      </div>
    </section>
  );
};

export default About;
