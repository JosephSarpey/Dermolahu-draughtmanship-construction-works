import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faUser,
  faMobile,
  faMessage,
  faEnvelope,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { zoomInVariants } from "../sections/animation";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });
  const [submissionAttempts, setSubmissionAttempts] = useState(0);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);

  // Load submission attempts from localStorage on component mount
  useEffect(() => {
    const savedAttempts = localStorage.getItem('contactFormAttempts');
    const savedTime = localStorage.getItem('lastSubmissionTime');
    
    if (savedAttempts) setSubmissionAttempts(parseInt(savedAttempts, 10));
    if (savedTime) setLastSubmissionTime(parseInt(savedTime, 10));
  }, []);

  // Rate limiting: Max 3 submissions per 5 minutes
  const isRateLimited = () => {
    const now = Date.now();
    const FIVE_MINUTES = 5 * 60 * 1000;
    
    // Reset attempts if more than 5 minutes have passed
    if (now - lastSubmissionTime > FIVE_MINUTES) {
      setSubmissionAttempts(0);
      localStorage.setItem('contactFormAttempts', '0');
      return false;
    }
    
    return submissionAttempts >= 3;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check rate limit
    if (isRateLimited()) {
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: 'Too many submission attempts. Please try again in a few minutes.' 
      });
      return;
    }
    
    setFormStatus({ 
      submitting: true, 
      submitted: false, 
      error: null 
    });

    const form = e.target;
    
    // Update submission attempts
    const now = Date.now();
    const newAttempts = submissionAttempts + 1;
    setSubmissionAttempts(newAttempts);
    setLastSubmissionTime(now);
    
    // Save to localStorage
    localStorage.setItem('contactFormAttempts', newAttempts.toString());
    localStorage.setItem('lastSubmissionTime', now.toString());
    const formData = new FormData(form);

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus({ 
          submitting: false, 
          submitted: true, 
          error: null 
        });
        // Reset attempts on successful submission
        setSubmissionAttempts(0);
        localStorage.setItem('contactFormAttempts', '0');
        form.reset();
      } else {
        const error = await response.json();
        throw new Error(error.message || 'Form submission failed');
      }
    } catch (error) {
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: error.message || 'Something went wrong. Please try again.' 
      });
    }
  };

  if (formStatus.submitted) {
    return (
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-10 rounded-2xl shadow-2xl space-y-6 text-center">
        <FontAwesomeIcon 
          icon={faCheckCircle} 
          className="text-green-500 text-5xl mb-4" 
        />
        <h3 className="text-2xl font-semibold text-white">Thank you!</h3>
        <p className="text-gray-300">
          Your message has been sent successfully. We&apos;ll get back to you soon!
        </p>
      </div>
    );
  }

  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-10 rounded-2xl shadow-2xl space-y-6">
      <form 
        onSubmit={handleSubmit}
        action={import.meta.env.VITE_FORMSPREE_ENDPOINT}
        method="POST"
        className="space-y-5"
      >
        <div className="relative">
          <FontAwesomeIcon icon={faUser} className="absolute left-4 top-4 text-turquoise" />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full pl-12 pr-4 py-3 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-lg focus:ring-2 focus:ring-turquoise"
          />
        </div>

        <div className="relative">
          <FontAwesomeIcon icon={faEnvelope} className="absolute left-4 top-4 text-turquoise" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full pl-12 pr-4 py-3 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-lg focus:ring-2 focus:ring-turquoise"
          />
        </div>

        <div className="relative">
          <FontAwesomeIcon icon={faMobile} className="absolute left-4 top-4 text-turquoise" />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
            className="w-full pl-12 pr-4 py-3 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-lg focus:ring-2 focus:ring-turquoise"
          />
        </div>

        <div className="relative">
          <FontAwesomeIcon icon={faMessage} className="absolute left-4 top-4 text-turquoise" />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full pl-12 pr-4 py-3 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-lg focus:ring-2 focus:ring-turquoise"
          />
        </div>

        <motion.button
          variants={zoomInVariants}
          type="submit"
          disabled={formStatus.submitting}
          className={`w-full ${
            formStatus.submitting ? 'bg-gray-400' : 'bg-turquoise hover:bg-white'
          } text-black font-bold py-3 rounded-lg transition duration-300 flex justify-center gap-2 items-center`}
        >
          {formStatus.submitting ? (
            'Sending...'
          ) : (
            <>
              <FontAwesomeIcon icon={faPaperPlane} />
              Send Message
            </>
          )}
        </motion.button>

        {formStatus.error && (
          <div className="flex items-center justify-center gap-2 text-red-400">
            <FontAwesomeIcon icon={faTimesCircle} />
            <span>{formStatus.error}</span>
          </div>
        )}
      </form>

      <p className="text-gray-300 text-sm text-center mt-4">
        Your information is secure with us. By submitting, you agree to our terms.
      </p>
    </div>
  );
};

export default ContactForm;