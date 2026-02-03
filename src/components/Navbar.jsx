import React, { useState, useEffect } from 'react';
import { ChevronDown, X, Phone, ArrowRight, Menu, Globe, Package, BookOpen, Mail, MapPin, Home, Users, Book, MessageCircle, ChevronRight } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top ketika route berubah
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      name: 'Export Service',
      desc: 'Comprehensive global trade solutions with end-to-end logistics support and regulatory compliance',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&crop=center',
      icon: Globe,
      accent: 'from-blue-500 to-cyan-400',
      features: ['Global Shipping', 'Customs Documentation', 'Quality Control'],
      link: '/services/export'
    },
    {
      name: 'Import Service', 
      desc: 'Seamless import processes with customs handling and supply chain optimization',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=250&fit=crop&crop=center',
      icon: Package,
      accent: 'from-blue-500 to-cyan-400',
      features: ['Import Clearance', 'Supply Chain', 'Risk Management'],
      link: '/services/import'
    },
    {
      name: 'Training & Courses',
      desc: 'Professional development programs for international trade and business excellence',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&crop=center',
      icon: BookOpen,
      accent: 'from-blue-500 to-cyan-400',
      features: ['Trade Certification', 'Expert Mentorship', 'Practical Training'],
      link: '/services/training'
    }
  ];

  const handleNavigation = (path, isAnchor = false, anchorId = '') => {
    if (isAnchor && anchorId) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(anchorId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(path);
      // Scroll to top sudah ditangani oleh useEffect di atas
    }
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <>
      {/* Enhanced Backdrop */}
      <div className={`fixed inset-0 backdrop-blur-2xl bg-gradient-to-br from-black/40 via-slate-900/30 to-black/50 z-40 transition-all duration-700 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      } lg:hidden`} onClick={() => setIsMobileMenuOpen(false)} />

      {/* Ultra Premium Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        isScrolled 
          ? 'bg-white shadow-md border-b border-gray-200' 
          : 'bg-gradient-to-r from-white/8 via-white/10 to-white/8 backdrop-blur-xl border-b border-white/15'
      }`} style={{ height: '70px' }}>
        
        {/* Animated gradient border */}
        <div className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-700 ${
          isScrolled 
            ? 'bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-60' 
            : 'bg-gradient-to-r from-transparent via-blue-400/90 to-transparent opacity-80'
        }`} />
        
        <div className="w-full h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Enhanced Logo Section */}
            <div className={`flex items-center transition-all duration-1000 delay-100 ${
              isLoaded ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-90'
            }`} style={{ marginLeft: '1rem' }}>
              <div className="relative group cursor-pointer">
                <div className="relative flex items-center space-x-3">
                  <div className="relative">
                    <img 
                      src="/img/logos.png" 
                      alt="Extice Logo" 
                      className="relative z-10 transition-all duration-500 group-hover:scale-110"
                      style={{ objectFit: 'contain', height: '130px', width: 'auto' }}
                      onClick={() => handleNavigation('/')}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className={`hidden lg:flex items-center space-x-10 transition-all duration-1000 delay-200 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}>
              
              {/* Home Navigation */}
              <div className="relative group">
                <button
                  onClick={() => handleNavigation('/')}
                  className={`relative transition-all duration-400 font-medium text-sm tracking-wide py-3 px-2 flex items-center gap-1.5 ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-cyan-600' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-cyan-400/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-400 -z-10" />
                  
                  <Home className={`w-4 h-4 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                  <span className="relative z-10">Home</span>
                  
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-500 rounded-full" />
                </button>
              </div>
              
              {/* About Navigation */}
              <div className="relative group">
                <button
                  onClick={() => handleNavigation('/', true, 'about')}
                  className={`relative transition-all duration-400 font-medium text-sm tracking-wide py-3 px-2 flex items-center gap-1.5 ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-cyan-600' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-cyan-400/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-400 -z-10" />
                  
                  <Users className={`w-4 h-4 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                  <span className="relative z-10">About Us</span>
                  
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-500 rounded-full" />
                </button>
              </div>
              
              {/* Ultra Premium Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  className={`relative transition-all duration-400 flex items-center space-x-2 font-medium text-sm tracking-wide py-3 px-2 ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-cyan-600' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-cyan-800/20 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-400 -z-10" />
                  
                  <Globe className={`w-4 h-4 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                  <span className="relative z-10">Services</span>
                  <ChevronDown className={`w-4 h-4 transition-all duration-400 ${
                    isServicesOpen ? 'rotate-180 text-cyan-400 scale-110' : 'group-hover:scale-110'
                  } ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                  
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-500 rounded-full" />
                </button>
                
                {/* Ultra Premium Dropdown */}
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[800px] bg-blue-900/95 backdrop-blur-3xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-700 transform origin-top ${
                    isServicesOpen 
                      ? 'opacity-100 visible translate-y-0 scale-100' 
                      : 'opacity-0 invisible -translate-y-8 scale-95'
                  }`}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  
                  <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-r from-blue-500/50 via-cyan-400/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse -z-10" />
                  
                  {/* Header */}
                  <div className="relative bg-gradient-to-r from-blue-800/80 to-blue-700/80 p-6 border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold text-xl mb-2">Our Premium Services</h3>
                        <p className="text-white/70 text-sm">Comprehensive business solutions tailored for excellence</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Services Grid */}
                  <div className="p-6 grid grid-cols-3 gap-6">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <div 
                          key={service.name}
                          className="relative group/service cursor-pointer transform hover:scale-105 transition-all duration-500"
                          style={{ transitionDelay: isServicesOpen ? `${index * 100}ms` : '0ms' }}
                          onMouseEnter={() => setHoveredService(index)}
                          onMouseLeave={() => setHoveredService(null)}
                          onClick={() => {
                            if (service.link) {
                              handleNavigation(service.link);
                            }
                          }}
                        >
                          {/* Service card */}
                          <div className="relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-5 border border-white/10 group-hover/service:border-white/30 transition-all duration-500 overflow-hidden">
                            
                            {/* Animated background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover/service:opacity-10 transition-opacity duration-500`} />
                            
                            {/* Service image */}
                            <div className="relative mb-4 overflow-hidden rounded-xl">
                              <img 
                                src={service.image} 
                                alt={service.name}
                                className="w-full h-32 object-cover transition-all duration-700 group-hover/service:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                              
                              {/* Icon overlay */}
                              <div className={`absolute top-3 right-3 p-2 rounded-lg bg-gradient-to-r ${service.accent} shadow-lg transform transition-all duration-500 group-hover/service:scale-110 group-hover/service:rotate-12`}>
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            
                            {/* Content */}
                            <div className="relative z-10">
                              <h4 className="font-semibold text-white mb-2 group-hover/service:text-cyan-300 transition-colors duration-300">
                                {service.name}
                              </h4>
                              <p className="text-white/70 text-xs leading-relaxed mb-3 group-hover/service:text-white/90 transition-colors duration-300">
                                {service.desc}
                              </p>
                              
                              {/* Features */}
                              <div className="space-y-1">
                                {service.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center space-x-2">
                                    <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.accent}`} />
                                    <span className="text-white/60 text-xs">{feature}</span>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Learn more button */}
                              <div className="mt-4 opacity-0 group-hover/service:opacity-100 transition-all duration-500 transform translate-y-2 group-hover/service:translate-y-0">
                                <button className={`w-full py-2 px-3 rounded-lg bg-gradient-to-r ${service.accent} text-white text-xs font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-1`}>
                                  <span>Learn More</span>
                                  <ArrowRight className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Footer CTA */}
                  <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 p-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-semibold mb-1">Ready to get started?</h4>
                        <p className="text-white/70 text-sm">Let's discuss your business needs</p>
                      </div>
                      <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-xl font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 group/cta">
                        <span className="flex items-center space-x-2">
                          <span>Get Quote</span>
                          <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Course Navigation */}
              <div className="relative group">
                <button
                  onClick={() => handleNavigation('/course')}
                  className={`relative transition-all duration-400 font-medium text-sm tracking-wide py-3 px-2 flex items-center gap-1.5 ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-cyan-600' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-cyan-400/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-400 -z-10" />
                  
                  <Book className={`w-4 h-4 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                  <span className="relative z-10">Course</span>
                  
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-500 rounded-full" />
                </button>
              </div>
              
              {/* Trade & Shop Navigation */}
              <div className="relative group">
                <button
                  onClick={() => handleNavigation('/shop')}
                  className={`relative transition-all duration-400 font-medium text-sm tracking-wide py-3 px-2 flex items-center gap-1.5 ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-cyan-600' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-cyan-400/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-400 -z-10" />
                  
                  <MessageCircle className={`w-4 h-4 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                  <span className="relative z-10">Trade & Shop</span>
                  
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-500 rounded-full" />
                </button>
              </div>
            </div>

            {/* Enhanced Right Section */}
            <div className={`hidden lg:flex items-center space-x-6 transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`} style={{ marginRight: '1.5rem' }}>
              
              {/* Premium Phone Section */}
              <div className="flex items-center text-orange-400 group transition-all duration-400 cursor-pointer hover:scale-105 relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-orange-500/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl animate-pulse" />
                
                <div className="relative mr-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-cyan-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  
                  <div className="relative p-3 rounded-2xl ">
                    <Phone className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-400 group-hover:text-cyan-300" />
                  </div>
                </div>
                <div className="flex flex-col relative z-10">
                  <span className={`text-xs uppercase tracking-wider font-medium mb-0.5 group-hover:text-cyan-300 transition-colors duration-300 ${
                    isScrolled ? 'text-gray-600' : 'text-white/60'
                  }`}>Call Now</span>
                  <span className={`font-bold text-base group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}>
                    (+62) 123 678 900
                  </span>
                </div>
              </div>
              
              {/* Premium CTA Button */}
              <button 
                onClick={() => handleNavigation('/contact')}
                className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-sm shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-400" />
                </span>
                
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000" />
                
                <div className="absolute inset-0 rounded-xl p-px bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>

            {/* Premium Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative p-3 rounded-2xl transition-all duration-500 group overflow-hidden ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              } ${
                isScrolled 
                  ? ' hover:border-cyan-400/50' 
                  : ''
              }`}
              style={{ marginRight: '1rem' }}
            >
              <div className="absolute inset-0 " />
              
              <div className="relative w-10 h-10 flex items-center justify-center">
                {isMobileMenuOpen ? (
                  <X className="w-8 h-8 text-gray-800 transition-all duration-400 group-hover:rotate-90 group-hover:text-cyan-300" />
                ) : (
                  <img 
                    src="/img/hamburger.png" 
                    alt="Menu" 
                    className="w-10 h-10 transition-all duration-400 group-hover:scale-110"
                  />
                )}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Professional Mobile Menu */}
      <div className={`fixed top-0 right-0 bottom-0 w-80 bg-orange-400 backdrop-blur-3xl z-60 lg:hidden transform transition-all duration-700 ease-out shadow-2xl ${
        isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="flex flex-col h-full">
          
          {/* Premium Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20 bg-gradient-to-r from-cyan-500 to-blue-600">
            <div className="flex items-center space-x-3">
              <img 
                src="/img/ineslogo.png" 
                alt="Extice Logo" 
                className="h-16 w-auto rounded-lg object-contain"
              />
              <div>
                <div className="text-white font-bold text-lg  to-cyan-300 bg-clip-text text-transparent">
                  PT INES
                </div>
                <div className="text-white/60 text-xs">Premium Solutions</div>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 "
            >
              <X className="w-5 h-5 text-white group-hover:rotate-90 transition-all duration-300 group-hover:text-cyan-300" />
            </button>
          </div>

          {/* Mobile Content */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="px-6 space-y-6">
              
              {/* Navigation Links */}
              <div className="space-y-3">
                {[
                  { name: 'Home', icon: Home, path: '/', isAnchor: false, anchorId: '' },
                  { name: 'About Us', icon: Users, path: '/', isAnchor: true, anchorId: 'about' },
                  { name: 'Course', icon: Book, path: '/course', isAnchor: false, anchorId: '' },
                  { name: 'Trade & Shop', icon: MessageCircle, path: '/shop', isAnchor: false, anchorId: '' }
                ].map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => item.path && handleNavigation(item.path, item.isAnchor, item.anchorId)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl hover:bg-white/10 transition-all duration-500 group border border-transparent hover:border-white/20 transform hover:-translate-y-1 hover:shadow-lg ${
                      isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl  transition-all duration-300">
                        <item.icon className="w-5 h-5 text-white group-hover:text-cyan-300" />
                      </div>
                      <span className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-300 text-lg">
                        {item.name}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-cyan-400 group-hover:translate-x-2 transition-all duration-300" />
                  </button>
                ))}
                
                {/* Services with dropdown for mobile */}
                <div className="w-full">
                  <button
                    onClick={toggleMobileServices}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl hover:bg-white/10 transition-all duration-500 group border border-transparent hover:border-white/20 transform hover:-translate-y-1 hover:shadow-lg ${
                      isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: '400ms' }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300">
                        <Globe className="w-5 h-5 text-white group-hover:text-cyan-300" />
                      </div>
                      <span className="font-semibold text-white group-hover:text-orange-300 transition-colors duration-300 text-lg">
                        Services
                      </span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-white/50 group-hover:text-cyan-400 transition-all duration-300 ${
                      isMobileServicesOpen ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {/* Mobile Services Dropdown */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-2 pl-14 pr-4 space-y-3">
                      {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <button
                            key={service.name}
                            onClick={() => handleNavigation(service.link)}
                            className={`w-full flex items-center justify-between p-3 rounded-xl  transition-all duration-300 group  ${
                              isMobileServicesOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                            }`}
                            style={{ transitionDelay: isMobileServicesOpen ? `${index * 100 + 500}ms` : '0ms' }}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-r ${service.accent}`}>
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                              <span className="font-medium text-white text-sm">
                                {service.name}
                              </span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className={`bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-5 border border-white/15 transition-all duration-700 ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '800ms' }}>
                <div className="text-white space-y-4">
                  <h3 className="font-bold text-lg text-orange-300 mb-3">Contact Information</h3>
                  
                  <div className="flex items-center space-x-3 group/contact">
                    <div className="p-3  transition-all duration-300">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white/80 text-sm group-hover/contact:text-white transition-colors duration-300">5609 E Sprague Ave, Spokane Valley</div>
                      <div className="text-white/80 text-sm group-hover/contact:text-white transition-colors duration-300">WA 99212, USA</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 group/phone">
                    <div className="p-3  transition-all duration-300">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-white/60 text-xs font-medium group-hover/phone:text-cyan-300 transition-colors duration-300">Phone</span>
                      <div className="text-orange-300 text-lg font-bold group-hover/phone:bg-gradient-to-r group-hover/phone:from-orange-400 group-hover/phone:to-cyan-300 group-hover/phone:bg-clip-text group-hover/phone:text-transparent transition-all duration-500">
                        (+62) 123 678 900
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button onClick={() => handleNavigation('/contact')} className={`w-full group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-bold text-base shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative flex items-center justify-center space-x-2 ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '900ms' }}>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700" />
                
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;