import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const HealthcareResults: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#EAF5FB] border-[3px] border-[#2D3748] rounded-[3rem] p-10 md:p-20 text-center overflow-hidden shadow-2xl"
        >
          <img 
            src="https://ik.imagekit.io/digitalroipune/digitalroi-fly.webp" 
            alt="Digital ROI Fly" 
            className="absolute top-0 right-0 md:top-4 md:right-4 w-20 md:w-36 object-contain opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 text-center m-0 p-0 px-[14px]">
            <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
              <span className="block text-xl md:text-2xl font-semibold text-[#2D3748]">Most healthcare facilities we work with see a</span>
              <span className="block text-5xl md:text-7xl font-extrabold text-gradient-blue leading-none py-2">30% to 50%</span>
              <span className="block text-xl md:text-2xl font-semibold text-[#2D3748] whitespace-normal md:whitespace-nowrap">jump in qualified patient walk-ins within the first</span>
              <span className="block text-4xl md:text-5xl font-extrabold text-gradient-blue">90 days.</span>
            </div>
          </div>
          <p className="relative z-10 text-[#2D3748] text-center mt-8 p-0 px-[18px] font-normal leading-[1.65]" style={{ fontSize: 'clamp(14px, 2.3vw, 18px)' }}>
            We use <strong className="text-[#002b59] font-semibold">tried-and-tested marketing strategies</strong> built specially for <strong className="text-[#002b59] font-semibold">hospitals and clinics</strong> to bring real results - not just traffic.
          </p>
          <div className="relative z-10 mt-10">
            <Link to="/contact" className="btn-primary">
              Let's Talk
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
