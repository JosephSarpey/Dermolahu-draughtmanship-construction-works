import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { projects } from "../export";

const Portfolio = () => {
  return (
    <section id="projects" className="w-full py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="flex flex-col justify-between items-center gap-3 mb-10"
      >
        <motion.p
          variants={slideUpVariants}
          className="text-turquoise text-lg md:text-xl tracking-wider"
        >
          PORTFOLIO
        </motion.p>

        <motion.h2
          variants={slideUpVariants}
          className="text-white uppercase text-3xl font-bold text-center md:text-4xl lg:text-5xl"
        >
          SOME OF OUR PROJECTS
        </motion.h2>

        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-turquoise rounded-full"
        ></motion.div>

        {/* NEW – credibility sentence */}
        <motion.p
          variants={slideUpVariants}
          className="text-gray-300 text-center text-base md:text-lg max-w-2xl mt-4"
        >
          We specialize in delivering both residential and commercial projects with modern architectural standards, precision execution, and long-lasting structural integrity.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative group overflow-hidden rounded-2xl cursor-pointer"
          >
            <img
              src={p.img}
              alt={p.title}
              className="h-56 w-full object-cover rounded-2xl group-hover:brightness-50 transition-all duration-300"
            />

            {/* Project Info - Always visible on mobile, hover on desktop */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/80 to-transparent rounded-2xl">
              <div className="mt-auto mb-3">
                <h3 className="text-white text-lg md:text-xl font-semibold">{p.title}</h3>
                <p className="text-turquoise text-sm md:text-base mt-1">{p.category}</p>
                <button className="mt-2 md:mt-3 px-3 py-1 md:px-4 md:py-1.5 bg-turquoise text-black text-xs md:text-sm font-medium rounded-full hover:bg-white transition-all">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-12">
        <Link 
          to="/projects" 
          className="px-8 py-3 border border-turquoise text-turquoise rounded-full hover:bg-turquoise hover:text-white transition-all font-medium"
        >
          View More Projects
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
