import { motion } from "framer-motion";
import { slideUpVariants } from "./animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-24 bg-fixed bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/contact-section.jpg')",
      }}
    >
      {/* TURQUOISE VIGNETTE */}
      <div className="absolute inset-0 bg-gradient-to-br from-turquoise/10 via-transparent to-black/30 pointer-events-none"></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      {/* SUBTLE MOVING PARALLAX EFFECT */}
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundPosition: "50% 50%" }}
        animate={{ backgroundPosition: "51% 49%" }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          opacity: 0.15,
        }}
      ></motion.div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-[90%] lg:w-[80%] m-auto flex lg:flex-row flex-col justify-between items-start gap-16">

        {/* LEFT TEXT + SPOTLIGHT */}
        <div className="relative lg:w-[50%] w-full">

          {/* Spotlight behind text */}
          <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px]"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className="relative flex flex-col gap-6"
          >
            <h1 className="text-2xl md:text-3xl text-turquoise font-semibold">
              CONTACT US
            </h1>

            <h2 className="text-white uppercase text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg">
              Let’s Talk About Your Project
            </h2>

            <div className="w-[120px] h-1.5 bg-turquoise"></div>

            <p className="text-lg text-gray-200 leading-relaxed mt-6">
              We’re ready to assist you with consultations, project estimates, and general inquiries.
              Reach out and our team will get back to you promptly with tailored solutions.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <motion.a
                href="/contact"
                variants={slideUpVariants}
                className="bg-turquoise hover:bg-black hover:text-white text-black font-bold px-10 py-4 rounded-lg w-full sm:w-fit text-center transition-all"
              >
                Send Us a Message
              </motion.a>

              <motion.div variants={slideUpVariants} className="w-full sm:w-auto">
                <Link
                  to="/blog"
                  className="border-2 border-turquoise text-turquoise hover:brightness-110 font-semibold px-10 py-4 rounded-lg w-full sm:w-fit transition-all block text-center"
                >
                  Request A Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* CONTACT CARDS (GLASSMORPHISM) */}
        <div className="lg:w-[50%] w-full grid md:grid-cols-2 grid-cols-1 gap-6">
          
          {/* Card Template */}
          {[
            {
              icon: faPhone,
              title: "Call Us",
              value: "0249308701 / 0508930080",
            },
            {
              icon: faEnvelope,
              title: "Email Us",
              value: "Demolahu.const@gmail.com",
            },
            {
              icon: faMapMarkerAlt,
              title: "Office Address",
              value: "Agona Nkwanta - Damtse Junction",
              span: true,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 + idx * 0.1 }}
              className={`backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-all cursor-default ${
                item.span ? "md:col-span-2" : ""
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-turquoise text-3xl mb-3" />
              <h3 className="font-bold text-xl text-white mb-2 drop-shadow-md">{item.title}</h3>
              <p className="text-gray-200">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
