/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { slideUpVariants, zoomInVariants } from './animation';

// Update the services array to include detailed descriptions and image URLs
const services = [
  { 
    title: 'BUILDING/ARCHITECTURAL DRAWINGS', 
    about: 'We provide professional building and architectural drawings that meet industry standards. Our team of experienced architects ensures that every detail is meticulously planned and executed. Whether you need residential, commercial, or industrial designs, we have the expertise to deliver. Our drawings are precise, detailed, and tailored to your specific needs. Trust us to bring your vision to life with accuracy and creativity.', 
    image: 'path/to/image1.jpg' 
  },
  { 
    title: 'CONSTRUCTION WORKS', 
    about: 'Our construction services are of the highest quality, ensuring that your project is completed on time and within budget. We handle all aspects of construction, from foundation to finishing. Our team of skilled professionals uses the latest techniques and materials to deliver durable and aesthetically pleasing structures. We prioritize safety, efficiency, and client satisfaction in every project we undertake. Let us build your dream project with precision and care.', 
    image: '/src/assets/construction_works.jpg' 
  },
  { 
    title: 'LAND SURVEYING', 
    about: 'Accurate land surveying is crucial for any construction project. Our land surveying services provide precise measurements and detailed maps of your property. We use advanced equipment and technology to ensure accuracy and reliability. Our surveyors are experienced and knowledgeable, capable of handling complex surveying tasks. Whether you need boundary surveys, topographic surveys, or construction staking, we have the expertise to deliver accurate results.', 
    image: 'path/to/image3.jpg' 
  },
  { 
    title: 'BILL OF QUANTITIES/ESTIMATE', 
    about: 'We offer detailed bill of quantities and estimates to help you plan and budget your construction project. Our estimates are comprehensive and transparent, providing a clear breakdown of costs. We consider all aspects of the project, including materials, labor, and contingencies. Our goal is to provide you with accurate and reliable estimates that help you make informed decisions. Trust us to provide the financial clarity you need for your project.', 
    image: 'path/to/image4.jpg' 
  },
  { 
    title: 'AUTOCARD TRAINING', 
    about: 'Our comprehensive AutoCAD training program is designed to equip you with the skills needed to excel in the field of architectural design. Our experienced instructors provide hands-on training, covering all aspects of AutoCAD software. Whether you are a beginner or an advanced user, our training program is tailored to meet your needs. Learn to create detailed drawings, 3D models, and more with our expert guidance. Enhance your career with our AutoCAD training.', 
    image: 'path/to/image5.jpg' 
  },
  { 
    title: 'SETTING OUT', 
    about: 'Precise setting out services are essential for the accurate construction of any project. Our team provides reliable setting out services, ensuring that your project is built according to the exact specifications. We use advanced equipment and techniques to mark out the positions of structures, foundations, and other critical elements. Our setting out services help prevent costly errors and ensure that your project progresses smoothly. Trust us for accurate and efficient setting out.', 
    image: 'path/to/image6.jpg' 
  },
  { 
    title: 'BUILDING MATERIALS', 
    about: 'We supply high-quality building materials to meet all your construction needs. Our materials are sourced from reputable suppliers and meet industry standards. Whether you need cement, bricks, steel, or other construction materials, we have you covered. Our goal is to provide you with durable and reliable materials that ensure the longevity and stability of your project. Count on us for all your building material needs.', 
    image: 'path/to/image7.jpg' 
  },
  { 
    title: 'BUILDING PERMIT', 
    about: 'Navigating the process of obtaining a building permit can be complex. Our consultancy services provide expert guidance to help you secure the necessary permits for your project. We assist with the preparation and submission of all required documents, ensuring compliance with local regulations. Our team is knowledgeable about the permitting process and can help you avoid delays and complications. Let us handle the paperwork so you can focus on your project.', 
    image: 'path/to/image8.jpg' 
  },
  { 
    title: 'SOIL TEST', 
    about: 'Professional soil testing services are essential for assessing the suitability of your site for construction. Our soil testing services provide detailed analysis of soil composition, strength, and stability. We use advanced testing methods to ensure accurate results. Our reports provide valuable information that helps you make informed decisions about foundation design and construction. Trust us for reliable soil testing services that ensure the safety and stability of your project.', 
    image: 'path/to/image9.jpg' 
  },
  { 
    title: 'EPA & FIRE CERTIFICATE', 
    about: 'Our consultancy services help you obtain the necessary EPA and fire certificates for your project. We assist with the preparation and submission of all required documents, ensuring compliance with environmental and safety regulations. Our team is knowledgeable about the certification process and can help you avoid delays and complications. Let us handle the paperwork so you can focus on your project. Trust us for expert guidance in obtaining EPA and fire certificates.', 
    image: 'path/to/image10.jpg' 
  },
  { 
    title: 'PLANNING SCHEMES/ LAYOUT', 
    about: 'We provide comprehensive planning schemes and layout services to help you design and organize your project. Our team of experienced planners and designers works closely with you to create detailed and functional layouts. We consider all aspects of the project, including zoning regulations, site conditions, and client preferences. Our goal is to create efficient and aesthetically pleasing layouts that meet your needs. Trust us for professional planning schemes and layout services.', 
    image: 'path/to/image11.jpg' 
  },
  { 
    title: 'LAND ACQUISITION', 
    about: 'Our consultancy services provide expert guidance in the process of land acquisition. We assist with the identification and evaluation of potential sites, negotiation of purchase terms, and preparation of necessary documents. Our team is knowledgeable about local regulations and market conditions, ensuring a smooth and successful acquisition process. Let us help you find and acquire the perfect site for your project. Trust us for reliable land acquisition services.', 
    image: 'path/to/image12.jpg' 
  },
  { 
    title: 'LAND REGISTRATION', 
    about: 'Our consultancy services help you navigate the process of land registration. We assist with the preparation and submission of all required documents, ensuring compliance with local regulations. Our team is knowledgeable about the registration process and can help you avoid delays and complications. Let us handle the paperwork so you can focus on your project. Trust us for expert guidance in land registration.', 
    image: 'path/to/image13.jpg' 
  },
];

const DetailedServices = () => {
  return (
    <div className='w-full bg-white'>
      <Header />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'
      >
        <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'>
          OUR SERVICES
        </motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-black uppercase text-[40px] font-bold text-center'>
          DETAILED SERVICES
        </motion.h1>
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
          {services.map((item, index) => (
            <motion.div
              variants={zoomInVariants}
              className='flex flex-col justify-center items-center gap-5 p-8 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
              key={index}
            >
              <img src={item.image} alt={item.title} className='w-full h-40 object-cover rounded-lg' />
              <div className='flex flex-col justify-center items-center gap-3 text-center'>
                <h1 className='text-xl font-bold text-black'>{item.title}</h1>
                <p className='text-[18px] text-gray-700'>{item.about}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={slideUpVariants}
          className='w-full mt-[60px] text-center'
        >
          <h2 className='text-2xl font-bold text-black'>Book A Service Now</h2>
          <p className='text-[18px] text-gray-700 mt-2'>DEMOLAHU DRAUGHTSMANSHIP & CONSTRUCTION LTD</p>
          <p className='text-[18px] text-gray-700'>Contact: 0249308701 / 0508930080</p>
          <p className='text-[18px] text-gray-700'>Email: Demolahu.const@gmail.com</p>
          <p className='text-[18px] text-gray-700'>Location: Agona Nkwanta (Damtse Junction)</p>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default DetailedServices;