import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { allServices } from "../export";

const Services = () => {
  return (
    <section
  id="services"
  className="w-full py-24 relative overflow-hidden"
  style={{
    backgroundImage:
      "url('/assets/services-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // Parallax effect
  }}
>
  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

  <div className="relative z-10">
    {/* Heading */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      className="w-[90%] lg:w-[80%] mx-auto flex flex-col items-center gap-4"
    >
      <h2 className="text-turquoise text-xl font-semibold tracking-wide">
        WHAT WE SPECIALIZE IN
      </h2>

      <h1 className="text-white text-3xl md:text-4xl font-bold text-center uppercase">
        Construction & Architectural Services You Can Trust
      </h1>

      <div className="w-[110px] h-1.5 bg-turquoise"></div>

      <p className="text-gray-200 text-lg md:text-xl text-center max-w-3xl mt-2 leading-relaxed">
        From architectural drawings to complete project execution, our team delivers
        reliable, regulation-compliant and precision-driven services across Ghana.
      </p>
    </motion.div>

    {/* Service Cards */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={zoomInVariants}
      className="w-[90%] lg:w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      {allServices.map((item, index) => (
        <motion.div
          key={index}
          variants={zoomInVariants}
          className="bg-white/90 backdrop-blur-xl shadow-2xl hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]
                     border border-gray-300 rounded-2xl p-7 transition-all duration-300 
                     flex gap-6 hover:-translate-y-2"
        >
          <img
            src={item.icon}
            alt={item.title}
            className="w-14 h-14 object-contain border-2 border-turquoise rounded-lg p-2"
          />
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-black">{item.title}</h3>
            <p className="text-gray-700 text-base leading-relaxed">{item.about}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* CTA */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={zoomInVariants}
      className="w-full mt-14 flex justify-center"
    >
      <a
        href="/services"
        className="bg-turquoise text-black text-lg font-semibold px-10 py-4 rounded-lg 
                   hover:brightness-110 transition-all shadow-xl"
      >
        Explore Our Full Capabilities →
      </a>
    </motion.div>
  </div>
</section>

  );
};

export default Services;
