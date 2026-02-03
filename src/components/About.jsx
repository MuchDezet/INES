import { Globe, Ship, Truck, CheckCircle, Clock, Users, Play, X } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whoWeAreRef = useRef(null);
  const whyUsRef = useRef(null);
  const servicesRef = useRef(null);
  const imageRef = useRef(null);
  const videoRef = useRef(null);
  
  const whoWeAreInView = useInView(whoWeAreRef, { once: true, threshold: 0.2 });
  const whyUsInView = useInView(whyUsRef, { once: true, threshold: 0.1 });
  const servicesInView = useInView(servicesRef, { once: true, threshold: 0.3 });
  const imageInView = useInView(imageRef, { once: true, threshold: 0.2 });

  // Effect untuk memutar video ketika section masuk viewport
  useEffect(() => {
    if (imageInView && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, [imageInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const fadeInLeftVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const fadeInRightVariants = {
    hidden: { 
      opacity: 0, 
      x: 60,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const scaleInVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const staggerItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const overlayVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5,
      }
    }
  };

  // Modal variants
  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const overlayModalVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div>
      {/* Who We Are Section */}
      <section className="py-16 sm:py-20 md:py-25 px-4 sm:px-6 md:px-8 lg:px-12" ref={whoWeAreRef}>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-1"
            variants={containerVariants}
            initial="hidden"
            animate={whoWeAreInView ? "visible" : "hidden"}
          >
            {/* Section Header */}
            <div className="space-y-3 sm:space-y-4 md:space-y-2">
              <motion.div 
                className="text-orange-500 text-xs sm:text-sm font-medium tracking-wider uppercase"
                variants={staggerItemVariants}
              >
                Who We Are
              </motion.div>
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-gray-900 leading-tight"
                variants={fadeInUpVariants}
              >
                We Can Make Global Import Export Solutions
              </motion.h2>
              <motion.p 
                className="text-gray-600 leading-relaxed text-base sm:text-lg md:text-lg"
                variants={fadeInUpVariants}
              >
                Established in 2010, Global Trade Solutions has been at the forefront of international import and export services. We specialize in facilitating seamless cross-border trade operations, connecting businesses with global markets through our extensive network of partners and logistics expertise.
              </motion.p>
            </div>
            
            {/* Services List */}
            <motion.div 
              className="space-y-3 sm:space-y-4 mt-4 sm:mt-6"
              variants={containerVariants}
              ref={servicesRef}
            >
              {[
                "Customs Clearance & Documentation",
                "Quality Inspection & Warehousing",
                "International Freight Forwarding",
                "Export Documentation & Coordination",
                "Many More Trade Services"
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  variants={staggerItemVariants}
                  whileHover={{ 
                    x: 8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={servicesInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2 + 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                  </motion.div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{service}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div 
            className="relative mt-8 lg:mt-0"
            ref={imageRef}
            variants={fadeInRightVariants}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
          >
            <div className="relative">
              <motion.div
                className="overflow-hidden rounded-xl sm:rounded-2xl shadow-xl"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              >
                <motion.video 
                  ref={videoRef}
                  src="./video/ines.mp4"
                  alt="Global shipping and logistics operations" 
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  muted
                  loop
                  playsInline
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </motion.div>
              <div className="absolute inset-0 bg-black/10 rounded-xl sm:rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="relative py-16 sm:py-20" ref={whyUsRef}>
        {/* Background Image - Full width */}
        <motion.div 
          className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[500px] w-full overflow-hidden"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={whyUsInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
          transition={{ duration: 2.0, ease: "easeOut" }}
        >
          <img 
            src="./img/ini.jpg" 
            alt="Professional logistics team working" 
            className="w-full h-full object-cover"
          />
          <motion.div 
            className="absolute inset-0 bg-black/10"
            initial={{ opacity: 0 }}
            animate={whyUsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          ></motion.div>
        </motion.div>

        {/* Overlapping Content Panel */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div 
            className="relative -mt-24 sm:-mt-28 md:-mt-32 lg:-mt-48 lg:absolute lg:right-4 xl:right-8 lg:bottom-8 lg:left-auto lg:w-[450px] xl:w-[500px] bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl shadow-2xl"
            variants={overlayVariants}
            initial="hidden"
            animate={whyUsInView ? "visible" : "hidden"}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <motion.div 
              className="space-y-4 sm:space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={whyUsInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="text-orange-400 font-bold text-sm md:text-md tracking-wider uppercase"
                variants={staggerItemVariants}
              >
                Why Us
              </motion.div>
              
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                variants={fadeInUpVariants}
              >
                We Build With Our Professional Team With Big Creativity
              </motion.h2>
              
              <motion.p 
                className="text-green-50 leading-relaxed text-sm sm:text-base"
                variants={fadeInUpVariants}
              >
                What sets us apart in the competitive import-export industry is our commitment to transparency, reliability, and customer-centric approach. We understand that international trade involves complex regulations and logistics challenges.
              </motion.p>

              <motion.div 
                className="space-y-2 sm:space-y-3 text-green-50 text-xs sm:text-sm"
                variants={containerVariants}
              >
                {[
                  { icon: Globe, text: "Strategic partnerships with shipping lines worldwide" },
                  { icon: Users, text: "24/7 multilingual customer support" },
                  { icon: Clock, text: "Real-time tracking and transparency" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-2 sm:space-x-3"
                    variants={staggerItemVariants}
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={whyUsInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1 + 0.8,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-green-200 mt-1 flex-shrink-0" />
                    </motion.div>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.button 
                className="inline-block border-2 border-white text-white px-4 sm:px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-orange-500 transition-all duration-300 text-xs sm:text-sm"
                variants={staggerItemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Learn More Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          variants={overlayModalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Why Choose Global Trade Solutions?</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-white hover:text-orange-200 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="mt-2 text-cyan-100">Discover what makes us the preferred partner for international trade</p>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Left Column - Key Strengths */}
                <div className="space-y-6">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                    <div className="flex items-center mb-3">
                      <div className="bg-orange-100 p-2 rounded-lg mr-3">
                        <Users className="w-6 h-6 text-orange-600" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800">Expert Team</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Our team consists of seasoned professionals with an average of 15+ years experience in international trade, customs brokerage, and supply chain management.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                    <div className="flex items-center mb-3">
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <Globe className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800">Global Network</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      We maintain strategic partnerships with 200+ logistics providers across 85 countries, ensuring seamless operations wherever your business takes you.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <Ship className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800">Multi-Modal Transport</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      We offer comprehensive shipping solutions including sea freight, air freight, rail, and road transport tailored to your specific needs and timelines.
                    </p>
                  </div>
                </div>

                {/* Right Column - Additional Information */}
                <div className="space-y-6">
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-r-xl">
                    <h4 className="font-bold text-gray-800 mb-2">Our Achievements</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        Over 10,000 successful shipments completed
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        98% customer satisfaction rate
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        ISO 9001:2015 Certified for quality management
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        Licensed customs brokerage in 12 countries
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-3">Industries We Serve</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                        Automotive Parts
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                        Pharmaceuticals
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                        Consumer Goods
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                        Industrial Machinery
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                        Food & Beverage
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                        Electronics
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-5 rounded-xl">
                    <h4 className="font-bold mb-2">Ready to Get Started?</h4>
                    <p className="text-cyan-100 text-sm mb-3">
                      Contact us today for a free consultation and customized quote for your import-export needs.
                    </p>
                    <button className="bg-white text-cyan-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm">
                      Contact Our Team
                    </button>
                  </div>
                </div>
              </div>

              {/* Statistics Section */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-cyan-600">14+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-cyan-600">85+</div>
                  <div className="text-xs text-gray-600">Countries Served</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-cyan-600">10K+</div>
                  <div className="text-xs text-gray-600">Shipments</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-cyan-600">98%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default About;