/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Header from "./Header";
import Footer from "./Footer";
import { slideUpVariants, zoomInVariants } from "./animation";

const DetailedContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setFormStatus("Please fill in all fields.");
      return;
    }
    // Simulate form submission
    setFormStatus("Submitting...");
    setTimeout(() => {
      setFormStatus(
        "Thank you for your message. We will get back to you soon."
      );
    }, 2000);
  };

  return (
    <div className="w-full bg-white">
      <Header />
      <section className="w-[90%] m-auto mt-17 py-10 lg:w-[80%]">
        <div className="flex flex-col justify-between items-start gap-12 lg:flex-row">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className="w-full flex flex-col justify-center items-start gap-3 lg:w-[60%] lg:gap-6"
          >
            <motion.h1
              variants={slideUpVariants}
              className="text-turquoise text-2xl"
            >
              CONTACT US
            </motion.h1>
            <motion.h1
              variants={slideUpVariants}
              className="text-black uppercase text-2xl font-semibold md:text-3xl lg:text-4xl"
            >
              REACH US FOR ANY INQUIRY
            </motion.h1>
            <div className="w-[120px] h-1.5 bg-turquoise"></div>
            <p className="text-xl italic text-gray-600 mt-14">
              Have questions or need assistance? Get in touch with us! Whether
              you're looking for expert consultation, project estimates, or
              general inquiries, our team is here to help. We strive to respond
              promptly and provide the best solutions tailored to your needs.
            </p>
            <div className="mt-10">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="text-lg mt-4 flex items-center">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-2 text-turquoise"
                />
                Address: Agona nkwanta (damtse junction)
              </p>
              <p className="text-lg mt-4 flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-2 text-turquoise"
                />
                Phone: 0249308701/ 0508930080
              </p>
              <p className="text-lg mt-4 flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-turquoise"
                />
                Email: Demolahu.const@gmail.com
              </p>
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-bold">Follow Us</h2>
              <div className="flex mt-4 gap-4">
                <a
                  href="https://www.facebook.com/share/r/19xwCNKL9j/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-2xl text-turquoise hover:text-black"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-2xl text-turquoise hover:text-black"
                  />
                </a>
                <a
                  href="https://www.instagram.com/demolahu_engineering.kenjack?utm_source=qr&igsh=anBoeTVlZW1lejd1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-2xl text-turquoise hover:text-black"
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-2xl text-turquoise hover:text-black"
                  />
                </a>
                <a
                  href="https://wa.me/+233249308701"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-2xl text-turquoise hover:text-black"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className="w-full flex flex-col justify-center items-start lg:w-[40%] lg:gap-6"
          >
            <motion.form
              initial="hidden"
              whileInView="visible"
              variants={zoomInVariants}
              className="flex flex-col justify-center items-start gap-6 w-full"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                className="px-6 py-3 border-2 border-black text-black rounded-lg w-full"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="px-6 py-3 border-2 border-black text-black rounded-lg w-full"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="number"
                name="phone"
                placeholder="Enter Mobile Number"
                className="px-6 py-3 border-2 border-black text-black rounded-lg w-full"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Enter Your Message"
                rows="4"
                className="px-6 py-3 border-2 border-black text-black rounded-lg w-full"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <motion.button
                variants={zoomInVariants}
                className="bg-turquoise hover:bg-black hover:text-white px-10 py-4 text-black font-bold rounded-lg w-full flex items-center justify-center gap-2"
                type="submit"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                SUBMIT
              </motion.button>
              {formStatus && <p className="mt-4 text-red-500">{formStatus}</p>}

              <p className="text-m text-gray-600 mt-4">
                We respect your privacy. Your information is safe and will never
                be shared. By submitting this form, you agree to our terms and
                conditions. We would love to hear from you, our cherished
                customer.
              </p>
            </motion.form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DetailedContact;
