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
        >DERMOLAHU DRAUGHTMANSHIP & CONSTRUCTION WORKS
       </motion.h1>
        <div className='w-[120px] h-[6px] bg-yellow-500'></div>
        <p className='text-3xl italic text-gray-50 mt-[60px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, sequi.</p>
      </motion.div>

      <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      className='lg:w-[40%] w-full flex flex-col justify-center items-start lg:gap-6'
      >
       <p className='text-white text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nobis quae hic delectus cumque veritatis blanditiis maiores consequuntur vero dolorem, quidem optio omnis maxime fugiat amet nisi perferendis exercitationem. Quo consequatur facilis, dolore obcaecati ducimus recusandae tenetur quidem illo explicabo minima veritatis, dolores molestias earum a optio blanditiis nemo animi unde atque! In nobis ipsam quod rem ea, magni, amet dolores ullam incidunt beatae commodi quos. Eveniet, impedit recusandae? Corporis soluta magni, libero, cum natus reiciendis voluptates ab nostrum consequuntur eaque vero fuga optio, consectetur magnam porro distinctio quis quaerat maiores! Eum deserunt atque corrupti expedita sint esse sequi fuga!</p>
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