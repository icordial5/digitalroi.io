import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const solarLogos = [
  "https://ik.imagekit.io/digitalroipune/roofsol.png",
  "https://ik.imagekit.io/digitalroipune/livguard.png",
  "https://ik.imagekit.io/digitalroipune/Alligator-Solar.png",
  "https://ik.imagekit.io/digitalroipune/repos-energy.png",
  "https://ik.imagekit.io/digitalroipune/Truzon.png",
  "https://ik.imagekit.io/digitalroipune/forcdyno.png",
  "https://ik.imagekit.io/digitalroipune/beem.png",
  "https://ik.imagekit.io/digitalroipune/nchanda.png",
  "https://ik.imagekit.io/digitalroipune/Enphase.png",
  "https://ik.imagekit.io/digitalroipune/manchanda.png",
];

export const EnergyHero: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-[#F0F4F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-6 py-2 rounded-full bg-[#111118] text-white/90 font-medium text-sm mb-8 shadow-lg"
        >
          Scale Faster with Automation
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-[#111118] mb-6 max-w-5xl mx-auto leading-[1.1]"
        >
          Close more <span className="text-gradient-blue">Solar Deals</span> <br />
          with Performance-Driven <br />
          Marketing
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto"
        >
          Helping Solar brands grow through precision targeting and automation
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-20"
        >
          <button
            onClick={() => openModal('solar')}
            className="btn-primary !px-8 !py-4 !text-lg"
          >
            Get Your Growth Plan
          </button>
        </motion.div>

        <div className="mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <Sparkles className="w-5 h-5 text-[#3B82F6]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#111118]">Trusted by 40+ Solar Brands</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {solarLogos.map((logo, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center border border-slate-100 h-24"
              >
                <img 
                  src={logo} 
                  alt="Solar Brand" 
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-0 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};
