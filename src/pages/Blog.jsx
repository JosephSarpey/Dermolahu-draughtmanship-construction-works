/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { slideUpVariants, zoomInVariants } from "../sections/animation";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Importance of Quality Building Materials",
      date: "January 1, 2025",
      content:
        "High-quality building materials ensure durability and sustainability for all construction projects. Learn more about the best materials for your next project.",
    },
    {
      title: "Top Construction Trends in 2025",
      date: "February 15, 2025",
      content:
        "Stay ahead of the curve with the latest construction trends. From sustainable practices to innovative technologies, discover what's shaping the industry.",
    },
    {
      title: "How to Choose the Right Contractor",
      date: "February, 2025",
      content:
        "Choosing the right contractor is crucial for the success of your project. Here are some tips to help you make an informed decision.",
    },
  ];

  return (
    <div className="w-full bg-white">
      <Header />
      <section className="w-[90%] m-auto mt-17 py-10 lg:w-[80%]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="flex flex-col justify-between items-center gap-5"
        >
          <motion.h1
            variants={slideUpVariants}
            className="text-turquoise text-2xl"
          >
            BLOG
          </motion.h1>
          <motion.h1
            variants={slideUpVariants}
            className="text-black uppercase text-2xl font-semibold text-center lg:text-3xl"
          >
            LATEST ARTICLES
          </motion.h1>
          <motion.div
            variants={slideUpVariants}
            className="w-[120px] h-1.5 bg-turquoise"
          ></motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-5 mt-7"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                variants={zoomInVariants}
                className="flex flex-col justify-center items-start gap-5 p-8 border-2 border-turquoise rounded-lg overflow-hidden lg:min-h-80"
                key={index}
              >
                <h1 className="text-xl font-semibold text-black">
                  {post.title}
                </h1>
                <p className="text-gray-600">{post.date}</p>
                <p className="text-lg">{post.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
