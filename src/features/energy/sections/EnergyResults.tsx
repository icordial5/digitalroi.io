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
          <h2 className="text-3xl md:text-5xl font-bold text-[#111118] mb-8 leading-tight">
            Most Solar brands we work with see a <span className="text-gradient-blue">30% to 50% jump</span> in site visits within the first 90 days.
          </h2>
          
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            We use tried-and-tested marketing strategies built specially for Solar brands to bring real results — not just traffic.
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
