import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Rita Wijaya',
      position: 'Head of Export Operations',
      tagline: 'Expert in international trade regulations',
      image: './img/1.jpeg',
      expertise: 'CEO ',
      backgroundImage: './img/ini.jpg' // Ship background
    },
    {
      id: 2,
      name: 'Sari Dewi',
      position: 'Import Specialist',
      tagline: 'Ensuring smooth customs clearance',
      image: './img/2.jpeg',
      expertise: 'Customs Clearance',
      backgroundImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' // Truck background
    },
    {
      id: 3,
      name: 'Budi Santoso',
      position: 'Logistics Coordinator',
      tagline: 'Optimizing supply chain efficiency',
      image: './img/3.jpeg',
      expertise: 'Logistics',
      backgroundImage: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' // Warehouse background
    },
    {
      id: 4,
      name: 'Diana Putri',
      position: 'Training Director',
      tagline: 'Empowering businesses through knowledge',
      image: './img/4.jpeg',
      expertise: 'Courses',
      backgroundImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' // Education background
    },
    {
      id: 5,
      name: 'Rizky Pratama',
      position: 'International Trade Consultant',
      tagline: 'Navigating global market complexities',
      image: './img/5.jpeg',
      expertise: 'Market Analysis',
      backgroundImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' // Analytics background
    },
    {
      id: 6,
      name: 'Maya Sari',
      position: 'Quality Control Manager',
      tagline: 'Maintaining international standards',
      image: './img/6.jpeg',
      expertise: 'Quality Assurance',
      backgroundImage: 'https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' // Quality check background
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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

  const hoverVariants = {
    hover: {
      y: -10,
      boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-orange-500 text-sm font-medium tracking-wider uppercase mb-4">
            Our Experts
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-blue-600">Import-Export</span> Team
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team of experienced professionals and instructors is dedicated to facilitating international trade 
            and empowering businesses with the knowledge to succeed in global markets.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
            >
              <motion.div
                variants={hoverVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
              >
                {/* Header with background image */}
                <div 
                  className="h-40 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${member.backgroundImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-cyan-500/80"></div>
                  
                  {/* Expertise badge */}
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-blue-600 text-sm font-medium">{member.expertise}</span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col items-center">
                  {/* Avatar */}
                  <div className="relative mb-5 -mt-16">
                    <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
                  <div className="text-blue-600 font-semibold mb-3 text-center">{member.position}</div>
                  <p className="text-gray-600 text-center mb-4 italic">"{member.tagline}"</p>
                  
                  {/* Social links */}
                  <div className="flex space-x-3 mt-4">
                    <motion.a 
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </motion.a>
                    <motion.a 
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                    </motion.a>
                    <motion.a 
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-gray-200"
        >
          <h3 className="text-2xl mt-30 font-bold text-gray-800 mb-6">Join Our Import-Export Courses</h3>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Learn from our experts and gain the knowledge you need to succeed in international trade. 
            Our comprehensive courses cover everything from documentation to logistics.
          </p>
          
          {/* Button matching Hero.jsx */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -10px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 skew-x-12" />
            
            <span className="relative z-10 flex items-center space-x-3">
              <span>Explore Our Courses</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;