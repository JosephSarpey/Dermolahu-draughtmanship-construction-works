import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section
      className="relative mt-5 py-24 px-6 rounded-2xl overflow-hidden text-white"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Spotlight highlight */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-center max-w-2xl mx-auto"
      >
        <h3 className="text-3xl font-bold tracking-wide text-turquoise">
          Ready to Start Your Project?
        </h3>

        <p className="mt-3 text-gray-200 text-sm">
          Let&apos;s elevate your brand with high-end design and smart engineering.
        </p>

        {/* CTA Button */}
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block mt-8 px-10 py-4 rounded-xl font-semibold
                     bg-turquoise text-black shadow-xl shadow-black/50
                     hover:shadow-turquoise/50 transition-all"
        >
          Get a Quote
        </motion.a>
      </motion.div>
    </section>
  );
};

export default CTASection;
