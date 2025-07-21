import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";
import ProductModal from "./product-modal";
import aiCardAllImage from "@assets/ai card all_1753102070552.jpg";
import beginnerFrontImage from "@assets/Beginner - Front advan_1753102070554.jpg";
import cseAiCardImage from "@assets/cse ai card 16_1753102070555.jpg";
import ecoSystemImage from "@assets/image (1)_1753102070556.jpg";
import indexImage from "@assets/index_1753102070557.png";
import tocImage from "@assets/TOC 1_1753102070558.jpg";

const products = [
  {
    id: 1,
    title: "Engineering Series",
    subtitle: "Technical Fundamentals",
    description: "Core engineering concepts, formulas, and principles across mechanical, electrical, civil, and computer science branches. Bilingual support for regional students.",
    cardCount: "450+ Cards",
    level: "Undergraduate",
    icon: "⚙️",
    bgGradient: "from-[var(--gk-blue)] to-[var(--gk-cyan)]",
    textColor: "text-[var(--gk-blue)]",
    bgColor: "bg-[var(--gk-blue)]",
    levelBg: "bg-[var(--gk-green)]/10",
    levelColor: "text-[var(--gk-green)]",
    cardNumber: "ENG",
    image: cseAiCardImage,
    imageAlt: "Engineering flashcards with technical concepts",
  },
  {
    id: 2,
    title: "Medical Sciences",
    subtitle: "Healthcare Foundation",
    description: "Essential medical terminology, anatomy, physiology, and clinical concepts for medical students. Regional language explanations on the back.",
    cardCount: "380+ Cards",
    level: "Professional",
    icon: "🩺",
    bgGradient: "from-[var(--gk-green)] to-emerald-400",
    textColor: "text-[var(--gk-green)]",
    bgColor: "bg-[var(--gk-green)]",
    levelBg: "bg-slate-100",
    levelColor: "text-slate-600",
    cardNumber: "MED",
    image: beginnerFrontImage,
    imageAlt: "Medical terminology flashcards for students",
  },
  {
    id: 3,
    title: "Business Studies",
    subtitle: "Commerce & Management",
    description: "Business terminology, management principles, economics, and commerce concepts. Perfect for BBA, MBA, and commerce students.",
    cardCount: "320+ Cards",
    level: "Graduate",
    icon: "💼",
    bgGradient: "from-[var(--gk-orange)] to-amber-400",
    textColor: "text-[var(--gk-orange)]",
    bgColor: "bg-[var(--gk-orange)]",
    levelBg: "bg-[var(--gk-orange)]/10",
    levelColor: "text-[var(--gk-orange)]",
    cardNumber: "BUS",
    image: indexImage,
    imageAlt: "Business studies flashcards collection",
  },
  {
    id: 4,
    title: "Liberal Arts",
    subtitle: "Literature & Social Sciences",
    description: "Literature concepts, social science terminology, psychology, and humanities. Designed for arts and literature students with bilingual support.",
    cardCount: "280+ Cards",
    level: "Undergraduate",
    icon: "📖",
    bgGradient: "from-[var(--gk-brown)] to-purple-400",
    textColor: "text-[var(--gk-brown)]",
    bgColor: "bg-[var(--gk-brown)]",
    levelBg: "bg-red-100",
    levelColor: "text-red-600",
    cardNumber: "ART",
    image: tocImage,
    imageAlt: "Liberal arts flashcards with literature concepts",
  },
  {
    id: 5,
    title: "Complete Academic Bundle",
    subtitle: "All Disciplines Included",
    description: "Full collection covering all academic disciplines with lifetime updates, new terminologies, and evolving industry standards. Subscription model included.",
    cardCount: "1500+ Cards",
    level: "Save 50%",
    icon: "🎓",
    bgGradient: "from-slate-700 to-slate-900",
    textColor: "text-slate-700",
    bgColor: "bg-slate-700",
    levelBg: "bg-emerald-100",
    levelColor: "text-emerald-600",
    cardNumber: "ALL",
    image: aiCardAllImage,
    imageAlt: "Complete academic flashcard collection",
  },
  {
    id: 6,
    title: "Rural Student Package",
    subtitle: "Inclusive Learning Solution",
    description: "Special package designed for rural and government college students with enhanced regional language support and simplified explanations for complex terminology.",
    cardCount: "All Cards + Support",
    level: "Affordable",
    icon: "🌾",
    bgGradient: "from-emerald-600 to-teal-600",
    textColor: "text-emerald-600",
    bgColor: "bg-emerald-600",
    levelBg: "bg-blue-100",
    levelColor: "text-blue-600",
    cardNumber: "RUR",
    image: ecoSystemImage,
    imageAlt: "Rural student package with bilingual support",
  },
];

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Academic Flashcard Collections</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Microlearning solutions designed for academic success across all disciplines. Bilingual flashcards that make learning accessible for students from all backgrounds, including rural communities.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              onClick={() => handleProductClick(product)}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating elements on hover */}
                <motion.div 
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100"
                  initial={{ x: -20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-lg">{product.icon}</span>
                </motion.div>
                
                <motion.div 
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  initial={{ x: 20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-xs font-bold text-slate-700">{product.cardNumber}</span>
                </motion.div>
                
                {/* Quick view button */}
                <motion.button 
                  className="absolute bottom-4 right-4 bg-white text-slate-800 rounded-full p-3 opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(product);
                  }}
                >
                  <Eye className="w-4 h-4" />
                </motion.button>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg group-hover:text-[var(--gk-blue)] transition-colors">
                      {product.title}
                    </h4>
                    <p className="text-sm text-slate-500">{product.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs bg-slate-100 ${product.textColor} px-3 py-1 rounded-full font-medium`}>
                      {product.cardCount}
                    </span>
                    <span className={`text-xs ${product.levelBg} ${product.levelColor} px-3 py-1 rounded-full font-medium`}>
                      {product.level}
                    </span>
                  </div>
                  
                  <motion.button 
                    className={`${product.textColor} hover:opacity-80 transition-colors p-2 rounded-full hover:bg-slate-100`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
              
              {/* Animated border effect */}
              <motion.div 
                className="absolute inset-0 border-2 border-transparent rounded-2xl opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(white, white) padding-box, ${product.bgGradient.replace('from-', 'linear-gradient(135deg, var(--').replace('to-', '), var(--').replace(']', '))').replace('[var(--', '').replace(')', '')} border-box`
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
          
          {/* Index & Reference System */}
          <motion.div
            className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden border md:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex">
              <div className="flex-1 p-6">
                <h4 className="font-semibold text-slate-800 mb-2">Index & Reference System</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Comprehensive indexing system with cross-references, topic organization, and quick lookup guides for efficient studying.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-[var(--gk-cyan)]/10 text-[var(--gk-cyan)] px-2 py-1 rounded-full">Quick Reference</span>
                    <span className="text-xs bg-[var(--gk-green)]/10 text-[var(--gk-green)] px-2 py-1 rounded-full">Organized</span>
                  </div>
                  <button className="text-[var(--gk-blue)] hover:opacity-80 transition-colors ml-auto">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="w-32 bg-gradient-to-br from-[var(--gk-cyan)] to-blue-400 flex items-center justify-center">
                <span className="text-white text-2xl">📋</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-4 bg-[var(--gk-blue)] text-white rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
            <ShoppingCart className="w-4 h-4" />
            View Complete Catalog
          </button>
        </motion.div>
      </div>
      
      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
