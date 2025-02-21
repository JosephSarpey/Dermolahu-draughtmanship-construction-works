/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import { slideUpVariants, zoomInVariants } from './animation'
import { planning } from '../export'

const DetailedAbout = () => {
  return (
    <div className='w-full background-color: rgb(45, 42, 42)'> {/* Set background to dark */}
      <Header />
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
          <p className='text-3xl italic text-gray-50 mt-[60px]'>
            Your trusted partner in architectural design, construction, and land development. We transform visions into reality with precision, innovation, and excellence.
          </p>
          <p className='text-white text-lg mt-[20px]'>
            At Demolahu Draughtmanship & Construction Ltd, our vision is to be the leading provider of innovative and sustainable construction solutions. Our goal is to exceed client expectations through our commitment to quality, safety, and customer satisfaction. We aspire to create lasting impacts on the communities we serve by delivering exceptional building solutions tailored to our clients' needs.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[40%] w-full flex flex-col justify-center items-start lg:gap-6'
        >
          <p className='text-white text-lg text-justify'>
            Our company specializes in architectural and building drawings, construction works, land surveying, and cost estimation to help bring your projects to life with precision and efficiency. Beyond construction, we provide comprehensive consultancy services for building permits, soil testing, environmental and fire safety certifications, planning schemes, land acquisition, and registration—ensuring your projects meet all regulatory standards.
          </p>
          <p className='text-white text-lg text-justify mt-[20px]'>
            We also offer AutoCAD training for professionals and students looking to master architectural and structural design tools. With a strong commitment to quality, safety, and customer satisfaction, we aim to deliver exceptional building solutions tailored to your needs. Whether you're starting a new construction project, need expert guidance, or require premium building materials, we are your trusted partner every step of the way.
          </p>
        </motion.div>
      </div>

      <div className='lg:w-[80%] w-[90%] m-auto py-[60px]'>
        <h2 className='text-white text-3xl font-bold mb-[40px]'>Our Vision</h2>
        <p className='text-white text-lg text-justify'>
          To be the leading provider of innovative and sustainable construction solutions, transforming the built environment with excellence and integrity.
        </p>
      </div>

      <div className='lg:w-[80%] w-[90%] m-auto py-[60px]'>
        <h2 className='text-white text-3xl font-bold mb-[40px]'>Our Goals</h2>
        <p className='text-white text-lg text-justify'>
          Our goals are to exceed client expectations through our commitment to quality, safety, and customer satisfaction. We aim to create lasting impacts on the communities we serve by delivering exceptional building solutions tailored to our clients' needs.
        </p>
      </div>

      <div className='lg:w-[80%] w-[90%] m-auto py-[60px]'>
        <h2 className='text-white text-3xl font-bold mb-[40px]'>Our Mission</h2>
        <p className='text-white text-lg text-justify'>
          Our mission is to provide comprehensive construction services that meet the highest standards of quality and safety. We strive to innovate and excel in every project, ensuring our clients' visions are realized with precision and efficiency.
        </p>
      </div>

      {/* Insert Working Section Here */}
      <div id='working' className='w-full bg-white'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'
        >
          <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'>A SYSTEMATIC APPROACH</motion.h1>
          <motion.h1 variants={slideUpVariants} className='text-black uppercase text-[40px] font-bold text-center'>HOW OUR EXPERT ENGINEERS WORK</motion.h1>
          <motion.div
            variants={slideUpVariants}
            className='w-[120px] h-[6px] bg-yellow-500'
          ></motion.div>

          {/* make div for services mapping from export js file */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-[20px] mt-[30px]'
          >
            {
              planning.map((item, index) => (
                <div key={index} className='flex flex-col justify-center items-center gap-5 border-2 border-yellow-500 rounded-mg p-6'>
                  <div>
                    <item.icon className='size-[80px] bg-yellow-500 hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer' />
                  </div>
                  <h1 className='text-2xl font-bold uppercase'>{item.title}</h1>
                  <p className='text-[20px] text-center text-gray-600'>{item.about}</p>
                </div>
              ))
            }
          </motion.div>
        </motion.div>
      </div>

      <div className='lg:w-[80%] w-[90%] m-auto py-[60px]'>
        <h2 className='text-white text-3xl font-bold mb-[40px]'>Meet Our Team</h2>
        <div className='flex flex-wrap justify-between items-start gap-[30px]'>
          <div className='w-[300px] flex flex-col items-center'>
            <img src='/assets/ceo_profile.png' alt='Staff Member 1' className='w-[50%] h-auto rounded-full' />
            <h3 className='text-yellow-500 text-xl mt-[20px]'>Engr. Kenneth Cudjoe</h3>
            <p className='text-white text-lg text-center'>CEO/Managing Director</p>
          </div>
          <div className='w-[300px] flex flex-col items-center'>
            <img src='/assets/mg_director.jpg' alt='Staff Member 2' className='w-[50%] h-auto rounded-full' />
            <h3 className='text-yellow-500 text-xl mt-[20px]'>Miss Elizabeth Obeng</h3>
            <p className='text-white text-lg text-center'>Assistant Managing Director</p>
          </div>
          <div className='w-[300px] flex flex-col items-center'>
            <img src='/assets/image3.jpg' alt='Staff Member 3' className='w-[50%] h-auto rounded-full' />
            <h3 className='text-yellow-500 text-xl mt-[20px]'>Michael Brown</h3>
            <p className='text-white text-lg text-center'>Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedAbout