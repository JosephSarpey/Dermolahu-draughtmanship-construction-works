/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  return (
    <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]' id='about'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-6'
      >
        <motion.h1
          variants={slideUpVariants} className='text-yellow-500 text-2xl'
        >WELCOME TO</motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className='text-white uppercase text-[35px] font-bold'
        >DEMOLAHU DRAUGHTSMANSHIP & CONSTRUCTION LTD.
        </motion.h1>
        <div className='w-[120px] h-[6px] bg-yellow-500'></div>
        <p className='text-2xl italic text-gray-50 mt-[60px]'>Your trusted partner in architectural design, construction, and land development. We transform visions into reality with precision, innovation, and excellence.</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[40%] w-full flex flex-col justify-center items-start lg:gap-6'
      >
        <p className='text-white text-lg text-justify'>At Demolahu Draughtsmanship & Construction Ltd, we bring expertise and innovation to the construction industry. Our company specializes in architectural and building drawings, construction works, land surveying, and cost estimation to help bring your projects to life with precision and efficiency.

        Beyond construction, we provide comprehensive consultancy services for building permits, soil testing, environmental and fire safety certifications, planning schemes, land acquisition, and registration—ensuring your projects meet all regulatory standards.
        </p>
        <motion.button
          variants={zoomInVariants}
          className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black'
          onClick={() => navigate('/about')}
        >
          READ MORE
        </motion.button>
      </motion.div>
    </div>
  )
}

export default About