import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollTo } from "@/hooks/use-scroll-to";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollTo(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm shadow-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="relative w-10 h-10 bg-gradient-to-br from-[var(--gk-blue)] to-[var(--gk-cyan)] rounded-lg flex items-center justify-center overflow-hidden"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-bold text-lg relative z-10">GK</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  delay: 0.5
                }}
              />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">GK Cloud Solutions</h1>
              <p className="text-xs text-slate-500">Global Knowledge</p>
            </div>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick("hero")}
              className="text-slate-600 hover:text-[var(--gk-blue)] transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick("products")}
              className="text-slate-600 hover:text-[var(--gk-blue)] transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => handleNavClick("features")}
              className="text-slate-600 hover:text-[var(--gk-blue)] transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavClick("contact")}
              className="text-slate-600 hover:text-[var(--gk-blue)] transition-colors"
            >
              Contact
            </button>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-600 hover:text-[var(--gk-blue)] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white border-t overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="px-6 py-4 space-y-3"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {["hero", "products", "features", "contact"].map((section, index) => (
                  <motion.button
                    key={section}
                    onClick={() => handleNavClick(section)}
                    className="block w-full text-left text-slate-600 hover:text-[var(--gk-blue)] transition-colors py-2 px-3 rounded-lg hover:bg-slate-50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
