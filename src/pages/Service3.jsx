import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Service1 = () => {
  // Parallax effect for header
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });
  
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Header Banner Section yang dimulai dari atas */}
      <div ref={headerRef} className="relative w-full h-[50vh] flex items-center overflow-hidden">
        {/* Parallax background */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 50, 150, 0.7), rgba(0, 80, 160, 0.8)), url('/img/ini.jpg')`,
            y: headerY,
            opacity: headerOpacity
          }}
        >
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-blue-800/50 to-blue-700/60"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 z-10 relative flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Our Training Courses
            </h1>
            <div className="flex items-center justify-center text-white text-sm sm:text-base md:text-lg">
              <a href="#" className="hover:text-orange-400 transition duration-300">Export Course</a> 
              <span className="mx-2">/</span> 
              <a href="#" className="hover:text-orange-400 transition duration-300">Import Course</a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Services Content Section */}
      <div className="bg-white relative z-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Professional Export-Import Training by PT INDO EXIM SUKSES BERSAMA
                </h1>
                
                <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
                  PT INDO EXIM SUKSES BERSAMA is a leading provider of export-import training courses in Indonesia. 
                  With over 10 years of experience in international trade, we offer comprehensive educational programs 
                  designed to equip professionals with the knowledge and skills needed to succeed in global markets.
                </p>

                {/* Service Cards */}
                <div className="space-y-6">
                  {/* Import Service Card with Image */}
                  <motion.div 
                    className="flex flex-col sm:flex-row items-start gap-4 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg hover:shadow-md transition-all duration-300 border border-blue-100"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="w-full sm:w-1/3">
                      <div className="h-48 sm:h-40 bg-cover bg-center rounded-lg mb-3 sm:mb-0" style={{backgroundImage: "url('/img/ini.jpg')"}}>
                        {/* Fallback background if image fails to load */}
                      </div>
                    </div>
                    <div className="w-full sm:w-2/3">
                      <h3 className="text-xl font-semibold text-blue-800 mb-2">Comprehensive Export-Import Courses</h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        PT INDO EXIM SUKSES BERSAMA provides in-depth training programs covering all aspects of international trade. 
                        Our courses include documentation procedures, customs regulations, international payment methods, 
                        logistics management, and risk mitigation strategies for both exports and imports.
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        Our curriculum is designed by industry experts with practical experience in global trade. 
                        We combine theoretical knowledge with real-world case studies and hands-on exercises to ensure 
                        participants gain actionable skills that can be immediately applied in their professional roles.
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Whether you're new to international trade or looking to enhance your existing knowledge, 
                        our training programs are tailored to meet your specific needs and help you navigate the complexities 
                        of cross-border transactions with confidence.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Expandable Sections */}
                <div className="mt-8 space-y-4">
                  <motion.details 
                    className="group border-b border-blue-100 pb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <summary className="flex justify-between items-center cursor-pointer text-blue-800 font-medium hover:text-orange-500 transition-colors">
                      <span>Why choose our training programs?</span>
                      <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="mt-4 text-gray-600 leading-relaxed">
                      Our courses are developed and taught by industry practitioners with decades of experience in international trade. 
                      We provide up-to-date information on regulatory changes, market trends, and best practices in global business. 
                      Participants receive comprehensive learning materials, templates for key documents, and post-training support. 
                      We offer flexible learning options including in-person classes, virtual sessions, and self-paced online modules.
                    </div>
                  </motion.details>

                  <motion.details 
                    className="group border-b border-blue-100 pb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <summary className="flex justify-between items-center cursor-pointer text-blue-800 font-medium hover:text-orange-500 transition-colors">
                      <span>Who should attend these courses?</span>
                      <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="mt-4 text-gray-600 leading-relaxed">
                      Our training programs are ideal for entrepreneurs looking to expand their business internationally, 
                      logistics and supply chain professionals, customs brokers, trade compliance officers, 
                      business development managers, and anyone involved in international trade operations. 
                      We offer courses at different levels from beginner to advanced, ensuring appropriate content 
                      for various experience levels and professional backgrounds.
                    </div>
                  </motion.details>

                  <motion.details 
                    className="group border-b border-blue-100 pb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <summary className="flex justify-between items-center cursor-pointer text-blue-800 font-medium hover:text-orange-500 transition-colors">
                      <span>What will participants learn?</span>
                      <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="mt-4 text-gray-600 leading-relaxed">
                      Participants will gain comprehensive understanding of international trade documentation, 
                      customs procedures and regulations, Incoterms and their practical applications, 
                      international payment methods and risk management, logistics and supply chain management, 
                      export-import compliance requirements, and strategies for identifying and entering new markets. 
                      Our practical approach ensures that learners can immediately apply their knowledge in real business scenarios.
                    </div>
                  </motion.details>
                </div>
              </motion.div>

              {/* Why Choose Us Section */}
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-8">Our Training Advantages</h2>
                
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="w-full lg:w-1/2">
                    <div className="h-64 sm:h-80 bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src="/img/ini.jpg" 
                        alt="Export-Import training courses"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.backgroundColor = '#e5e7eb';
                          e.target.style.backgroundImage = 'none';
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      As a specialist in international trade education, PT INDO EXIM SUKSES BERSAMA is committed to providing 
                      high-quality training programs with practical value. We understand the complexities of global trade and 
                      simplify them through structured learning experiences. Our extensive network of industry professionals 
                      and regulators ensures that our content remains current and relevant to today's business environment.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-500">✓</span>
                        <span className="text-gray-700">Expert Instructors</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-500">✓</span>
                        <span className="text-gray-700">Practical Case Studies</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-500">✓</span>
                        <span className="text-gray-700">Comprehensive Materials</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-500">✓</span>
                        <span className="text-gray-700">Networking Opportunities</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-500">✓</span>
                        <span className="text-gray-700">Flexible Learning Options</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-500">✓</span>
                        <span className="text-gray-700">Post-Training Support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Service List & Contact */}
            <div className="lg:col-span-1">
              <motion.div 
                className="sticky top-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Service Categories */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6 mb-6 border border-blue-100">
                  <h3 className="font-semibold text-blue-800 mb-4">Our Course Programs</h3>
                  <div className="space-y-3">
                    {[
                      { number: '1', name: 'Fundamentals of Export & Import ', color: 'text-cyan-600' },
                      { number: '2', name: 'Advanced Import Procedures', color: 'text-blue-600' },
                      { number: '3', name: 'Customs Compliance Mastery', color: 'text-purple-600' },
                      { number: '4', name: 'International Trade Finance', color: 'text-indigo-600' },
                      { number: '5', name: 'Supply Chain Management', color: 'text-teal-600' },
                    ].map((service) => (
                      <div key={service.number} className="flex items-center justify-between p-3 bg-white rounded hover:shadow-sm transition-all cursor-pointer group border border-blue-50">
                        <div className="flex items-center space-x-3">
                          <span className={`font-semibold ${service.color}`}>{service.number}</span>
                          <span className="text-gray-700 group-hover:text-blue-800">{service.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-gradient-to-br from-cyan-600 via-blue-500 to-cyan-400 rounded-lg p-6 text-white shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Course Registration</h3>
                  
                  <div className="mb-4">
                    <p className="text-cyan-100 text-sm mb-1">Phone Number</p>
                    <p className="text-lg font-semibold">+62 21 1234 5678</p>
                  </div>
                  
                  <hr className="border-cyan-400 my-4" />
                  
                  <div className="mb-4">
                    <p className="text-cyan-100 text-sm mb-1">Email Address</p>
                    <p className="text-lg font-semibold">training@indoexim.com</p>
                  </div>

                  <hr className="border-cyan-400 my-4" />
                  
                  <div>
                    <p className="text-cyan-100 text-sm mb-1">Training Center Address</p>
                    <p className="text-sm">Jl. Raya Kelapa Gading No. 123<br />Jakarta Utara, Indonesia</p>
                  </div>

                  <button className="mt-6 w-full bg-white text-cyan-600 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-50 transition duration-300">
                    Request Course Outline
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS for clip path */}
      <style jsx>{`
        .clip-polygon {
          clip-path: polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%);
        }
      `}</style>
    </div>
  );
};

export default Service1;