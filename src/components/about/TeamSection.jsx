import SectionHeading from "../ui/SectionHeading";
import { team } from "../../export";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const TeamSection = () => {
  return (
    <section className="relative py-12 overflow-hidden bg-black">

      {/* Floating gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-32 w-96 h-96 bg-turquoise/20 blur-[130px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full animate-pulse-slower"></div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [-20, 40],
              x: [0, i % 2 === 0 ? 20 : -20]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          ></motion.span>
        ))}
      </div>

      <SectionHeading
        title="Meet Our Team"
        subtitle="A dedicated group of professionals committed to excellence."
        center
      />

      {/* Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-16">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
          >
            <Tilt
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#2dd4bf"
              className="bg-white/5 backdrop-blur-xl border border-white/10 
                         rounded-2xl p-10 text-center shadow-2xl 
                         transition-all duration-300 group"
            >
              {/* Avatar glow */}
              <div className="relative w-40 h-40 mx-auto">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="absolute inset-0 bg-turquoise/20 blur-2xl rounded-full group-hover:bg-turquoise/30 transition-all"
                ></motion.div>

                <img
                  src={member.img}
                  alt={member.name}
                  className="relative w-40 h-40 rounded-full object-cover 
                             border-4 border-gray-800 shadow-xl 
                             group-hover:shadow-turquoise/40 transition-all duration-300"
                />
              </div>

              <h3 className="text-turquoise text-2xl font-semibold mt-6 tracking-wide">
                {member.name}
              </h3>

              <p className="text-gray-300 text-sm mt-2">
                {member.role}
              </p>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
