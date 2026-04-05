import React from 'react';
import { motion } from 'motion/react';
import { useModal } from '@/context/ModalContext';

const jewelleryLogos = [
  "https://ik.imagekit.io/digitalroipune/daughter-earth.png",
  "https://ik.imagekit.io/digitalroipune/darveys.png",
  "https://ik.imagekit.io/digitalroipune/evermore.png",
  "https://ik.imagekit.io/digitalroipune/lajoya.png",
  "https://ik.imagekit.io/digitalroipune/pmj.png",
  "https://ik.imagekit.io/digitalroipune/Sri-Krishna-Jewellers.png",
  "https://ik.imagekit.io/digitalroipune/all-things-baby.png"
];

export const JewelleryHero: React.FC = () => {
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
          Get More <span className="text-gradient-blue">Jewellery Store</span> <br />
          Walk-Ins with Performance <br />
          Marketing
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto"
        >
          Helping jewellery brands bring nearby, high-intent buyers to the showroom with smart targeting and automation
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-20"
        >
          <button
            onClick={() => openModal('jewellery')}
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
            className="flex items-center justify-center gap-2 mb-12"
          >
            <span className="text-[#3B82F6] text-2xl">✦</span>
            <h2 className="text-2xl md:text-4xl font-bold text-[#111118]">Trusted by 10+ Jewellery & Luxury Brands</h2>
          </motion.div>
          
          <div className="logo-scroll-section mt-8">
            <div className="logo-row-wrapper">
              <div className="logo-row">
                {[...jewelleryLogos, ...jewelleryLogos].map((logo, i) => (
                  <div key={i} className="logo-item">
                    <img src={logo} alt="" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            </div>
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
