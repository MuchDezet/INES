import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  Star, 
  ShoppingCart, 
  Info, 
  X, 
  Phone, 
  Mail, 
  MessageCircle,
  Home,
  ChevronRight
} from 'lucide-react';

const Shop = () => {
  // Parallax effect for header
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });
  
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  // Product data sesuai dengan produk yang akan dijual
  const products = [
    {
      id: 1,
      name: "Dried Split Areca Nut",
      price: 112.00,
      originalPrice: 150.00,
      image: "/api/placeholder/300/250",
      sale: true,
      description: "High-quality dried split areca nut, carefully processed to maintain freshness and quality. Perfect for various traditional and commercial uses.",
      category: "Agricultural Products",
      stock: 50,
      rating: 4.5
    },
    {
      id: 2,
      name: "Dried Whole Areca Nut",
      price: 125.00,
      originalPrice: 160.00,
      image: "/api/placeholder/300/250",
      sale: true,
      description: "Premium whole areca nuts, dried to perfection. Ideal for traditional ceremonies and commercial applications.",
      category: "Agricultural Products",
      stock: 35,
      rating: 4.7
    },
    {
      id: 3,
      name: "Palm Kernel Expeller (PKE)",
      price: 85.00,
      originalPrice: null,
      image: "/api/placeholder/300/250",
      sale: false,
      description: "Nutritious palm kernel expeller, a by-product of palm oil extraction. Excellent as animal feed with high protein content.",
      category: "Animal Feed",
      stock: 120,
      rating: 4.3
    },
    {
      id: 4,
      name: "Copra Meal",
      price: 95.00,
      originalPrice: null,
      image: "/api/placeholder/300/250",
      sale: false,
      description: "High-quality copra meal produced from dried coconut kernels. Rich in protein and ideal for livestock feed.",
      category: "Animal Feed",
      stock: 80,
      rating: 4.4
    },
    {
      id: 5,
      name: "Fish Meal",
      price: 150.00,
      originalPrice: 180.00,
      image: "/api/placeholder/300/250",
      sale: true,
      description: "Premium fish meal with high protein content. Perfect for aquaculture and animal feed formulations.",
      category: "Animal Feed",
      stock: 25,
      rating: 4.8
    },
    {
      id: 6,
      name: "Fish Oil",
      price: 200.00,
      originalPrice: 240.00,
      image: "/api/placeholder/300/250",
      sale: true,
      description: "Pure fish oil rich in omega-3 fatty acids. Suitable for dietary supplements and animal nutrition.",
      category: "Health Products",
      stock: 15,
      rating: 4.9
    },
    {
      id: 7,
      name: "Palm Kernel Shell",
      price: 45.00,
      originalPrice: null,
      image: "/api/placeholder/300/250",
      sale: false,
      description: "Eco-friendly palm kernel shells, excellent as biomass fuel for industrial boilers and power plants.",
      category: "Biomass Energy",
      stock: 200,
      rating: 4.2
    }
  ];

  const [sortBy, setSortBy] = useState('default');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showNegotiationModal, setShowNegotiationModal] = useState(false);

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeProductDetail = () => {
    setShowModal(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const openNegotiationModal = (product) => {
    setSelectedProduct(product);
    setShowNegotiationModal(true);
  };

  const closeNegotiationModal = () => {
    setShowNegotiationModal(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const contactInfo = {
    whatsapp: "+1234567890",
    email: "sales@yourcompany.com",
    phone: "+1234567890"
  };

  const handleWhatsAppClick = () => {
    const message = `Hello, I'm interested in ${selectedProduct?.name}. Can we negotiate the price?`;
    const url = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEmailClick = () => {
    const subject = `Inquiry about ${selectedProduct?.name}`;
    const body = `Hello, I'm interested in ${selectedProduct?.name} and would like to negotiate the price. Please contact me.`;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  // Render rating stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Header Banner Section */}
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
              Our Shop
            </h1>
            <div className="flex items-center justify-center text-white text-sm sm:text-base md:text-lg mt-4">
              <Home size={16} className="mr-1" />
              <a href="#" className="hover:text-orange-400 transition duration-300 flex items-center">
                Home
              </a> 
              <ChevronRight size={16} className="mx-2" />
              <span className="hover:text-orange-400 transition duration-300">Agricultural Products</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Shop Content Section */}
      <div className="bg-white relative z-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16">
          
          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Agricultural & Industrial Products
            </h1>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-gray-600">Showing all {products.length} results</p>
              
              <div className="flex items-center gap-2">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="default">Default sorting</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group relative flex flex-col h-full"
              >
                {/* Sale Badge */}
                {product.sale && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                    Sale!
                  </div>
                )}
                
                {/* Stock Status */}
                <div className="absolute top-3 right-3 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                  {product.stock > 20 ? 'In Stock' : 'Limited Stock'}
                </div>
                
                {/* Product Image */}
                <div 
                  className="relative h-48 bg-gray-100 overflow-hidden cursor-pointer"
                  onClick={() => openProductDetail(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <Eye size={20} className="text-blue-600" />
                    </div>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 
                    className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors cursor-pointer line-clamp-2"
                    onClick={() => openProductDetail(product)}
                  >
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4 mt-auto">
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-cyan-600 font-bold text-lg">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-gray-500">/ unit</span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button 
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                      onClick={() => openNegotiationModal(product)}
                    >
                      <MessageCircle size={16} className="mr-2" />
                      Negotiate via WhatsApp
                    </button>
                    <button 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium p-2 rounded-md transition-all duration-300"
                      onClick={() => openProductDetail(product)}
                    >
                      <Info size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Product Detail Modal */}
          <AnimatePresence>
            {showModal && selectedProduct && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                onClick={closeProductDetail}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                      <button 
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        onClick={closeProductDetail}
                      >
                        <X size={24} />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      
                      <div>
                        <div className="mb-4">
                          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                            {selectedProduct.category}
                          </span>
                        </div>
                        
                        <div className="flex items-center mb-4">
                          <div className="flex">
                            {renderStars(selectedProduct.rating)}
                          </div>
                          <span className="text-sm text-gray-500 ml-2">({selectedProduct.rating})</span>
                        </div>
                        
                        <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
                        
                        <div className="mb-4">
                          <span className="text-sm text-gray-600">Stock: </span>
                          <span className={`font-medium ${selectedProduct.stock > 20 ? 'text-green-600' : 'text-orange-600'}`}>
                            {selectedProduct.stock} units available
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-6">
                          {selectedProduct.originalPrice && (
                            <span className="text-gray-400 line-through text-lg">
                              ${selectedProduct.originalPrice.toFixed(2)}
                            </span>
                          )}
                          <span className="text-cyan-600 font-bold text-2xl">
                            ${selectedProduct.price.toFixed(2)}
                          </span>
                          <span className="text-gray-500">/ unit</span>
                        </div>
                        
                        <button 
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                          onClick={() => {
                            closeProductDetail();
                            setTimeout(() => openNegotiationModal(selectedProduct), 100);
                          }}
                        >
                          <MessageCircle size={18} className="mr-2" />
                          Negotiate via WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Negotiation Modal */}
          <AnimatePresence>
            {showNegotiationModal && selectedProduct && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                onClick={closeNegotiationModal}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white rounded-xl max-w-md w-full shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-xl font-bold text-gray-900">Negotiate for {selectedProduct.name}</h2>
                      <button 
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        onClick={closeNegotiationModal}
                      >
                        <X size={24} />
                      </button>
                    </div>
                    
                    <p className="text-gray-600 mb-6">Choose how you would like to contact us to negotiate the price:</p>
                    
                    <div className="space-y-4">
                      <button 
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                        onClick={handleWhatsAppClick}
                      >
                        <MessageCircle size={18} className="mr-2" />
                        Contact via WhatsApp
                      </button>
                      
                      <button 
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                        onClick={handleEmailClick}
                      >
                        <Mail size={18} className="mr-2" />
                        Contact via Email
                      </button>
                      
                      <button 
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                        onClick={handlePhoneClick}
                      >
                        <Phone size={18} className="mr-2" />
                        Contact via Phone
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Shop;