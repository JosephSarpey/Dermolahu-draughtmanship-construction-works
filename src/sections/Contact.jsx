/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div id='contact' className='bg-white w-full'>
      <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-6'
        >
          <motion.h1
            variants={slideUpVariants} 
            className='text-yellow-500 text-2xl'
          >
            CONTACT US
          </motion.h1>
          <motion.h1
            variants={slideUpVariants}
            className='text-black uppercase text-[40px] font-bold'
          >
            REACH US FOR ANY INQUIRY
          </motion.h1>
          <div className='w-[120px] h-[6px] bg-yellow-500'></div>
          <p className='text-2xl italic text-gray-600 mt-[60px]'>
            Have questions or need assistance? Get in touch with us! Whether you're looking for expert consultation, project estimates, or general inquiries, our team is here to help. We strive to respond promptly and provide the best solutions tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[40%] w-full flex flex-col justify-center items-start lg:gap-6'
        >
          <motion.button
            variants={zoomInVariants}
            className='bg-yellow-500 hover:bg-black hover:text-white px-10 py-4 text-black font-bold rounded-lg w-full flex items-center justify-center'
          >
            <Link to="/contact" className='flex items-center'>
              <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
              <FontAwesomeIcon icon={faPhone} className='mr-2' />
              CONTACT US
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;