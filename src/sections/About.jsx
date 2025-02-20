/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'

const About = () => {
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
        className='text-white uppercase text-[40px] font-bold'
        >DEMOLAHU DRAUGHTMANSHIP & CONSTRUCTION LTD.
       </motion.h1>
        <div className='w-[120px] h-[6px] bg-yellow-500'></div>
        <p className='text-3xl italic text-gray-50 mt-[60px]'>Your trusted partner in architectural design, construction, and land development. We transform visions into reality with precision, innovation, and excellence.</p>
      </motion.div>

      <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      className='lg:w-[40%] w-full flex flex-col justify-center items-start lg:gap-6'
      >
       <p className='text-white text-2xl text-justify'>At Demolahu Draughtmanship & Construction Works, we bring expertise and innovation to the construction industry. Our company specializes in architectural and building drawings, construction works, land surveying, and cost estimation to help bring your projects to life with precision and efficiency.

Beyond construction, we provide comprehensive consultancy services for building permits, soil testing, environmental and fire safety certifications, planning schemes, land acquisition, and registration—ensuring your projects meet all regulatory standards.

We also offer AutoCAD training for professionals and students looking to master architectural and structural design tools.

With a strong commitment to quality, safety, and customer satisfaction, we aim to deliver exceptional building solutions tailored to your needs. Whether you're starting a new construction project, need expert guidance, or require premium building materials, we are your trusted partner every step of the way.

</p>
       <motion.button
        variants={zoomInVariants}
        className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black'>
        READ MORE
        </motion.button> 
      </motion.div>
    </div>
  )
}

export default About