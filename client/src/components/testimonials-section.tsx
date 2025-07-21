import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Engineering Student, IIIT Delhi",
    avatar: "PS",
    rating: 5,
    text: "The bilingual cards helped me understand complex engineering concepts easily. The regional language explanations made all the difference for a student from rural Haryana.",
    color: "bg-[var(--gk-blue)]",
  },
  {
    name: "Arjun Patel",
    role: "Medical Student, Government College",
    avatar: "AP",
    rating: 5,
    text: "Perfect for busy medical students. The microlearning approach fits my schedule perfectly - I can study between classes and during commute.",
    color: "bg-[var(--gk-green)]",
  },
  {
    name: "Kavya Reddy",
    role: "Commerce Student, Rural College",
    avatar: "KR",
    rating: 5,
    text: "As a commerce student from a small town, these flashcards bridged the gap between English textbooks and my understanding. Game-changer for rural students!",
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
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Student Success Stories</h2>
          <p className="text-xl text-slate-600">
            Join thousands of students who've transformed their academic journey with our flashcards.
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
