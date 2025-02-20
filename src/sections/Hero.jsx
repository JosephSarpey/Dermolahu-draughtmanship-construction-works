/* eslint-disable no-unused-vars */
import React from 'react'
import backgroundImage from '../assets/homeimg3.jpg'
import { motion } from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'

const Hero = () => {
  return (
    <div id='hero' className='bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center' style={{backgroundImage: `url(${backgroundImage})`}}>
<motion.div
  initial="hidden"
  whileInView={"visible"}
  variants={slideUpVariants}
  className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4'>

<motion.h1
  variants={slideUpVariants}
  className='text-white text-2xl font-medium'>WE ARE HERE TO HELP YOU
</motion.h1> 
<motion.h1
  variants={slideUpVariants}
  className='text-white uppercase text-[50px] font-bold'
  >Quality of work is our priority
</motion.h1>
<div className='w-[120px] h-[6px] bg-yellow-500'></div>
<p className='text-white text-[20px] '>At Demorlahu Construction, we pride ourselves on delivering top-notch construction services with a focus on quality and customer satisfaction. Our team of experienced professionals is dedicated to bringing your vision to life, whether it's a residential project or a commercial development. We use the latest technology and sustainable practices to ensure every project is completed on time and within budget. Trust us to handle your construction needs with precision and care. Your dream project is our priority.</p>
<motion.div
initial="hidden"
whileInView="visible"
variants={zoomInVariants}
className='flex justify-center items-center gap-5'>
<motion.button 
variants={zoomInVariants}
className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold'>
  READ MORE
</motion.button>
<motion.button 
  variants={zoomInVariants}
  className='border-white hover:border-yellow-500 hover:text-yellow-500 border-2 px-10 py-3 rounded-lg text-white font-bold'>
    REACH US
</motion.button>
      </motion.div>
    </motion.div>
<div className='w-[40%] flex flex-col justify-end items-end'>
<motion.img
initial="hidden"
whileInView="visible"
variants={zoomInVariants}

/>
  
</div>

    </div>
  )
}

export default Hero