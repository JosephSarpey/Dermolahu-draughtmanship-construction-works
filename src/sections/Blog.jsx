/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import { slideUpVariants, zoomInVariants } from './animation'

const Blog = () => {
  const blogPosts = [
    {
      title: "The Importance of Quality Building Materials",
      date: "January 1, 2025",
      content: "High-quality building materials ensure durability and sustainability for all construction projects. Learn more about the best materials for your next project."
    },
    {
      title: "Top Construction Trends in 2025",
      date: "February 15, 2025",
      content: "Stay ahead of the curve with the latest construction trends. From sustainable practices to innovative technologies, discover what's shaping the industry."
    },
    {
      title: "How to Choose the Right Contractor",
      date: "March 10, 2025",
      content: "Choosing the right contractor is crucial for the success of your project. Here are some tips to help you make an informed decision."
    }
  ]

  return (
    <div className='w-full bg-white'>
      <Header />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'
      >
        <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'>BLOG</motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-black uppercase text-[40px] font-bold text-center'>LATEST ARTICLES</motion.h1>
        <motion.div
          variants={slideUpVariants}
          className='w-[120px] h-[6px] bg-yellow-500'
        ></motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-[20px] mt-[30px]'
        >
          {blogPosts.map((post, index) => (
            <motion.div
              variants={zoomInVariants}
              className='flex flex-col justify-center items-start gap-5 p-8 border-2 border-yellow-500 rounded-lg'
              key={index}
            >
              <h1 className='text-xl font-bold text-black'>{post.title}</h1>
              <p className='text-gray-600'>{post.date}</p>
              <p className='text-[18px]'>{post.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Blog