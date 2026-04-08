import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-b from-[#E3F0FF] to-[#F8FAFC] pt-32 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-6"
        >
          <span>Home</span>
          <span>/</span>
          <span className="text-blue-600 font-medium">About Us</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight"
        >
          About us
        </motion.h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles className="w-3 h-3" />
            About Us
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-12 max-w-4xl mx-auto"
          >
            <span className="text-blue-600">Digital ROI</span> is a full-funnel performance marketing agency helping brands grow through <span className="text-blue-400">high-quality lead generation,</span> smart automation, and measurable conversions.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            We design ad creatives, lead funnels, WhatsApp & CRM flows, landing pages, and run Google & Meta ads, all backed by advanced tracking. Our systems generate, qualify, and nurture leads to turn interest into real revenue.
          </motion.p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full blur-sm opacity-50 hidden lg:block" />
    </section>
  );
};
