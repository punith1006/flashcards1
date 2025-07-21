import { motion } from "framer-motion";

const features = [
  {
    icon: "🌍",
    title: "Bilingual Learning Support",
    description: "Regional language explanations on the back of each card, making complex academic terminology accessible to students from rural communities and government colleges.",
    color: "bg-[var(--gk-green)]",
  },
  {
    icon: "⚡",
    title: "Microlearning Approach",
    description: "Bite-sized, digestible knowledge that fits busy student schedules. Learn anytime, anywhere with our pocket-sized library and dictionary.",
    color: "bg-[var(--gk-blue)]",
  },
  {
    icon: "🔄",
    title: "Subscription Model",
    description: "Continuous learning with regular updates featuring new terminologies, updated examples, and evolving industry standards to keep students ahead.",
    color: "bg-[var(--gk-orange)]",
  },
];

const leitnerBoxes = [
  { box: 1, interval: "Daily Review", progress: 75, color: "bg-red-500" },
  { box: 2, interval: "3 Days", progress: 50, color: "bg-orange-500" },
  { box: 3, interval: "1 Week", progress: 33, color: "bg-yellow-500" },
  { box: 4, interval: "2 Weeks", progress: 25, color: "bg-green-500" },
  { box: 5, interval: "1 Month", progress: 20, color: "bg-blue-500" },
];

const stats = [
  { value: "15+", label: "Academic Disciplines", color: "text-[var(--gk-blue)]" },
  { value: "3x", label: "Faster Retention", color: "text-[var(--gk-green)]" },
  { value: "Bilingual", label: "Language Support", color: "text-[var(--gk-orange)]" },
  { value: "5k+", label: "Students Helped", color: "text-[var(--gk-brown)]" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Microlearning Matters in Academia</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Revolutionary learning approach designed for modern students. Making education accessible, engaging, and practical for every student, including those in rural communities.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-lg">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Leitner Box System Visualization */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h4 className="font-semibold text-slate-800 text-center mb-6">Leitner Box System</h4>
              <div className="space-y-4">
                {leitnerBoxes.map((box, index) => (
                  <motion.div
                    key={box.box}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-8 h-6 ${box.color.replace('bg-', 'bg-')}/10 border-2 ${box.color.replace('bg-', 'border-')}/20 rounded flex items-center justify-center`}>
                      <span className={`text-xs font-semibold ${box.color.replace('bg-', 'text-')}`}>{box.box}</span>
                    </div>
                    <div className="flex-1">
                      <div className={`h-2 ${box.color.replace('bg-', 'bg-')}/20 rounded-full`}>
                        <motion.div 
                          className={`h-full ${box.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${box.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-slate-600">{box.interval}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
