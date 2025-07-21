import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollTo } from "@/hooks/use-scroll-to";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollTo = useScrollTo();

  const handleNavClick = (sectionId: string) => {
    scrollTo(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--gk-blue)] to-[var(--gk-cyan)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">GK</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">GK Cloud Solutions</h1>
              <p className="text-xs text-slate-500">Global Knowledge</p>
            </div>
          </div>
          
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
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-3">
              <button 
                onClick={() => handleNavClick("hero")}
                className="block text-slate-600 hover:text-[var(--gk-blue)] transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick("products")}
                className="block text-slate-600 hover:text-[var(--gk-blue)] transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => handleNavClick("features")}
                className="block text-slate-600 hover:text-[var(--gk-blue)] transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => handleNavClick("contact")}
                className="block text-slate-600 hover:text-[var(--gk-blue)] transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
