import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Download, Sparkles } from "lucide-react";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { useParallax } from "@/hooks/use-parallax";
import { useRef } from "react";

export default function HeroSection() {
  const scrollTo = useScrollTo();
  const scrollY = useParallax();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 grid-pattern"
        style={{ y, opacity }}
      />
      <motion.div 
        className="absolute inset-0 gradient-overlay"
        style={{ opacity }}
      />
      
      {/* Enhanced Floating Elements with Parallax */}
      <motion.div 
        className="absolute top-20 left-10 w-16 h-16 bg-[var(--gk-green)]/20 rounded-full blur-sm"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, -100])
        }}
      />
      <motion.div 
        className="absolute top-40 right-20 w-12 h-12 bg-[var(--gk-orange)]/30 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: 2 
        }}
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, -150])
        }}
      />
      <motion.div 
        className="absolute bottom-40 left-1/4 w-8 h-8 bg-[var(--gk-blue)]/25 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, -180, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: 4 
        }}
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, -80])
        }}
      />
      
      {/* Additional floating sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -50, -100]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeOut"
          }}
        />
      ))}
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <motion.div 
              className="space-y-4"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                <span className="text-[var(--gk-blue)]">Flashcards</span> for<br/>
                <span className="text-[var(--gk-green)]">Students</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl">
                Revolutionary microlearning solution designed for academic success. Bite-sized, bilingual flashcards that make learning accessible, engaging, and practical for every student.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button 
                onClick={() => scrollTo("products")}
                className="group relative px-8 py-4 bg-[var(--gk-blue)] text-white rounded-xl font-semibold shadow-lg overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <div className="relative flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                  Explore Products
                  <motion.div
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <Play className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.button>
              
              <motion.button 
                className="group relative px-8 py-4 border-2 border-[var(--gk-blue)] text-[var(--gk-blue)] rounded-xl font-semibold overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "var(--gk-blue)",
                  color: "white"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-[var(--gk-blue)]"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0.5, originY: 0.5 }}
                />
                <div className="relative flex items-center justify-center gap-2">
                  <motion.div
                    className="group-hover:animate-bounce"
                  >
                    <Download className="w-4 h-4" />
                  </motion.div>
                  Learn More
                </div>
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--gk-blue)]">1000+</div>
                <div className="text-sm text-slate-600">Academic Concepts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--gk-green)]">Bilingual</div>
                <div className="text-sm text-slate-600">Regional Language Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--gk-orange)]">15+</div>
                <div className="text-sm text-slate-600">Academic Disciplines</div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="relative">
              <div className="w-full max-w-lg mx-auto relative">
                <motion.div 
                  className="bg-gradient-to-br from-[var(--gk-blue)] to-[var(--gk-cyan)] rounded-3xl p-8 shadow-2xl"
                  initial={{ rotate: 3 }}
                  whileHover={{ rotate: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="bg-white rounded-2xl p-6 space-y-4 grid-pattern">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[var(--gk-green)] rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">🧠</span>
                      </div>
                      <h3 className="font-semibold text-slate-800">Intelligence</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Artificial Intelligence (AI) is when computers can think and learn like humans. They can solve problems, learn new things, and make decisions.
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xs text-[var(--gk-green)] font-medium">Card 01</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-[var(--gk-green)] rounded-full"></div>
                        <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                        <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating cards */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-20 h-28 bg-white rounded-xl shadow-lg grid-pattern p-2"
                  initial={{ rotate: 12 }}
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-4 h-4 bg-[var(--gk-orange)] rounded-full mb-2"></div>
                  <div className="space-y-1">
                    <div className="h-1 bg-slate-200 rounded"></div>
                    <div className="h-1 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-1 bg-slate-200 rounded w-1/2"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-2 -left-6 w-16 h-24 bg-white rounded-xl shadow-lg grid-pattern p-2"
                  initial={{ rotate: -12 }}
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                >
                  <div className="w-3 h-3 bg-[var(--gk-brown)] rounded-full mb-2"></div>
                  <div className="space-y-1">
                    <div className="h-1 bg-slate-200 rounded"></div>
                    <div className="h-1 bg-slate-200 rounded w-2/3"></div>
                    <div className="h-1 bg-slate-200 rounded w-1/3"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
