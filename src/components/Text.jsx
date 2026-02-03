import React from 'react';
import { Container, Ship, BookOpen, Globe, Star, Zap, Shield, Trophy } from 'lucide-react';

const Text = () => {
  const services = [
    { text: "EXPORT SERVICE", icon: Container },
    { text: "IMPORT SERVICE", icon: Ship },
    { text: "COURSE", icon: BookOpen },
    { text: "INTERNATIONAL TRADE", icon: Globe },
    { text: "PREMIUM SUPPORT", icon: Star },
    { text: "FAST DELIVERY", icon: Zap },
    { text: "SECURE PAYMENT", icon: Shield },
    { text: "BEST QUALITY", icon: Trophy }
  ];

  // Triple array untuk seamless infinite loop
  const tripleServices = [...services, ...services, ...services];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 py-3 sm:py-4 md:py-6">
      {/* Gradient overlays untuk fade effect - responsive width */}
      <div className="absolute left-0 top-0 w-8 sm:w-12 md:w-16 lg:w-20 h-full bg-gradient-to-r from-cyan-500 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-8 sm:w-12 md:w-16 lg:w-20 h-full bg-gradient-to-l from-blue-600 to-transparent z-10"></div>
      
      {/* Subtle pattern overlay - responsive size */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '15px 15px'
      }}></div>
      
      <div className="flex animate-continuous-scroll whitespace-nowrap">
        {tripleServices.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div 
              key={index} 
              className="flex items-center mx-4 sm:mx-6 md:mx-8 lg:mx-12 text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl tracking-wide transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-opacity-20 rounded-full p-1.5 sm:p-2 mr-2 sm:mr-3 md:mr-4 backdrop-blur-sm">
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <span className="drop-shadow-lg whitespace-nowrap">{service.text}</span>
              <div className="w-px h-4 sm:h-6 md:h-8 bg-white bg-opacity-30 ml-3 sm:ml-4 md:ml-6 lg:ml-8"></div>
            </div>
          );
        })}
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
      
      <style jsx>{`
        @keyframes continuous-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        .animate-continuous-scroll {
          animation: continuous-scroll 20s linear infinite;
          animation-play-state: running;
        }
        
        .animate-continuous-scroll:hover {
          animation-play-state: paused;
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          .animate-continuous-scroll {
            animation-duration: 15s;
          }
        }
        
        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          .animate-continuous-scroll {
            animation-duration: 18s;
          }
        }
        
        /* Desktop optimizations */
        @media (min-width: 1025px) {
          .animate-continuous-scroll {
            animation-duration: 25s;
          }
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-continuous-scroll {
            animation-duration: 60s;
          }
        }
      `}</style>
    </div>
  );
};

export default Text;