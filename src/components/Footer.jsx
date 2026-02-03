import React, { useState } from 'react';
import { Star, MapPin, Navigation, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Email submitted:', email);
    // Handle email submission logic here
  };

  return (
    <footer className="bg-orange-500 text-white">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/img/pop.jpeg")'
        }}
      >
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-blue-900/75"></div>
        
        <div className="relative px-6 py-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            Want to hook better leads with hard-<br />
            working digital marketing?
          </h2>
          
          <button className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-8 py-3 rounded font-semibold transition-colors duration-200">
            GET A FREE CONSULTATION NOW
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-6">
              <img 
                src="/img/ll.png"
                alt="Hook Agency Logo"
                className="w-32 h-20"
              />
              <div className="text-xl text-white font-bold mt-2">EKSPORT & IMPORT</div>
            </div>
            
            <div className="text-white space-y-2">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Winnipeg Square, North Loop</p>
                  <p>15175 2nd St #206</p>
                  <p>Minneapolis, MN 55447</p>
                </div>
              </div>
              <p className="pt-2 font-semibold">(612) 772-9425</p>
            </div>
            
            <div className="pt-4 flex items-center">
              <span className="text-blue-500 font-semibold flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                MAP
              </span>
              <span className="text-blue-400 mx-3">|</span>
              <span className="text-blue-500 font-semibold flex items-center">
                <Navigation className="w-4 h-4 mr-1" />
                DIRECTIONS
              </span>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-blue-500 font-bold text-lg mb-6">SITEMAP</h3>
            <ul className="space-y-3 text-white">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Eksport Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Import Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trade & Shop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-blue-500 font-bold text-lg mb-6">WANT OUR BEST WAY TO TRADE TIPS?</h3>
            <p className="text-white mb-6 text-sm">
              We send out our best strategies in a juicy weekly newsletter. Only value.
            </p>
            
            <div className="flex">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  placeholder="Your E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-l text-white placeholder-gray-400 focus:outline-none focus:border-yellow-600"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-blue-600 to-cyan-400 px-4 py-2 rounded-r font-semibold transition-colors duration-200"
              >
                SEND ME
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-6xl mx-auto pt-12 mt-12 border-t border-blue-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2019 Hook Agency / All rights reserved / Privacy
            </div>

            {/* Social Icons and Badge */}
            <div className="flex items-center space-x-6">
              {/* Google Partner Badge */}
              <div className="flex items-center space-x-2">
                <Star fill="#4285F4" color="#4285F4" className="w-6 h-6" />
                <span className="text-gray-400 text-sm">PARTNER</span>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;