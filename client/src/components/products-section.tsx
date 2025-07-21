import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Master AI",
    subtitle: "The Leitner Way",
    description: "Comprehensive collection covering artificial intelligence fundamentals, machine learning, and advanced concepts.",
    cardCount: "500+ Cards",
    level: "Advanced",
    icon: "🤖",
    bgGradient: "from-[var(--gk-blue)] to-[var(--gk-cyan)]",
    textColor: "text-[var(--gk-blue)]",
    bgColor: "bg-[var(--gk-blue)]",
    levelBg: "bg-[var(--gk-green)]/10",
    levelColor: "text-[var(--gk-green)]",
    cardNumber: "AI",
  },
  {
    id: 2,
    title: "Intelligence",
    subtitle: "Core Concepts",
    description: "Essential concepts about artificial intelligence, machine thinking, and cognitive computing principles.",
    cardCount: "45 Cards",
    level: "Beginner",
    icon: "🧠",
    bgGradient: "from-[var(--gk-green)] to-emerald-400",
    textColor: "text-[var(--gk-green)]",
    bgColor: "bg-[var(--gk-green)]",
    levelBg: "bg-slate-100",
    levelColor: "text-slate-600",
    cardNumber: "01",
  },
  {
    id: 3,
    title: "Programming",
    subtitle: "Algorithms & Code",
    description: "Programming concepts, algorithms, and coding patterns specific to AI development and implementation.",
    cardCount: "65 Cards",
    level: "Intermediate",
    icon: "💻",
    bgGradient: "from-[var(--gk-orange)] to-amber-400",
    textColor: "text-[var(--gk-orange)]",
    bgColor: "bg-[var(--gk-orange)]",
    levelBg: "bg-[var(--gk-orange)]/10",
    levelColor: "text-[var(--gk-orange)]",
    cardNumber: "02",
  },
  {
    id: 4,
    title: "Advanced",
    subtitle: "ML & Deep Learning",
    description: "Deep learning, neural networks, and cutting-edge AI research topics for advanced practitioners.",
    cardCount: "120 Cards",
    level: "Expert",
    icon: "📈",
    bgGradient: "from-[var(--gk-brown)] to-purple-400",
    textColor: "text-[var(--gk-brown)]",
    bgColor: "bg-[var(--gk-brown)]",
    levelBg: "bg-red-100",
    levelColor: "text-red-600",
    cardNumber: "03",
  },
  {
    id: 5,
    title: "Complete Bundle",
    subtitle: "All Series Included",
    description: "Full collection including all cards, bonus materials, and exclusive content for comprehensive AI mastery.",
    cardCount: "730+ Cards",
    level: "Save 40%",
    icon: "📚",
    bgGradient: "from-slate-700 to-slate-900",
    textColor: "text-slate-700",
    bgColor: "bg-slate-700",
    levelBg: "bg-emerald-100",
    levelColor: "text-emerald-600",
    cardNumber: "∞",
  },
];

export default function ProductsSection() {
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
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Product Collection</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive flashcard series designed to master artificial intelligence concepts through proven learning methodologies.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden border"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`relative h-64 bg-gradient-to-br ${product.bgGradient} p-8 flex items-center justify-center`}>
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{product.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  <p className="text-sm opacity-90 mt-1">{product.subtitle}</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">{product.cardNumber}</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-slate-800 mb-2">{product.title} {product.title !== "Complete Bundle" ? "Cards" : ""}</h4>
                <p className="text-slate-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs ${product.bgColor}/10 ${product.textColor} px-2 py-1 rounded-full`}>
                      {product.cardCount}
                    </span>
                    <span className={`text-xs ${product.levelBg} ${product.levelColor} px-2 py-1 rounded-full`}>
                      {product.level}
                    </span>
                  </div>
                  <button className={`${product.textColor} hover:opacity-80 transition-colors`}>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
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
    </section>
  );
}
