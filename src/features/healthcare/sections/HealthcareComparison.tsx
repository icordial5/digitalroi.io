import React from 'react';
import { motion } from 'motion/react';

export const HealthcareComparison: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full max-w-6xl mx-auto bg-white rounded-[3rem] border-[3px] border-[#2D3748] p-6 md:p-12 lg:p-16 text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
        >
          <h2 className="text-sm md:text-4xl lg:text-5xl font-bold text-[#1A202C] leading-[1.05] tracking-tight">
            <span className="block">Most agencies generate <span className="text-gradient-blue font-extrabold">leads.</span></span>
            <span className="block mt-1 whitespace-nowrap">Digital ROI turns them into patient <span className="text-gradient-blue font-extrabold">walk-ins.</span></span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
