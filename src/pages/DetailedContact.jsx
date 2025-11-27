import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { slideUpVariants, zoomInVariants } from "../sections/animation";
import ContactForm from "../components/ContactForm";

const bgImage =
  "url('/assets/contact.jpeg')";

const DetailedContact = () => {

  return (
    <div className="w-full bg-black text-white relative">
      <Header />

      {/* Background with overlay + spotlight + moving texture */}
      <section
        className="relative py-28 px-6 lg:px-0"
        style={{
          backgroundImage: `${bgImage}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Spotlight gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent pointer-events-none"></div>

        {/* Subtle moving background texture */}
        <div className="absolute inset-0 opacity-[0.13] animate-[moveBg_18s_linear_infinite] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

        <div className="relative max-w-6xl w-[90%] m-auto lg:w-[80%] z-10">
          <div className="flex flex-col lg:flex-row justify-between gap-16">

            {/* LEFT → Text + info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideUpVariants}
              className="w-full lg:w-[55%] space-y-10"
            >
              <div>
                <h1 className="text-turquoise text-xl font-semibold tracking-wide">
                  CONTACT US
                </h1>

                <h2 className="mt-3 text-4xl lg:text-5xl font-bold leading-tight text-white">
                  Let’s Talk About Your Project
                </h2>

                <div className="w-[120px] h-1.5 bg-turquoise mt-4"></div>

                <p className="text-lg text-gray-300 mt-8 leading-relaxed">
                  We&apos;re here to answer your questions, discuss your project, or schedule a consultation.
                  Expect timely responses and professional communication from our team.
                </p>
              </div>

              {/* Contact info */}
              <div>
                <h3 className="text-2xl font-semibold text-white">Contact Information</h3>

                <div className="mt-6 space-y-4">
                  <p className="flex items-center text-lg text-gray-300">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-turquoise" />
                    Agona Nkwanta (Damtse Junction)
                  </p>

                  <p className="flex items-center text-lg text-gray-300">
                    <FontAwesomeIcon icon={faPhone} className="mr-3 text-turquoise" />
                    0249308701 / 0508930080
                  </p>

                  <p className="flex items-center text-lg text-gray-300">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-turquoise" />
                    Demolahu.const@gmail.com
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div>
                <h3 className="text-2xl font-semibold">Follow Us</h3>
                <div className="flex gap-5 mt-4">
                  {[ 
                    [faFacebook, "https://www.facebook.com/share/r/19xwCNKL9j/"],
                    [faTwitter, "https://twitter.com"],
                    [faInstagram, "https://www.instagram.com/demolahu_engineering.kenjack?utm_source=qr"],
                    [faLinkedin, "https://linkedin.com"],
                    [faWhatsapp, "https://wa.me/+233249308701"],
                  ].map(([icon, link], idx) => (
                    <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={icon}
                        className="text-2xl text-turquoise hover:text-white transition duration-200"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT → Glassmorphism form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={zoomInVariants}
              className="w-full lg:w-[45%]"
            >
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DetailedContact;

/* Animation for moving texture */
<style>
{`
@keyframes moveBg {
  0% { background-position: 0px 0px; }
  100% { background-position: 1000px 1000px; }
}
`}
</style>
