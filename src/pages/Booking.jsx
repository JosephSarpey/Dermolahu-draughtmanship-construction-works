import { motion } from "framer-motion";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { zoomInVariants } from "../sections/animation";
import BookingForm from "../components/BookingForm";

const Booking = () => {
  return (
    <div className="w-full bg-black text-black min-h-screen">
      <Header />

      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&q=80&fit=crop&w=1920')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />

        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            {/* Welcome Message */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-6"
            >
              <h2 className="text-turquoise text-lg font-semibold tracking-wider">
                WELCOME TO DEMORLAHU CONSTRUCTION
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
                Let&apos;s Build Your Dream Project Together
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our team of experts is ready to bring your vision to life with precision and excellence. 
                Book a consultation today and take the first step towards realizing your dream project.
              </p>
              <div className="pt-4">
                <div className="w-24 h-1 bg-turquoise"></div>
              </div>
            </motion.div>

            {/* Booking Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div 
                className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-6 md:p-10 hover:bg-white/15 transition-all duration-300"
                variants={zoomInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="mb-8 text-center">
                  <motion.h2 
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Book a Service
                  </motion.h2>
                  <motion.p 
                    className="text-gray-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Fill out the form and we&apos;ll get back to you shortly
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <BookingForm />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">Why Choose Us</h2>
            <div className="w-24 h-1 bg-turquoise mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Expert Team',
                  description: 'Our skilled professionals bring years of experience to every project.'
                },
                {
                  title: 'Quality Assurance',
                  description: 'We use only the finest materials and follow strict quality standards.'
                },
                {
                  title: 'Customer Focus',
                  description: 'Your satisfaction is our top priority from start to finish.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-turquoise mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
