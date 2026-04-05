import React from 'react';
import { motion } from 'motion/react';

export const HealthcareComparison: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#111118] leading-tight">
            Most agencies generate <span className="text-gradient-blue">leads.</span> <br />
            Digital ROI turns them into patient <span className="text-gradient-blue">walk-ins.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
