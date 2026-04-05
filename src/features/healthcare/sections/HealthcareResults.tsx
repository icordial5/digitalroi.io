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
          className="relative bg-[#EAF5FB] border-[3px] border-[#2D3748] rounded-[3rem] p-10 md:p-20 text-center overflow-hidden"
        >
          <img 
            src="https://ik.imagekit.io/digitalroipune/digitalroi-fly.webp" 
            alt="Digital ROI Fly" 
            className="absolute top-2 right-2 md:top-4 md:right-4 w-24 md:w-40 object-contain opacity-90"
            referrerPolicy="no-referrer"
          />
          <p className="relative z-10 text-[#1A202C] text-center m-0 p-0 px-[14px] font-bold leading-[1.35]" style={{ fontSize: 'clamp(18px, 4vw, 36px)' }}>
            Most healthcare facilities we work with see a<br />
            <span className="text-gradient-blue font-extrabold">
              30% to 50% jump
            </span>
            {' '}in qualified patient walk-ins within the first<br />
            <span className="text-gradient-blue font-extrabold">
              90 days
            </span>.
          </p>
          <p className="relative z-10 text-[#2D3748] text-center mt-4 p-0 px-[18px] font-normal leading-[1.65]" style={{ fontSize: 'clamp(13px, 2.3vw, 17px)' }}>
            We use <strong className="text-[#002b59] font-semibold">tried-and-tested marketing strategies</strong> built specially for <strong className="text-[#002b59] font-semibold">hospitals and clinics</strong> to bring real results — not just traffic.
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
