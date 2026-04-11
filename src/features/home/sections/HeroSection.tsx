import React from 'react';
import { motion } from 'motion/react';
import { useModal } from '@/context/ModalContext';
import { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export const HeroSection: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section 
      className="relative pt-48 pb-4 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, transparent 63.39%, #ffffff 82%), linear-gradient(107deg, rgba(8, 78, 150, 0.1) 0%, rgba(8, 78, 150, 0.2) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <StaggerContainer>
          <StaggerItem>
            <motion.div 
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#111118] text-white/90 font-medium text-sm mb-8 shadow-[0_0_20px_rgba(17,17,24,0.3)]"
            >
              Scale Faster with Automation
            </motion.div>
          </StaggerItem>
          
          <StaggerItem>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight text-[#111118] mb-6 max-w-4xl mx-auto leading-[1.1]"
            >
              Get More Qualified <br className="hidden md:block" />
              <span className="text-gradient-blue">Leads that Convert</span>
            </motion.h1>
          </StaggerItem>
          
          <StaggerItem>
            <motion.p 
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Helping lead generation brands grow through precision targeting and automation.
            </motion.p>
          </StaggerItem>
          
          <StaggerItem>
            <motion.div 
              className="flex justify-center mb-4"
            >
              <button
                onClick={() => openModal('homepage')}
                className="btn-primary"
              >
                Get Your Growth Plan
              </button>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
