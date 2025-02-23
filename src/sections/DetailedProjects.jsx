/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'
import project5 from '../assets/project5.jpg'
import project6 from '../assets/project6.jpg'
import project7 from '../assets/project7.jpg'
import project8 from '../assets/project8.jpg'
import { slideUpVariants, zoomInVariants } from './animation'

const projects = [
  { id: 1, image: project1, title: 'Modern Residential Building', description: 'This state-of-the-art residential building features contemporary design elements and sustainable architecture. It offers a blend of luxury and eco-friendliness, with energy-efficient systems, green spaces, and modern amenities that cater to the needs of urban dwellers.' },
  { id: 2, image: project2, title: 'Urban Office Complex', description: 'Located in the heart of the city, this cutting-edge office complex is designed for maximum productivity and comfort. It boasts open-plan workspaces, advanced technological infrastructure, and a variety of amenities including cafes, fitness centers, and collaborative zones to foster innovation and teamwork.' },
  { id: 3, image: project3, title: 'Luxury Apartment', description: 'This luxurious apartment complex offers premium amenities and stunning city views. Each unit is designed with high-end finishes, spacious layouts, and floor-to-ceiling windows. Residents can enjoy exclusive access to a rooftop pool, concierge services, and a private fitness center.' },
  { id: 4, image: project4, title: 'Eco-Friendly Housing Plan', description: 'Focused on sustainability and green living, this eco-friendly housing project incorporates renewable energy sources, water conservation systems, and sustainable building materials. The community features green roofs, community gardens, and ample green spaces to promote a healthy and sustainable lifestyle.' },
  { id: 5, image: project5, title: 'Commercial Plaza', description: 'This bustling commercial plaza is a hub of activity, offering a variety of retail and dining options. The plaza is designed with pedestrian-friendly walkways, outdoor seating areas, and ample parking. It serves as a vibrant community space where people can shop, dine, and socialize.' },
  { id: 6, image: project6, title: 'Modern Villa', description: 'This modern villa features sleek design and high-end finishes, perfect for luxury living. The villa includes spacious living areas, a gourmet kitchen, and a private outdoor pool. The design emphasizes indoor-outdoor living, with large glass doors that open to beautifully landscaped gardens.' },
  { id: 7, image: project7, title: 'Suburban Housing Development', description: 'This suburban housing development offers spacious homes and family-friendly amenities. The development includes parks, playgrounds, and community centers, providing a safe and welcoming environment for families. Each home is designed with modern conveniences and ample space for comfortable living.' },
  { id: 8, image: project8, title: 'High-Rise Condominium', description: 'This high-rise condominium offers panoramic views and top-notch facilities. Residents can enjoy luxurious amenities such as a rooftop terrace, fitness center, and concierge services. The units are designed with modern finishes and smart home technology, providing a sophisticated urban living experience.' },
]

const DetailedProjects = () => {
  return (
    <div className='w-full'>
      <Header />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'
      >
        <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'>OUR PROJECTS</motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold text-center'>SOME OF OUR PROJECTS</motion.h1>
        <motion.div
          variants={slideUpVariants}
          className='w-[120px] h-[6px] bg-yellow-500'
        ></motion.div>

<motion.div
  initial="hidden"
  whileInView="visible"
  variants={zoomInVariants}
  className='w-full m-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'
>
  {projects.map(project => (
    <motion.div 
      key={project.id} 
      variants={zoomInVariants} 
      className='bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105'
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className='h-[250px] w-full object-cover transition-transform duration-300 hover:scale-110' 
      />
      <div className='p-4 transition-transform duration-300 hover:scale-110'>
        <h2 className='text-lg font-bold'>{project.title}</h2>
        <p className='text-sm text-gray-600'>{project.description}</p>
      </div>
    </motion.div>
  ))}
</motion.div>
      </motion.div>
      <Footer />
    </div>
  )
}

export default DetailedProjects