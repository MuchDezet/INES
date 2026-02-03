import { ChevronDown, HelpCircle, Shield, Clock, Users } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const FAQ = () => {
  const faqRef = useRef(null);
  const parallaxRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, threshold: 0.1 });
  const [openItems, setOpenItems] = useState({});

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Clean FAQ Data
  const faqData = [
    {
      question: "What documents are required for international shipping?",
      answer: "Essential documents include commercial invoice, packing list, bill of lading, certificate of origin, export/import permits, and insurance certificates. Our team assists with all documentation requirements to ensure smooth customs clearance."
    },
    {
      question: "How do you handle customs clearance processes?",
      answer: "We have certified customs brokers who manage all clearance procedures, including duty calculations, tariff classifications, and regulatory compliance. We maintain relationships with customs authorities worldwide to expedite processing."
    },
    {
      question: "What are your shipping timeframes for different regions?",
      answer: "Delivery times vary by destination and shipping method. Sea freight typically takes 15-45 days, air freight 3-7 days, and express services 1-3 days. We provide detailed timelines based on your specific requirements and destination."
    },
    {
      question: "Do you provide cargo insurance and tracking services?",
      answer: "Yes, we offer comprehensive cargo insurance options and real-time tracking throughout the entire shipping process. Our online portal allows you to monitor your shipment's progress 24/7 with detailed status updates."
    },
    {
      question: "How do you ensure product quality and compliance?",
      answer: "We conduct thorough quality inspections at origin, maintain temperature-controlled storage when needed, and ensure all products meet destination country standards and regulations before shipment."
    },
    {
      question: "What support do you provide for first-time importers/exporters?",
      answer: "We offer complete guidance including market research assistance, regulatory compliance consultation, documentation support, and dedicated account managers to help newcomers navigate international trade successfully."
    }
  ];

  // Clean Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const fadeInVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { 
      opacity: 0, 
      y: 60
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <section className="relative overflow-hidden" ref={faqRef}>
      {/* Enhanced Parallax Background */}
      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden" ref={parallaxRef}>
        <motion.div
          style={{ y, scale, opacity }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
            alt="International shipping and logistics operations" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Dynamic overlay with parallax */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40"
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.9]) 
          }}
        />
      </div>

      {/* Clean Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Clean Info Panel */}
        <motion.div 
          className="relative -mt-32 lg:-mt-40 lg:absolute lg:left-0 lg:top-20 lg:w-[480px] bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 text-white p-8 lg:p-10 rounded-xl shadow-xl"
          variants={overlayVariants}
          initial="hidden"
          animate={faqInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
          >
            {/* Clean Header */}
            <motion.div variants={fadeInVariants}>
              <div className="flex items-center space-x-2 text-orange-100 text-sm font-medium mb-3">
                <HelpCircle className="w-4 h-4" />
                <span>FAQ</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Common Import Export Questions
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-orange-50 leading-relaxed"
              variants={fadeInVariants}
            >
              Find quick answers to frequently asked questions about our international trade services and shipping processes.
            </motion.p>

            {/* Clean Features */}
            <motion.div 
              className="space-y-3"
              variants={containerVariants}
            >
              {[
                { icon: Shield, text: "Trade compliance guidance" },
                { icon: Clock, text: "24/7 support available" },
                { icon: Users, text: "Expert consultation" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  variants={fadeInVariants}
                >
                  <item.icon className="w-4 h-4 text-orange-200 flex-shrink-0" />
                  <span className="text-orange-50">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.button 
              className="group bg-gradient-to-r from-blue-600 to-cyan-400 border border-white text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative"
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 skew-x-12" />
              
              <span className="relative z-10">Contact Support</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Clean FAQ Section */}
        <motion.div 
          className="lg:ml-auto lg:w-[calc(100%-500px)] mt-8 lg:mt-0 lg:pt-20"
          variants={containerVariants}
          initial="hidden"
          animate={faqInView ? "visible" : "hidden"}
        >
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100"
                variants={fadeInVariants}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
                  onClick={() => toggleItem(index)}
                >
                  <span className="text-gray-900 font-medium pr-4">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ 
                      rotate: openItems[index] ? 180 : 0 
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openItems[index] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2 border-t border-gray-50">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;