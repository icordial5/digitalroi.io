import React from 'react';
import { motion } from 'motion/react';
import { useModal } from '@/context/ModalContext';

interface CTASectionProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  buttonText?: string;
  formType?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText = "Let's Talk",
  formType = "homepage"
}) => {
  const { openModal } = useModal();

  const defaultTitle = (
    <>
      Most brands we work with see a<br />
      <span className="text-gradient-blue font-extrabold">
        30% to 50% jump
      </span>
      {' '}in conversions within the first<br />
      <span className="text-gradient-blue font-extrabold">
        90 days
      </span>.
    </>
  );

  const defaultDescription = (
    <>
      We use <strong className="text-[#002b59] font-semibold">tried-and-tested marketing strategies</strong> built specially for <strong className="text-[#002b59] font-semibold">lead gen campaigns</strong> to bring real results - not just traffic.
    </>
  );

  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative bg-[#EAF5FB] border-[3px] border-[#2D3748] rounded-[3rem] p-8 md:p-14 text-center overflow-hidden shadow-2xl"
        >
          <img 
            src="https://ik.imagekit.io/digitalroipune/digitalroi-fly.webp" 
            alt="Digital ROI Fly" 
            className="absolute top-0 right-0 md:top-4 md:right-4 w-20 md:w-36 object-contain opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 text-[#1A202C] text-center m-0 p-0 px-[14px]">
            {title || (
              <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
                <span className="block text-xl md:text-2xl font-semibold text-[#2D3748]">Most brands we work with see a</span>
                <span className="block text-5xl md:text-7xl font-extrabold text-gradient-blue leading-none py-2">30% to 50%</span>
                <span className="block text-xl md:text-2xl font-semibold text-[#2D3748] whitespace-normal md:whitespace-nowrap">jump in conversions within the first</span>
                <span className="block text-4xl md:text-5xl font-extrabold text-gradient-blue">90 days.</span>
              </div>
            )}
          </div>
          <div className="relative z-10 text-[#2D3748] text-center mt-8 p-0 px-[18px] font-normal leading-[1.65]" style={{ fontSize: 'clamp(14px, 2.3vw, 18px)' }}>
            {description || (
              <>
                We use <strong className="text-[#002b59] font-semibold">tried-and-tested marketing strategies</strong> built specially for <strong className="text-[#002b59] font-semibold">lead gen campaigns</strong> to bring real results - not just traffic.
              </>
            )}
          </div>
          <div className="relative z-10 mt-10">
            <button 
              onClick={() => openModal(formType as any)}
              className="btn-primary"
            >
              {buttonText}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
