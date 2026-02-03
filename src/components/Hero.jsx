import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Array of background images and content
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Global Trade',
      subtitle: 'Export Solutions',
      description: 'Comprehensive export-import services connecting your business to international markets with seamless logistics.'
    },
    {
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Professional',
      subtitle: 'Import Training',
      description: 'Expert-led courses and certification programs to master international trade regulations and import procedures.'
    },
    {
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Complete',
      subtitle: 'Logistics Services',
      description: 'End-to-end shipping and warehousing solutions with professional handling from port to destination.'
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            
            {/* Additional overlay for professional look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-start px-4 sm:px-6 md:px-8 lg:pl-16 xl:pl-24 pt-16">
        <div className="max-w-4xl w-full">
          <div className={`transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            
            {/* Main Title */}
            <h1 className="text-white mb-4 md:mb-6">
              <span className={`block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-2 transition-all duration-700 delay-500 ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}>
                {slides[currentSlide].title}
              </span>
              
              <span className={`block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight transition-all duration-700 delay-700 ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}>
                <span className="text-white">Technical </span>
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  {slides[currentSlide].subtitle.split(' ')[1] || 'Textiles'}
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className={`text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-2xl transition-all duration-700 delay-900 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}>
              {slides[currentSlide].description}
            </p>

            {/* CTA Button */}
            <div className={`transition-all duration-700 delay-1100 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}>
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 skew-x-12" />
                
                <span className="relative z-10 flex items-center space-x-2 sm:space-x-3">
                  <span>Discover More</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="h-1 bg-white/20">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-1000 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop Side Navigation Info */}
      <div className="absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <div className="space-y-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`block w-12 h-12 lg:w-16 lg:h-16 rounded-2xl overflow-hidden transition-all duration-300 border-2 ${
                index === currentSlide
                  ? 'border-orange-500 scale-110 shadow-2xl'
                  : 'border-white/30 hover:border-white/60 hover:scale-105'
              }`}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Tablet Side Navigation (Medium screens) */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:block lg:hidden">
        <div className="space-y-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`block w-2 h-8 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-orange-500 shadow-lg'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements - Responsive sizes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated particles - smaller on mobile */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 md:w-2 md:h-2 bg-orange-400/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 md:w-1 md:h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 md:w-1.5 md:h-1.5 bg-orange-300/40 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Gradient orbs - responsive sizes */}
        <div className="absolute top-10 right-10 md:right-20 w-16 h-16 md:w-32 md:h-32 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-2xl md:blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-5 md:left-10 w-20 h-20 md:w-40 md:h-40 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-2xl md:blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Mobile Touch Swipe Area (invisible overlay for better UX) */}
      <div className="absolute inset-0 z-5 lg:hidden" />
    </div>
  );
};

export default Hero;