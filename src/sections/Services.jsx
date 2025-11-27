import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { allServices } from "../export";

const Services = () => {

  return (
    <section
      id="services"
      className="w-full py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url('/assets/services-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 w-[90%] lg:w-[80%] mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="text-center"
        >
          <h1 className="text-turquoise text-sm tracking-[0.3em] uppercase">
            WHAT WE SPECIALIZE IN
          </h1>
          <h2 className="text-white text-3xl md:text-4xl font-bold uppercase mt-2">
            Construction & Architectural Services
          </h2>
          <div className="w-24 h-1.5 bg-turquoise mx-auto mt-4"></div>
          <p className="text-gray-200 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            From architectural drawings to complete project execution, our team delivers
            reliable, regulation-compliant and precision-driven services across Ghana.
          </p>
        </motion.div>


        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {allServices.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={zoomInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-turquoise 
                rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  {typeof Icon === 'string' ? (
                    <img
                      src={Icon}
                      alt={item.title}
                      className="w-10 h-10 object-contain p-1.5 bg-turquoise/20 rounded-lg"
                    />
                  ) : (
                    <Icon className="text-turquoise" size={38} />
                  )}
                  <h3 className="text-white text-lg font-semibold tracking-wide uppercase">
                    {item.title}
                  </h3>
                </div>

                {item.highlights && (
                  <ul className="mt-4 space-y-1 text-gray-300 text-sm">
                    {item.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-turquoise rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                <p className="text-gray-200 text-sm mt-4 line-clamp-3">
                  {item.about || item.statement}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="text-center mt-24"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-white text-2xl font-semibold">
            Want To Know All Our Capailities?
          </h3>
          <p className="text-gray-300 mt-2">
            Our team is ready to bring your construction ideas to life with precision.
          </p>
          <a
            href="/services"
            className="inline-block mt-6 px-10 py-3 bg-turquoise text-black font-semibold rounded-full 
            hover:bg-white transition"
          >
            View All Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};


export default Services;
