import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Play, Clock, Smartphone, Award, Star, Check, Users, BookOpen, Globe, BarChart3, FileText, Headphones } from 'lucide-react';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('Newbie');
  
  // Refs dan effects untuk video
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const isVideoInView = useInView(videoContainerRef, { once: true, threshold: 0.2 });

  // Effect untuk memutar video ketika section masuk viewport
  useEffect(() => {
    if (isVideoInView && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, [isVideoInView]);

  // Parallax effect for header
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });
  
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);

  // Define different learning points for each package
  const learningPoints = {
    Newbie: [
      "Basics of import export business",
      "Incoterms and payment methods",
      "Customs regulations and trade policies",
      "Risks involved in import export business and strategies to manage them"
    ],
    Professional: [
      "Step by step procedures of international trade",
      "Shipping and logistics: terms and procedures", 
      "Documentation required in international trade",
      "Incentives provided by the governments for export",
      "Market research and finding suppliers",
      "Negotiation techniques for international trade"
    ],
    Enterprise: [
      "Advanced international trade strategies",
      "Managing complex supply chains",
      "International trade finance options",
      "Legal aspects of global trade",
      "Risk management in volatile markets",
      "Building long-term partnerships",
      "Expanding to new international markets",
      "Customs brokerage procedures"
    ]
  };

  // Define different course includes for each package
  const courseIncludes = {
    Newbie: [
      { icon: Play, text: "2 hours on-demand video" },
      { icon: Award, text: "Certificate of completion" },
      { icon: Smartphone, text: "Access on mobile and TV" }
    ],
    Professional: [
      { icon: Play, text: "5 hours on-demand video" },
      { icon: Award, text: "Certificate of completion" },
      { icon: Smartphone, text: "Access on mobile and TV" },
      { icon: FileText, text: "10 downloadable resources" },
      { icon: BookOpen, text: "Practical exercises & worksheets" }
    ],
    Enterprise: [
      { icon: Play, text: "10+ hours on-demand video" },
      { icon: Award, text: "Premium certificate of completion" },
      { icon: Smartphone, text: "Access on mobile and TV" },
      { icon: FileText, text: "25+ downloadable resources" },
      { icon: Headphones, text: "1-on-1 consultation sessions" },
      { icon: Users, text: "Private community access" },
      { icon: Globe, text: "Global trade database access" }
    ]
  };

  // Pricing packages data
  const pricingPackages = {
    Newbie: {
      price: "Rp149,000",
      originalPrice: "Rp299,000",
      discount: "50% off",
      features: [
        "Full course access",
        "2 hours on-demand video",
        "Certificate of completion",
        "Access on mobile and TV",
        "30-day money-back guarantee"
      ],
      buttonText: "Get Started",
      popular: false
    },
    Professional: {
      price: "Rp399,000",
      originalPrice: "Rp799,000",
      discount: "50% off",
      features: [
        "Everything in Newbie package",
        "Additional advanced modules",
        "Downloadable resources & templates",
        "Q&A support with instructors",
        "Priority email support",
        "1-year access to updates"
      ],
      buttonText: "Most Popular",
      popular: true
    },
    Enterprise: {
      price: "Rp899,000",
      originalPrice: "Rp1,799,000",
      discount: "50% off",
      features: [
        "Everything in Professional package",
        "Customized learning path",
        "One-on-one coaching sessions",
        "Live webinars with experts",
        "Custom import-export business plan",
        "Lifetime access to all materials",
        "Dedicated account manager"
      ],
      buttonText: "Go Premium",
      popular: false
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-cyan-700 via-blue-600 to-cyan-600 text-white py-3">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="flex items-center text-sm space-x-2">
            <span className="hover:text-cyan-200 cursor-pointer transition-colors">Business</span>
            <span>›</span>
            <span className="hover:text-cyan-200 cursor-pointer transition-colors">Entrepreneurship</span>
            <span>›</span>
            <span className="text-cyan-200">Importation</span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div ref={headerRef} className="relative w-full bg-gradient-to-br from-cyan-700 via-blue-600 to-cyan-600 text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 50, 150, 0.7), rgba(0, 80, 160, 0.8)),url('/img/koko.png')`,
            y: headerY,
            opacity: headerOpacity
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Import Export Business: The Complete Guide
                </h1>
                
                <p className="text-cyan-100 text-lg mb-6 leading-relaxed">
                  A practical guide how to start and earn income with Import Export Business. Know all about International Trade.
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-cyan-100 mb-6">
                  <span>Created by <span className="text-cyan-200 font-medium">Dr. Muneer Rahman, Shafeeq Panakkad, Anfal Mooliyathodi</span></span>
                </div>

                <div className="flex items-center gap-6 text-sm text-cyan-100">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Last updated 2/2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>🌐</span>
                    <span>English</span>
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs">English [Auto]</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Video Preview */}
            <div className="lg:col-span-1">
              <motion.div
                ref={videoContainerRef}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-lg aspect-video shadow-xl">
                  <motion.video 
                    ref={videoRef}
                    src="./video/cous.mp4"
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                    Preview this course
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Course Details */}
          <div className="lg:col-span-2">
            
            {/* Premium Banner */}
            <motion.div 
              className="flex items-center justify-between bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-6 mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="font-semibold text-lg">Choose Your Learning Path</h3>
                  <p className="text-cyan-100 text-sm">Select the package that matches your goals and budget.</p>
                </div>
              </div>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                Compare Plans
              </button>
            </motion.div>

            {/* Course Rating */}
            <motion.div 
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500">4.8</div>
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-4 h-4 text-orange-500" fill="currentColor" />
                  ))}
                </div>
                <div className="text-sm text-cyan-600 underline cursor-pointer">1,245 ratings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-600">5,324</div>
                <div className="text-sm text-gray-600">learners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">completion rate</div>
              </div>
            </motion.div>

            {/* What You'll Learn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-blue-100 p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-blue-800 mb-6">What you'll learn in {activeTab} Package</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {learningPoints[activeTab].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-cyan-600 mt-1">✓</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Course Includes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-blue-100 p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-blue-800 mb-6">This {activeTab.toLowerCase()} package includes:</h2>
              <div className="space-y-4">
                {courseIncludes[activeTab].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Package Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-blue-100 p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Why choose {activeTab} package?</h2>
              <div className="space-y-3">
                {activeTab === 'Newbie' && (
                  <>
                    <p className="text-gray-700">Perfect for beginners who want to understand the fundamentals of import-export business without overwhelming details.</p>
                    <p className="text-gray-700">Get started quickly with essential knowledge and build a solid foundation for your international trade journey.</p>
                  </>
                )}
                {activeTab === 'Professional' && (
                  <>
                    <p className="text-gray-700">Ideal for business owners and professionals who want to expand their operations internationally.</p>
                    <p className="text-gray-700">Gain practical skills and tools to navigate complex international trade scenarios and grow your business.</p>
                  </>
                )}
                {activeTab === 'Enterprise' && (
                  <>
                    <p className="text-gray-700">Designed for established businesses and serious entrepreneurs looking to master global trade.</p>
                    <p className="text-gray-700">Get personalized guidance and advanced strategies to dominate international markets and maximize profits.</p>
                  </>
                )}
              </div>
            </motion.div>

            {/* Related Topics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Explore related topics</h2>
              <div className="flex flex-wrap gap-3">
                {['Importation', 'Export Strategies', 'International Trade', 'Customs Procedures', 'Global Logistics', 'Trade Finance'].map((topic) => (
                  <span key={topic} className="px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full border border-cyan-200 hover:bg-cyan-100 cursor-pointer transition-colors">
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Purchase Card */}
          <div className="lg:col-span-1">
            <motion.div 
              className="sticky top-8 bg-white rounded-lg border border-blue-100 overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Tab Navigation */}
              <div className="flex border-b border-blue-100">
                {['Newbie', 'Professional', 'Enterprise'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab 
                        ? 'border-cyan-600 text-cyan-600 bg-cyan-50' 
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* Popular badge for Professional package */}
                {pricingPackages[activeTab].popular && (
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}

                {/* Discount badge */}
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                  {pricingPackages[activeTab].discount}
                </div>

                {/* Price */}
                <div className="text-center mb-2">
                  <div className="text-3xl font-bold text-gray-900">{pricingPackages[activeTab].price}</div>
                  <div className="text-sm text-gray-500 line-through">{pricingPackages[activeTab].originalPrice}</div>
                  <div className="text-sm text-gray-500 mt-1">one-time payment</div>
                </div>

                {/* Features list */}
                <div className="mb-6 space-y-3">
                  {pricingPackages[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all mb-4">
                  {pricingPackages[activeTab].buttonText}
                </button>
                
                <div className="text-center text-sm text-gray-500 mb-2">
                  30-day money-back guarantee
                </div>
                <div className="text-center text-xs text-gray-500">
                  Full lifetime access
                </div>

                {/* Subscription option */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Team or Business?</h3>
                  <p className="text-xs text-gray-600 mb-4">
                    Get your team access to this course and 26,000+ others with Udemy Business.
                  </p>
                  
                  <button className="w-full border-2 border-cyan-600 text-cyan-600 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-50 transition-colors text-sm">
                    Explore Trade with INES 
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;