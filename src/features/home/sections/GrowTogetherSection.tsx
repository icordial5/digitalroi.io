import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { useModal, FormType } from '@/context/ModalContext';
import { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, suffix = "", prefix = "", duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

interface GrowTogetherSectionProps {
  title?: string;
  stat1Label?: string;
  stat1Value?: number;
  stat1Suffix?: string;
  stat1Prefix?: string;
  stat2Label?: string;
  stat2Value?: number;
  stat2Suffix?: string;
  stat2Prefix?: string;
  formType?: FormType;
}

export const GrowTogetherSection: React.FC<GrowTogetherSectionProps> = ({
  title = "Let's Grow Together.",
  stat1Label = "Clients Served",
  stat1Value = 130,
  stat1Suffix = "+",
  stat1Prefix = "",
  stat2Label = "Ad Spend Managed",
  stat2Value = 500,
  stat2Suffix = "M+",
  stat2Prefix = "₹",
  formType = 'homepage'
}) => {
  const { openModal } = useModal();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative rounded-[3rem] overflow-hidden bg-[#EAF5FB] border-[3px] border-[#2D3748] p-10 md:p-16 lg:p-20 shadow-2xl"
        >
          <img src="https://ik.imagekit.io/digitalroipune/digitalroi-fly.webp" alt="" className="absolute top-0 right-0 md:top-4 md:right-4 w-20 md:w-36 object-contain opacity-90" referrerPolicy="no-referrer" />
          <div className="relative z-10">
            <StaggerContainer>
              <StaggerItem>
                <div className="flex items-center gap-2 mb-12">
                  <Sparkles className="w-6 h-6 text-[#084E96]" />
                  <h2 className="text-3xl md:text-5xl font-bold text-[#1A202C]">{title}</h2>
                </div>
              </StaggerItem>
              
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <StaggerItem className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
                  <div className="bg-white/50 backdrop-blur-sm border border-[#2D3748]/10 rounded-3xl p-8 flex-1 min-w-[240px]">
                    <div className="text-4xl md:text-5xl font-bold text-[#1A202C] mb-2">
                      <Counter value={stat1Value} suffix={stat1Suffix} prefix={stat1Prefix} />
                    </div>
                    <div className="text-lg text-[#2D3748]">{stat1Label}</div>
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm border border-[#2D3748]/10 rounded-3xl p-8 flex-1 min-w-[240px]">
                    <div className="text-4xl md:text-5xl font-bold text-[#1A202C] mb-2">
                      <Counter value={stat2Value} suffix={stat2Suffix} prefix={stat2Prefix} />
                    </div>
                    <div className="text-lg text-[#2D3748]">{stat2Label}</div>
                  </div>
                </StaggerItem>
                
                <StaggerItem className="shrink-0">
                  <button 
                    onClick={() => openModal(formType as any)}
                    className="btn-primary !px-10 !py-4 !text-xl"
                  >
                    Get Your Growth Plan
                  </button>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
