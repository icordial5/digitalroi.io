import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';

interface Metric {
  label: string;
  value: string;
}

interface CaseStudy {
  id: number;
  logo: string;
  heading: string;
  subtext: string;
  metrics: Metric[];
  industry?: 'energy' | 'healthcare' | 'education' | 'luxury' | 'other';
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    logo: "https://ik.imagekit.io/digitalroipune/tata-1mg.png",
    heading: "India's leading online pharmacy & healthcare platform.",
    subtext: "Performance campaigns to scale high-intent medicine and diagnostics orders across India.",
    metrics: [
      { value: "38%", label: "increase in lead volume" },
      { value: "37%", label: "decrease in CPL" }
    ],
    industry: 'healthcare'
  },
  {
    id: 2,
    logo: "https://ik.imagekit.io/digitalroipune/truemade.png",
    heading: "Affordable online pharmacy for quality medicines.",
    subtext: "Helped Truemeds reach new price-sensitive audiences while keeping acquisition costs under control.",
    metrics: [
      { value: "10×", label: "scale in lead volume (first 3 months)" },
      { value: "30%", label: "CAC reduction in 2 months" }
    ],
    industry: 'healthcare'
  },
  {
    id: 3,
    logo: "https://ik.imagekit.io/digitalroipune/amaha.png",
    heading: "Largest provider of personalised mental health care.",
    subtext: "Built always-on funnels for therapy, psychiatry and wellness programs across digital channels.",
    metrics: [
      { value: "58%", label: "increase in new client acquisition" },
      { value: "30%", label: "reduction in CAC" },
      { value: "50%", label: "improvement in ROAS" }
    ],
    industry: 'healthcare'
  },
  {
    id: 4,
    logo: "https://ik.imagekit.io/digitalroipune/care-hospital-logo.png",
    heading: "Leading multispecialty hospital network in India.",
    subtext: "Integrated campaigns across specialties to grow high-value procedures and OPD bookings.",
    metrics: [
      { value: "20%", label: "increase in overall revenue" },
      { value: "30%", label: "increase in patient enquiries" },
      { value: "80%", label: "increase in SI share" }
    ],
    industry: 'healthcare'
  },
  {
    id: 5,
    logo: "https://ik.imagekit.io/digitalroipune/solar-square.png",
    heading: "India's #1 home solar provider.",
    subtext: "Performance + brand campaigns to capture high-intent homeowners for rooftop solar.",
    metrics: [
      { value: "5×", label: "scale in lead volume" },
      { value: "60%", label: "improvement in lead accuracy" },
      { value: "24×", label: "scale in ad spends" }
    ],
    industry: 'energy'
  },
  {
    id: 6,
    logo: "https://ik.imagekit.io/digitalroipune/repos-energy.png",
    heading: "India's mobile energy platform.",
    subtext: "Helped Repos acquire fuel-station partners and enterprise customers at scale.",
    metrics: [
      { value: "4×", label: "revenue growth" },
      { value: "6×", label: "improvement in qualified leads" }
    ],
    industry: 'energy'
  },
  {
    id: 7,
    logo: "https://ik.imagekit.io/digitalroipune/Sri-Krishna-Jewellers.png",
    heading: "The art of fine jewellery.",
    subtext: "Store-first strategy to drive high-value walk-ins for bridal and diamond collections.",
    metrics: [
      { value: "30%", label: "increase in store walk-ins" },
      { value: "2.5×", label: "increase in lead volume" },
      { value: "2.5×", label: "increase in ad spends" }
    ],
    industry: 'luxury'
  },
  {
    id: 8,
    logo: "https://ik.imagekit.io/digitalroipune/jemkon.png",
    heading: "India's trusted epoxy flooring manufacturer.",
    subtext: "B2B lead engine focused on plant heads, architects and project consultants.",
    metrics: [
      { value: "40%", label: "improvement in qualified leads" },
      { value: "2.5×", label: "increase in lead volume" },
      { value: "1.5×", label: "increase in spends" }
    ],
    industry: 'other'
  },
  {
    id: 9,
    logo: "https://ik.imagekit.io/digitalroipune/mentorbeep.png",
    heading: "Bridging education and employment.",
    subtext: "Full-funnel performance setup to acquire students and place them into partner companies.",
    metrics: [
      { value: "2.5×", label: "revenue scaled" },
      { value: "3×", label: "increase in ROAS" },
      { value: "33%", label: "decrease in CPL" }
    ],
    industry: 'education'
  },
  {
    id: 10,
    logo: "https://ik.imagekit.io/digitalroipune/roofsol.png",
    heading: "Residential Solar Installer Scale-up.",
    subtext: "How we helped a regional solar brand scale their lead generation while reducing CPL by 40%.",
    metrics: [
      { value: "300%", label: "Growth in lead volume" },
      { value: "40%", label: "Reduction in CPL" }
    ],
    industry: 'energy'
  },
  {
    id: 11,
    logo: "https://ik.imagekit.io/digitalroipune/Alligator-Solar.png",
    heading: "B2B Solar Lead Gen for Commercial Projects.",
    subtext: "Targeting decision-makers in manufacturing and warehousing to drive high-ticket commercial solar deals.",
    metrics: [
      { value: "50+", label: "Qualified Enquiries/Mo" },
      { value: "2.5×", label: "Increase in Pipeline" }
    ],
    industry: 'energy'
  }
];

