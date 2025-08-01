import React from 'react'
import { BsStack } from 'react-icons/bs'
import { HiLightBulb } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { BiTime } from 'react-icons/bi'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-draftBlueDark" />,
      title: "Rédaction Stratégique",
      description: "Unis pour structurer vos projets, prêts à innover.",
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Financement", 
      description: "Guidez vos initiatives sur la voie du financement.",
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Formation",
      description: "Renforcez vos compétences, retournez plus forts.",
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Évaluation d'Impact",
      description: "Aucun doute ne résiste à nos analyses.",
    }
  ]

  return (
    <section id="services" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
     <motion.div 
      variants={fadeIn('up', 0.3)}
      className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'
     >
       {/* Header */}
       <motion.div 
        variants={fadeIn('right', 0.4)}
        className="md:w-1/3"
       >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"
        >
          L'Avenir de l'Impact avec Draft Up
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.5)}
          className="text-gray-600 text-lg mb-4 md:w-4/5"
        >
          Définissez vos ambitions, mesurez vos succès, résolvez vos défis
        </motion.p>
        <motion.div 
          variants={fadeIn('up', 0.6)}
          className="space-y-3"
        >
          <motion.div 
            variants={fadeIn('right', 0.7)}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            </div>
            <span className="text-gray-600">Rédaction Stratégique</span>
          </motion.div>
          <motion.div 
            variants={fadeIn('right', 0.8)}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            </div>
            <span className="text-gray-600">Développement de Solutions</span>
          </motion.div>
        </motion.div>
        <motion.button 
          variants={fadeIn('up', 0.9)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          id="#newsletter"
          className="mt-8 bg-draftBlueDark text-white px-8 py-3 cursor-pointer rounded-full hover:bg-yellow-600 transition-colors"
        >
          Démarrez votre Transformation
        </motion.button>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        variants={fadeIn('left', 0.4)}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 0.3 * (index + 1))}
            whileHover={{ scale: 1.05 }}
            className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div 
              variants={fadeIn('down', 0.4 * (index + 1))}
              className="mb-4"
            >
              {service.icon}
            </motion.div>
            <motion.h3 
              variants={textVariant(0.3)}
              className="text-xl font-semibold mb-2"
            >
              {service.title}
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.5 * (index + 1))}
              className="text-gray-600 mb-4"
            >
              {service.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
     </motion.div>
    </section>
  )
}

export default ServicesSection 