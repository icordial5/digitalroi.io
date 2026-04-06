import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const EnergyResults: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center justify-center gap-2 md:gap-3 mb-8">
            <span className="block text-xl md:text-2xl font-semibold text-[#2D3748]">Most Solar brands we work with see a</span>
            <span className="block text-5xl md:text-7xl font-extrabold text-gradient-blue leading-none py-2">30% to 50%</span>
            <span className="block text-xl md:text-2xl font-semibold text-[#2D3748] whitespace-normal md:whitespace-nowrap">jump in site visits within the first</span>
            <span className="block text-4xl md:text-5xl font-extrabold text-gradient-blue">90 days.</span>
          </div>
          
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            We use tried-and-tested marketing strategies built specially for Solar brands to bring real results - not just traffic.
          </p>
          
          <Link
            to="/contact"
            className="btn-primary !px-10 !py-4 !text-xl"
          >
            Let's Talk
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