interface CaseStudyCarouselProps {
  title?: string;
  industry?: 'energy' | 'healthcare' | 'education' | 'luxury' | 'other';
  ids?: number[];
}

export const CaseStudyCarousel: React.FC<CaseStudyCarouselProps> = ({ 
  title = "Growth of Our Client Is Our Motivation",
  industry,
  ids
}) => {
  const filteredCaseStudies = ids
    ? ids.map(id => caseStudies.find(study => study.id === id)).filter((study): study is CaseStudy => study !== undefined)
    : industry 
      ? caseStudies.filter(study => study.industry === industry)
      : caseStudies;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredCaseStudies.length);
  }, [filteredCaseStudies.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredCaseStudies.length) % filteredCaseStudies.length);
  }, [filteredCaseStudies.length]);

  useEffect(() => {
    if (!isPaused && filteredCaseStudies.length > 1) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused, filteredCaseStudies.length]);

  const getSlidePosition = (index: number) => {
    const n = filteredCaseStudies.length;
    if (n === 1) return 'center';
    const diff = (index - currentIndex + n) % n;

    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === n - 1) return 'left';
    if (diff === 2) return 'hidden-right';
    if (diff === n - 2) return 'hidden-left';
    return 'hidden';
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how we've helped industry leaders scale their growth and optimize their marketing ROI.
          </p>
        </div>

        <div 
          className="relative max-w-[1180px] mx-auto min-h-[450px] md:min-h-[430px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background Glow Removed for performance */}

          {/* Navigation Arrows */}
          {filteredCaseStudies.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-900 hover:scale-110 active:scale-95 transition-all duration-200 border border-slate-100"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-900 hover:scale-110 active:scale-95 transition-all duration-200 border border-slate-100"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="relative w-full h-full pt-4 pb-3">
            {filteredCaseStudies.map((study, index) => {
              const position = getSlidePosition(index);
              
              return (
                <motion.div
                  key={study.id}
                  initial={false}
                  animate={{
                    x: position === 'center' ? '-50%' : 
                       position === 'left' ? '-84%' : 
                       position === 'right' ? '-16%' : 
                       position === 'hidden-left' ? '-120%' : 
                       position === 'hidden-right' ? '20%' : '20%',
                    scale: position === 'center' ? 1.02 : 
                           position === 'left' || position === 'right' ? 0.9 : 0.8,
                    opacity: position === 'center' ? 1 : 
                             position === 'left' || position === 'right' ? 0.45 : 0,
                    zIndex: position === 'center' ? 10 : 
                            position === 'left' || position === 'right' ? 5 : 0,
                    filter: position === 'center' ? 'none' : 'grayscale(100%)',
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  style={{ willChange: "transform, opacity" }}
                  className={cn(
                    "absolute top-0 left-1/2 w-[92%] md:w-[74%] max-w-[960px] pointer-events-none",
                    position === 'center' && "pointer-events-auto"
                  )}
                >
                  <div 
                    className="w-full bg-white rounded-[24px] md:rounded-[36px] p-6 md:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.15)] border border-slate-100 grid md:grid-cols-[1.5fr_1.1fr] gap-6 md:gap-8 overflow-hidden"
                  >
                    <div className="flex flex-col gap-4 md:gap-5">
                      <div className="flex items-center gap-3">
                        <div className="bg-slate-50 p-3 rounded-2xl inline-flex border border-slate-100">
                          <img 
                            src={study.logo} 
                            alt={`${study.heading} logo`}
                            className="h-12 md:h-16 w-auto object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl md:text-3xl font-bold text-slate-900 leading-tight">
                          {study.heading}
                        </h3>
                        <p className="text-sm md:text-base text-slate-600 mt-2 leading-relaxed">
                          {study.subtext}
                        </p>
                      </div>
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-2" />
                    </div>

                    <div className="flex flex-col justify-center gap-3">
                      {study.metrics.map((metric, mIdx) => (
                        <div 
                          key={mIdx}
                          className="flex items-center gap-3 p-3 md:p-4 rounded-full bg-white border border-slate-100 shadow-[0_10px_26px_rgba(15,23,42,0.06)]"
                        >
                          <div className="flex-1 min-w-0 text-xs md:text-sm leading-tight text-slate-800">
                            <strong className="text-sm md:text-base font-extrabold mr-1">{metric.value}</strong>
                            {metric.label}
                          </div>
                          
                          {/* Wave */}
                          <div className="hidden sm:block w-10 h-2 rounded-full bg-slate-200/50 relative overflow-hidden shrink-0">
                          </div>

                          {/* Animated Growth Bars */}
                          <div className="flex items-end gap-1 h-3 shrink-0">
                            {[0, 1, 2].map((bar) => (
                              <div
                                key={bar}
                                className="w-[3px] rounded-full bg-slate-300"
                                style={{ height: `${30 + bar * 30}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
