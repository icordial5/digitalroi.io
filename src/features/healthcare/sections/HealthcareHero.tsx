import React from 'react';
import { motion } from 'motion/react';
import { useModal } from '@/context/ModalContext';

const healthcareLogos = [
  "https://ik.imagekit.io/digitalroipune/care-hospitals.png",
  "https://ik.imagekit.io/digitalroipune/Medicover-Hospitals.png",
  "https://ik.imagekit.io/digitalroipune/amaha.png",
  "https://ik.imagekit.io/digitalroipune/tata-1mg.png",
  "https://ik.imagekit.io/digitalroipune/orange-health-lab.png",
  "https://ik.imagekit.io/digitalroipune/truemeds.png",
  "https://ik.imagekit.io/digitalroipune/kaya-clinic.png",
  "https://ik.imagekit.io/digitalroipune/spinalogy.png",
  "https://ik.imagekit.io/digitalroipune/regrow.png",
  "https://ik.imagekit.io/digitalroipune/papillon.png",
  "https://ik.imagekit.io/digitalroipune/proactive.png",
  "https://ik.imagekit.io/digitalroipune/bodywise.png",
  "https://ik.imagekit.io/digitalroipune/betteralt.png"
];

export const HealthcareHero: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="relative pt-40 pb-16 overflow-hidden bg-[#F0F4F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-6 py-2 rounded-full bg-[#111118] text-white/90 font-medium text-sm mb-8 shadow-lg"
        >
          Turn Leads Into Patient Walk-ins
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-[#111118] mb-6 max-w-4xl mx-auto leading-[1.1]"
        >
          Increase Your <span className="text-gradient-blue">OPD</span> Without <br />
          Increasing Ad Spend
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto"
        >
          Convert more enquiries into confirmed appointments with a simple & proven system
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-20"
        >
          <button
            onClick={() => openModal('healthcare')}
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
            <h2 className="text-2xl md:text-4xl font-bold text-[#111118]">Trusted by 30+ Healthcare Facilities</h2>
          </motion.div>
          
          <div className="logo-scroll-section mt-8">
            <div className="logo-row-wrapper">
              <div className="logo-row">
                {[...healthcareLogos, ...healthcareLogos].map((logo, i) => (
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
