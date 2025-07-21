import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "ML Engineer",
    avatar: "SJ",
    rating: 5,
    text: "The Leitner method combined with these AI flashcards completely transformed my learning. I mastered complex concepts in weeks, not months.",
    color: "bg-[var(--gk-blue)]",
  },
  {
    name: "Marcus Chen",
    role: "Data Scientist",
    avatar: "MC",
    rating: 5,
    text: "Perfect for busy professionals. The spaced repetition keeps everything fresh in my memory while I juggle work and learning.",
    color: "bg-[var(--gk-green)]",
  },
  {
    name: "Emma Parker",
    role: "CS Student",
    avatar: "EP",
    rating: 5,
    text: "As a computer science student, these cards gave me a huge advantage. The progression from basics to advanced topics is perfect.",
    color: "bg-[var(--gk-orange)]",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">What Learners Say</h2>
          <p className="text-xl text-slate-600">
            Join thousands of AI enthusiasts who've accelerated their learning journey.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 rounded-2xl p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-slate-600 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${testimonial.color} rounded-full flex items-center justify-center`}>
                  <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
