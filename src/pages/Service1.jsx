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
              Our Services
            </h1>
            <div className="flex items-center justify-center text-white text-sm sm:text-base md:text-lg">
              <a href="#" className="hover:text-orange-400 transition duration-300">Export Service</a> 
              <span className="mx-2">/</span> 
              <span className="hover:text-orange-400 transition duration-300">Training Courses</span>
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
                  Professional Export Services by PT INDO EXIM SUKSES BERSAMA
                </h1>
                
                <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
                  PT INDO EXIM SUKSES BERSAMA is a trusted export service provider in Indonesia. 
                  With over 10 years of experience, we offer comprehensive solutions for all your export needs, 
                  from customs clearance processes, document management, to international shipping logistics.
                </p>

                {/* Service Cards */}
                <div className="space-y-6">
                  {/* Export Service Card with Image */}
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
                      <h3 className="text-xl font-semibold text-blue-800 mb-2">Complete Export Services</h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        PT INDO EXIM SUKSES BERSAMA provides end-to-end export services from Indonesia to worldwide destinations. 
                        We handle the entire process including export documentation, customs clearance, 
                        international transportation, and delivery to your customers.
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        Our expertise covers various industry sectors, ensuring that your exported goods comply with all international regulations and standards. 
                        We maintain strong relationships with shipping companies and international partners to expedite the export process.
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Whether you're exporting agricultural products, manufactured goods, textiles, or specialized commodities, 
                        our team of experts will guide you through every step of the process with transparency and efficiency.
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
                      <span>Why choose our export services?</span>
                      <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="mt-4 text-gray-600 leading-relaxed">
                      We have an extensive network of international partners, ensuring smooth and efficient export processes. 
                      Our professional team masters Indonesian and international export regulations, providing ease and security in every export transaction.
                      We offer competitive pricing without compromising on service quality, and our transparent process keeps you informed at every stage.
                    </div>
                  </motion.details>

                  <motion.details 
                    className="group border-b border-blue-100 pb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <summary className="flex justify-between items-center cursor-pointer text-blue-800 font-medium hover:text-orange-500 transition-colors">
                      <span>What types of goods can be exported?</span>
                      <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="mt-4 text-gray-600 leading-relaxed">
                      We handle exports of various Indonesian products including agricultural commodities, processed foods, 
                      textiles and garments, furniture, handicrafts, electronics components, and much more. 
                      Our team stays updated with the latest regulations for different product categories to ensure compliance.
                      Consult with us about your export needs for the best solutions tailored to your specific requirements.
                    </div>
                  </motion.details>

                  <motion.details 
                    className="group border-b border-blue-100 pb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <summary className="flex justify-between items-center cursor-pointer text-blue-800 font-medium hover:text-orange-500 transition-colors">
                      <span>How is the export process conducted?</span>
                      <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="mt-4 text-gray-600 leading-relaxed">
                      The process begins with consultation and quotation, followed by document processing and export permits, 
                      goods preparation and quality control, international transportation arrangements, customs clearance process in Indonesia, 
                      and finally shipment to your international customers. We manage the entire process in an integrated manner.
                      Our team provides regular updates and a dedicated account manager ensures smooth communication throughout the process.
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
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-8">Our Service Advantages</h2>
                
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="w-full lg:w-1/2">
                    <div className="h-64 sm:h-80 bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src="/img/ini.jpg" 
                        alt="Professional export services"
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
                      As an export service specialist, PT INDO EXIM SUKSES BERSAMA is committed to providing 
                      the best service with competitive prices. We understand the complexity of the export process and 
                      simplify it for your business convenience. Our extensive experience in dealing with Indonesian export regulations 
                      and knowledge of international trade requirements sets us apart from other service providers.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-500">✓</span>
                        <span className="text-gray-700">Export Documentation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-500">✓</span>
                        <span className="text-gray-700">International Shipping</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-500">✓</span>
                        <span className="text-gray-700">Export Regulation Consultation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-500">✓</span>
                        <span className="text-gray-700">Customs Clearance</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-500">✓</span>
                        <span className="text-gray-700">Real-time Tracking System</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-500">✓</span>
                        <span className="text-gray-700">Door-to-Door Service</span>
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
                  <h3 className="font-semibold text-blue-800 mb-4">Our Export Services</h3>
                  <div className="space-y-3">
                    {[
                      { number: '1', name: 'Trucking', color: 'text-cyan-600' },
                      { number: '2', name: 'Customs clearance', color: 'text-blue-600' },
                      { number: '3', name: 'Export declaration (PEB)', color: 'text-purple-600' },
                      { number: '4', name: 'Additional documents & certificates', color: 'text-orange-600' },
                      { number: '5', name: 'Sea & air freight forwarding', color: 'text-green-600' },
                      { number: '6', name: 'Undername export', color: 'text-red-600' },
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
                  <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                  
                  <div className="mb-4">
                    <p className="text-cyan-100 text-sm mb-1">Phone Number</p>
                    <p className="text-lg font-semibold">+62 21 1234 5678</p>
                  </div>
                  
                  <hr className="border-cyan-400 my-4" />
                  
                  <div className="mb-4">
                    <p className="text-cyan-100 text-sm mb-1">Email Address</p>
                    <p className="text-lg font-semibold">info@indoexim.com</p>
                  </div>

                  <hr className="border-cyan-400 my-4" />
                  
                  <div>
                    <p className="text-cyan-100 text-sm mb-1">Office Address</p>
                    <p className="text-sm">Jl. Raya Kelapa Gading No. 123<br />Jakarta Utara, Indonesia</p>
                  </div>
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