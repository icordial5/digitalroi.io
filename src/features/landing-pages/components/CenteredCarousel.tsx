import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  name: string;
  logo: string;
  stats: { value: string; label: string }[];
}

interface CenteredCarouselProps {
  items: CarouselItem[];
}

export const CenteredCarousel: React.FC<CenteredCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  const getPosition = (index: number) => {
    const diff = (index - currentIndex + items.length) % items.length;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(items.length - 1)) return 'right';
    if (diff === items.length - 1 || diff === -1) return 'left';
    return 'hidden';
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-12 overflow-hidden">
      <div className="relative h-[400px] flex items-center justify-center">
        <AnimatePresence initial={false}>
          {items.map((item, index) => {
            const position = getPosition(index);
            if (position === 'hidden') return null;

            return (
              <motion.div
                key={item.name}
                initial={false}
                animate={{
                  x: position === 'center' ? 0 : position === 'right' ? '70%' : '-70%',
                  scale: position === 'center' ? 1 : 0.85,
                  opacity: position === 'center' ? 1 : 0.4,
                  zIndex: position === 'center' ? 20 : 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                className="absolute w-full max-w-[320px] md:max-w-[400px]"
              >
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center text-center h-full min-h-[320px]">
                  <div className="mb-8 h-32 flex items-center justify-center">
                    <img 
                      src={item.logo} 
                      alt={item.name} 
                      className="max-h-full w-auto object-contain scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="space-y-6 w-full">
                    {item.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="flex flex-col items-center">
                        <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 leading-none mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button 
          onClick={() => { prev(); setIsAutoPlaying(false); }}
          className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-lg active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentIndex(i); setIsAutoPlaying(false); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-8 bg-blue-600' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={() => { next(); setIsAutoPlaying(false); }}
          className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-lg active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
