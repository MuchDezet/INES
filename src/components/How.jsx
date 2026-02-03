import React from 'react';
import { motion } from 'framer-motion';

const How = () => {
  const steps = [
    {
      number: "1",
      title: "Market Research",
      description: "Comprehensive market analysis and identification of target demographics. We analyze global trends, customer preferences, and competitive landscapes to ensure maximum market penetration."
    },
    {
      number: "2", 
      title: "Product Development",
      description: "Strategic product design and development using cutting-edge technology. Our expert team creates innovative solutions tailored to meet international quality standards and customer expectations."
    },
    {
      number: "3",
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensuring compliance with international standards. Every product undergoes comprehensive evaluation before entering the export pipeline."
    },
    {
      number: "4",
      title: "Global Distribution",
      description: "Seamless logistics and distribution network spanning multiple continents. We manage everything from customs clearance to final delivery, ensuring products reach customers worldwide efficiently."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const numberVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.5
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.7
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-orange-500 text-lg font-medium mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How Does We Work
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our Export Process
          </motion.h2>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative text-left group"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Large Number Background */}
              <motion.div 
                className="relative mb-6"
                variants={numberVariants}
              >
                <div className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-blue-50 leading-none select-none transition-colors duration-300 group-hover:text-gray-100">
                  {step.number}
                </div>
                
                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-green-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 -mt-20 md:-mt-28 lg:-mt-36">
                <motion.h3 
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-4"
                  variants={titleVariants}
                >
                  {step.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-800 text-sm md:text-base leading-relaxed px-2 max-w-sm mx-auto"
                  variants={descriptionVariants}
                >
                  {step.description}
                </motion.p>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{ 
                  scale: 1,
                  transition: { duration: 0.3, delay: 0.1 }
                }}
              />
              
              <motion.div
                className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{ 
                  scale: 1,
                  transition: { duration: 0.3, delay: 0.2 }
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default How;