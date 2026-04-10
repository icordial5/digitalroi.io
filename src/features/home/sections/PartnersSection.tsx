import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  return (
    <section className="py-8 bg-[#F8FBFF] relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
        <img src="https://ik.imagekit.io/digitalroipune/hero-bg-shape.png" alt="" className="w-[400px] rotate-180" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          <Sparkles className="w-5 h-5 text-[#084E96]" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A202C]">Official Partners with</h2>
        </motion.div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }} 
            className="w-48 md:w-64"
          >
            <img src="https://ik.imagekit.io/digitalroipune/PremierPartner-CMYK.svg" alt="Google Partner" className="w-full h-auto drop-shadow-sm" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }} 
            className="w-40 md:w-56"
          >
            <img src="https://ik.imagekit.io/digitalroipune/MBP-Badge-Dark-backgrounds@2x.png" alt="Meta Partner" className="w-full h-auto drop-shadow-sm" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }} 
            className="w-32 md:w-48"
          >
            <img src="https://ik.imagekit.io/digitalroipune/Group-1.png?updatedAt=1775149651857" alt="WhatsApp Partner" className="w-full h-auto drop-shadow-sm" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
