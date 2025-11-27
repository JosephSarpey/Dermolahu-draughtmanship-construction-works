import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCheckCircle, 
  faUser, 
  faEnvelope, 
  faPhone, 
  faCalendarAlt,
  faClipboardList,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import { zoomInVariants } from "../sections/animation";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setFormStatus({ submitting: false, submitted: false, error: null });
      return;
    }

    setFormStatus({ submitting: true, submitted: false, error: null });
    
    try {
      const formDataObj = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });

      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT_BOOKING, {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: null });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: "There was an error submitting your booking. Please try again." 
      });
    }
  };

  if (formStatus.submitted) {
    return (
      <div className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-2xl p-10 rounded-2xl space-y-6 text-center">
        <FontAwesomeIcon 
          icon={faCheckCircle} 
          className="text-green-500 text-5xl mb-4" 
        />
        <h3 className="text-2xl font-semibold text-gray-800">Booking Confirmed!</h3>
        <p className="text-gray-700">
          Your booking has been submitted successfully! We&apos;ll get back to you soon to confirm the details.
        </p>
      </div>
    );
  }

  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      variants={zoomInVariants}
      onSubmit={handleSubmit}
      action={import.meta.env.VITE_FORMSPREE_ENDPOINT_BOOKING}
      method="POST"
      className="space-y-5 w-full"
    >
      {/* NAME */}
      <div className="relative">
        <FontAwesomeIcon icon={faUser} className="absolute left-4 top-4 text-turquoise" />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full pl-12 pr-4 py-3 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-lg focus:ring-2 focus:ring-turquoise focus:border-turquoise"
        />
      </div>

      {/* EMAIL */}
      <div className="relative">
        <FontAwesomeIcon icon={faEnvelope} className="absolute left-4 top-4 text-turquoise" />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="w-full pl-12 pr-4 py-3 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-lg focus:ring-2 focus:ring-turquoise focus:border-turquoise"
        />
      </div>

      {/* PHONE */}
      <div className="relative">
        <FontAwesomeIcon icon={faPhone} className="absolute left-4 top-4 text-turquoise" />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full pl-12 pr-4 py-3 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-lg focus:ring-2 focus:ring-turquoise focus:border-turquoise"
        />
      </div>

      {/* SERVICE */}
      <div className="relative">
        <FontAwesomeIcon icon={faClipboardList} className="absolute left-4 top-4 text-turquoise" />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full pl-12 pr-4 py-3 bg-white/10 text-black border border-white/20 rounded-lg focus:ring-2 focus:ring-turquoise focus:border-turquoise appearance-none"
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
          <option>EPA & FIRE CERTIFICATE CONSULTANCY</option>
          <option>PLANNING SCHEMES / LAYOUT CONSULTANCY</option>
          <option>LAND ACQUISITION CONSULTANCY</option>
          <option>LAND REGISTRATION CONSULTANCY</option>
        </select>
      </div>

      {/* DATE */}
      <div className="relative">
        <FontAwesomeIcon icon={faCalendarAlt} className="absolute left-4 top-4 text-turquoise" />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full pl-12 pr-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg focus:ring-2 focus:ring-turquoise focus:border-turquoise [&::-webkit-calendar-picker-indicator]:invert"
        />
      </div>

      {/* BUTTON */}
      <motion.button
        type="submit"
        disabled={formStatus.submitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full mt-6 ${
          formStatus.submitting ? 'bg-gray-500' : 'bg-turquoise hover:bg-turquoise/90'
        } text-black font-semibold py-3 rounded-lg transition-all duration-300 flex justify-center gap-2 items-center`}
      >
        {formStatus.submitting ? (
          'Sending...'
        ) : (
          <>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Book Now
          </>
        )}
      </motion.button>

      {formStatus.error && (
        <div className="text-red-500 text-center">
          {formStatus.error}
        </div>
      )}
    </motion.form>
  );
};

export default BookingForm;