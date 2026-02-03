import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Freebie',
      description: 'Suitable for individuals who want to learn the basics of import and export',
      price: 0,
      yearlyPrice: 0,
      features: [
        { text: 'Access to 5 basic course modules', included: true },
        { text: 'High-quality learning videos', included: true },
        { text: 'Interactive quizzes and exercises', included: false },
        { text: 'Completion certificate', included: false },
        { text: 'Mentor consultation', included: false },
        { text: 'Access to community forum', included: false },
        { text: 'Real-world case study materials', included: false },
        { text: 'Monthly webinars', included: false },

      ],
      buttonText: 'Get Started Now',
      buttonStyle: 'border border-blue-500 text-blue-500 hover:bg-blue-50',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Suitable for business people who want to master import and export strategies in depth.',
      price: 25,
      yearlyPrice: 19,
      features: [
        { text: 'Access to all course modules (20+)', included: true },
        { text: 'High-quality learning videos', included: true },
        { text: 'Interactive quizzes and exercises', included: true },
        { text: 'Completion certificate', included: true },
        { text: 'Mentor consultation', included: true },
        { text: 'Access to community forum', included: true },
        { text: 'Real-world case study materials', included: true },
        { text: 'Monthly webinars', included: true },

      ],
      buttonText: 'Get Started Now',
      buttonStyle: 'bg-white text-blue-600 hover:bg-gray-50',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Suitable for companies looking to train their teams in import and export operations.',
      price: 100,
      yearlyPrice: 75,
      features: [
        { text: 'Access to all course modules (20+)', included: true },
        { text: 'High-quality learning videos', included: true },
        { text: 'Interactive quizzes and exercises', included: true },
        { text: 'Completion certificate', included: true },
        { text: 'Mentor consultation', included: true },
        { text: 'Access to community forum', included: true },
        { text: 'Real-world case study materials', included: true },
        { text: 'Monthly webinars', included: true },

      ],
      buttonText: 'Get Started Now',
      buttonStyle: 'border border-blue-500 text-blue-500 hover:bg-blue-50',
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen  py-1 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center mb-8">
            <span className="mr-4 text-gray-700">Pay Monthly</span>
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  isYearly ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <motion.div
                  className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                  animate={{
                    x: isYearly ? 32 : 4
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              </button>
            </motion.div>
            <span className="ml-4 text-gray-700">Pay Yearly</span>
            
            {isYearly && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                className="ml-4 relative"
              >
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save 25%
                </div>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-8 h-8 text-blue-600"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <motion.path
                    d="M20 50 Q 40 20, 60 50"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl scale-105' 
                  : 'bg-white text-gray-800 shadow-lg'
              }`}
            >
              {plan.popular && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <div className="mb-8">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="text-2xl font-bold mb-3"
                >
                  {plan.name}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  className={`text-sm leading-relaxed ${
                    plan.popular ? 'text-blue-100' : 'text-gray-600'
                  }`}
                >
                  {plan.description}
                </motion.p>
              </div>

              <div className="mb-8">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                  className="flex items-baseline"
                >
                  <span className="text-5xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.price}
                  </span>
                  <span className="text-lg ml-2 opacity-70">/ Month</span>
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-lg font-medium mb-8 transition-colors duration-200 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </motion.button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    variants={featureVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.2 + featureIndex * 0.1 + 0.6 }}
                    className="flex items-center"
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                      feature.included
                        ? plan.popular 
                          ? 'bg-white text-blue-600' 
                          : 'bg-blue-100 text-blue-600'
                        : plan.popular
                          ? 'bg-blue-500'
                          : 'bg-gray-200'
                    }`}>
                      {feature.included ? (
                        <Check className="w-3 h-3" />
                      ) : (
                        <X className={`w-3 h-3 ${plan.popular ? 'text-blue-200' : 'text-gray-400'}`} />
                      )}
                    </div>
                    <span className={`text-sm ${
                      feature.included 
                        ? '' 
                        : plan.popular ? 'text-blue-200' : 'text-gray-400'
                    }`}>
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;