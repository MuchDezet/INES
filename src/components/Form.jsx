import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Download, Upload, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

const Form = () => {
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, threshold: 0.2 });
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [notification, setNotification] = useState({
    show: false,
    type: '', // 'success' or 'error'
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      showNotification('success', 'Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      showNotification('error', 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const exportData = () => {
    if (!formData.name && !formData.email && !formData.phone && !formData.message) {
      showNotification('error', 'No data to export');
      return;
    }

    const dataStr = JSON.stringify(formData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    
    const exportFileDefaultName = `contact-form-data-${new Date().toISOString().slice(0, 10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showNotification('success', 'Data exported successfully');
  };

  const importData = (event) => {
    const fileReader = new FileReader();
    const file = event.target.files[0];
    
    if (!file) return;
    
    if (file.type !== 'application/json') {
      showNotification('error', 'Please select a JSON file');
      return;
    }
    
    fileReader.readAsText(file, 'UTF-8');
    fileReader.onload = e => {
      try {
        const content = e.target.result;
        const importedData = JSON.parse(content);
        
        // Validate imported data structure
        if (typeof importedData === 'object' && 
            ('name' in importedData || 'email' in importedData || 
             'phone' in importedData || 'message' in importedData)) {
          setFormData(prev => ({ ...prev, ...importedData }));
          showNotification('success', 'Data imported successfully');
        } else {
          showNotification('error', 'Invalid data format');
        }
      } catch (error) {
        showNotification('error', 'Failed to import data');
      }
    };
    
    fileReader.onerror = () => {
      showNotification('error', 'Error reading file');
    };
    
    // Reset file input
    event.target.value = '';
  };

  const triggerImport = () => {
    fileInputRef.current?.click();
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  return (
    <section className="py-16 sm:py-20 md:py-40 px-4 sm:px-6 md:px-8 lg:px-12 bg-white" ref={formRef}>
      {/* Notification */}
      {notification.show && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-6 right-6 z-50 flex items-center space-x-2 px-4 py-3 rounded-lg shadow-lg ${
            notification.type === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}
        >
          {notification.type === 'success' ? (
            <CheckCircle size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          <span className="font-medium">{notification.message}</span>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left Column - Content */}
        <motion.div 
          className="space-y-8 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <div className="space-y-6">
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
              variants={fadeInUpVariants}
            >
              Let's Start a Conversation
            </motion.h2>
            <motion.p 
              className="text-gray-600 leading-relaxed text-lg md:text-xl max-w-lg"
              variants={fadeInUpVariants}
            >
              We're here to help you grow your business. Our team of experts is ready to provide tailored solutions for your unique challenges.
            </motion.p>
          </div>

          {/* Contact Information */}
          <motion.div 
            className="grid sm:grid-cols-2 gap-6 md:gap-8"
            variants={containerVariants}
          >
            <motion.div 
              variants={staggerItemVariants}
            >
              <motion.div 
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm mb-4"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                Kediri
              </motion.div>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-base">
                    Jl. Perumahan Mojoroto Indah Blok K2,<br />
                    , RT.42/RW.11, Mojoroto, Kota Kediri, East Java 64112
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a 
                    href="tel:+3212345678" 
                    className="text-base underline hover:text-blue-600 transition-colors duration-300"
                  >
                    +32 123 45 678
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a 
                    href="mailto:belgium@fablio.com" 
                    className="text-base hover:text-blue-600 transition-colors duration-300"
                  >
                    belgium@fablio.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200"
            variants={fadeInUpVariants}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">15+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">98%</div>
              <div className="text-gray-600 text-sm">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div 
          className="relative"
          variants={fadeInRightVariants}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="bg-gradient-to-br from-cyan-600 via-blue-500 to-cyan-400 p-8 md:p-10 rounded-2xl shadow-2xl"
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-white mb-2"
                variants={staggerItemVariants}
              >
                Get in Touch With Us
              </motion.h3>
              <motion.p 
                className="text-gray-300 mb-6"
                variants={staggerItemVariants}
              >
                Fill out the form and our team will get back to you within 24 hours.
              </motion.p>

              <motion.form 
                className="space-y-5"
                onSubmit={handleSubmit}
                variants={containerVariants}
              >
                <motion.div variants={staggerItemVariants}>
                  <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border-3 border-orange-400 rounded-lg text-blue-600 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-5">
                  <motion.div variants={staggerItemVariants}>
                    <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border-3 border-orange-400 rounded-lg text-blue-600 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </motion.div>

                  <motion.div variants={staggerItemVariants}>
                    <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border-3 border-orange-400 rounded-lg text-blue-600 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div variants={staggerItemVariants}>
                  <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border-3 border-orange-400 rounded-lg text-blue-600 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical min-h-[120px]"
                    required
                  ></textarea>
                </motion.div>

                {/* Updated Button with Blue Theme */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 text-white px-6 py-4 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 overflow-hidden"
                  variants={staggerItemVariants}
                  whileHover={{ 
                    scale: isSubmitting ? 1 : 1.02,
                    y: isSubmitting ? 0 : -2,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 skew-x-12" />
                  
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
                      <span className="relative z-10">Processing...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Send Message</span>
                      <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                    </>
                  )}
                </motion.button>

                {/* Import/Export Section */}
                <motion.div 
                  className="pt-4 border-t border-gray-700 flex justify-between"
                  variants={staggerItemVariants}
                >
                  <button
                    type="button"
                    onClick={exportData}
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    <Download size={16} />
                    <span>Export Data</span>
                  </button>
                  
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={importData}
                    accept=".json"
                    className="hidden"
                  />
                  
                  <button
                    type="button"
                    onClick={triggerImport}
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    <Upload size={16} />
                    <span>Import Data</span>
                  </button>
                </motion.div>
              </motion.form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Form;