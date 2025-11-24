/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { slideUpVariants, zoomInVariants } from "../sections/animation";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.service) newErrors.service = "Service is required";
    if (!formData.date) newErrors.date = "Date is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsLoading(true);
      emailjs
        .send(
          "service_bag2ojy",
          "template_k1vq2mb",
          formData,
          "kV6PGPuwnTGUt4CQq"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setErrors({});
            setSuccessMessage("Service booked successfully!");
            setIsLoading(false);
            // Optionally, reset the form
            setFormData({
              name: "",
              email: "",
              phone: "",
              service: "",
              date: "",
            });
          },
          (error) => {
            console.error("FAILED...", error);
            setIsLoading(false);
          }
        );
    }
  };

  return (
    <div className="w-full bg-white">
      <Header />
      <section className="w-[90%] m-auto mt-17 lg:w-[80%]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="flex flex-col justify-between items-center py-10 gap-5 bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/boss.jpg)" }}
        >
          <motion.h1
            variants={slideUpVariants}
            className="text-turquoise text-2xl"
          >
            BOOKING
          </motion.h1>
          <motion.h1
            variants={slideUpVariants}
            className="text-black uppercase text-2xl font-semibold text-center lg:text-3xl"
          >
            BOOK A SERVICE
          </motion.h1>
          <motion.div
            variants={slideUpVariants}
            className="w-[120px] h-1.5 bg-turquoise"
          ></motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="space-y-6 w-full bg-white opacity-80 p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-turquoise focus:border-turquoise hover:border-turquoise hover:shadow-md transition duration-300"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-turquoise focus:border-turquoise hover:border-turquoise hover:shadow-md transition duration-300"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-turquoise focus:border-turquoise hover:border-turquoise hover:shadow-md transition duration-300"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-turquoise focus:border-turquoise hover:border-turquoise hover:shadow-md transition duration-300"
              >
                <option value="">Select a service</option>
                <option>BUILDING/ARCHITECTURAL DRAWINGS</option>
                <option>CONSTRUCTION WORKS</option>
                <option>LAND SURVEYING</option>
                <option>BILL OF QUANTITIES/ESTIMATE</option>
                <option>AUTOCAD TRAINING</option>
                <option>SETTING OUT</option>
                <option>BUILDING MATERIALS</option>
                <option>BUILDING PERMIT CONSULTANCY</option>
                <option>SOIL TEST CONSULTANCY</option>
                <option>
                  ENVIRONMENTAL PROTECTION AGENCY (EPA) & FIRE CERTIFICATE
                  CONSULTANCY
                </option>
                <option>PLANNING SCHEMES/ LAYOUT CONSULTANCY</option>
                <option>LAND ACQUISITION CONSULTANCY</option>
                <option>LAND REGISTRATION CONSULTANCY</option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm">{errors.service}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-turquoise focus:border-turquoise hover:border-turquoise hover:shadow-md transition duration-300"
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-turquoise hover:bg-black hover:text-white text-black px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 flex items-center justify-center"
            >
              {isLoading ? (
                <div className="loader"></div>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  Submit
                </>
              )}
            </button>
            {successMessage && (
              <p className="text-black-500 font-bold text-lg mt-4">
                {successMessage}
              </p>
            )}
          </motion.form>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default Booking;
