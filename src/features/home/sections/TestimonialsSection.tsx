import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const testimonials = [
  {
    name: "Sourav Patwari",
    role: "VP - Growth & Marketing",
    company: "Truemeds",
    thumbnail: "https://ik.imagekit.io/digitalroipune/WhatsApp-Image-2025-11-18-at-11.42.36-AM-1.jpeg",
    videoUrl: "https://www.youtube.com/embed/_Wg5jF_VTMc?autoplay=1"
  },
  {
    name: "Pritish Mahadik",
    role: "Growth Marketing Lead",
    company: "Amaha",
    thumbnail: "https://ik.imagekit.io/digitalroipune/WhatsApp-Image-2025-11-18-at-11.42.36-AM-2.jpeg",
    videoUrl: "https://www.youtube.com/embed/M-mVqffx5nk?autoplay=1"
  },
  {
    name: "Jill Bhanushali",
    role: "VP - Chief Admin Officer",
    company: "Regrow Biosciences",
    thumbnail: "https://ik.imagekit.io/digitalroipune/WhatsApp-Image-2025-11-18-at-11.42.36-AM.jpeg?updatedAt=1775149652369",
    videoUrl: "https://www.youtube.com/embed/A8YYjMf1uFQ?autoplay=1" 
  }
];

interface TestimonialsSectionProps {
  onPlayVideo: (url: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onPlayVideo }) => {
  return (
    <section className="py-12 bg-[#DDEDF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A202C]">
            What Our <span className="text-[#084E96]">Clients</span> <span className="text-[#84A9DE]">Say</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-video" onClick={() => onPlayVideo(testimonial.videoUrl)}>
                <img src={testimonial.thumbnail} alt={testimonial.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-blue-500/30 flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <div className="w-12 h-12 rounded-full bg-[#D53F8C] flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6 mb-4">
                <h3 className="text-lg font-medium text-slate-900">{testimonial.name}</h3>
                <p className="font-bold text-slate-900">{testimonial.role}</p>
                <p className="text-slate-600">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
