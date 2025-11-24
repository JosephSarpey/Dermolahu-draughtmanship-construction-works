/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import PropTypes from 'prop-types';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { slideUpVariants } from "./animation";
import { clients } from "../export";

const TiltCard = ({ item }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const cardX = e.clientX - rect.left;
    const cardY = e.clientY - rect.top;

    x.set(cardX - rect.width / 2);
    y.set(cardY - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-[#0f0f0f] border border-white/20 rounded-xl px-8 py-12 
                 flex flex-col items-center gap-5 shadow-lg hover:shadow-turquoise/40 
                 hover:border-turquoise transition-all duration-300 cursor-pointer"
    >
      <img
        src={item.image}
        alt="client image"
        className="w-24 h-24 rounded-full border-2 border-turquoise object-cover shadow-lg"
        style={{ transform: "translateZ(40px)" }}
      />

      <p
        className="text-white text-lg text-center leading-relaxed"
        style={{ transform: "translateZ(30px)" }}
      >
        {item.about}
      </p>

      <div
        className="flex flex-col items-center gap-1 pt-2"
        style={{ transform: "translateZ(25px)" }}
      >
        <h1 className="text-white text-xl font-semibold uppercase tracking-wide">
          {item.name}
        </h1>
        <h2 className="text-turquoise text-lg">{item.post}</h2>
      </div>
    </motion.div>
  );
};

TiltCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
  }).isRequired,
};

const Testimonials = () => {
  return (
    <div id="clients" className="w-full py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="w-[90%] m-auto flex flex-col items-center gap-6"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-turquoise text-2xl md:text-3xl"
        >
          TESTIMONIALS
        </motion.h1>

        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-3xl font-semibold text-center md:text-4xl"
        >
          WHAT OUR CLIENTS SAY
        </motion.h1>

        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-1.5 bg-turquoise"
        />

        {/* Carousel */}
        <div className="w-full pt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {clients.map((item, index) => (
              <SwiperSlide key={index}>
                <TiltCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
