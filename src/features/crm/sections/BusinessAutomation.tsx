import React from 'react';
import { motion } from 'motion/react';

export const BusinessAutomation: React.FC = () => {
  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-full mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-[#111118] p-8 md:p-12 lg:p-16 rounded-r-[24px] lg:rounded-r-[48px] text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.2] mb-5 text-white">
              Automation for your entire business
            </h2>

            <p className="text-lg mb-9 opacity-90">
              Boost your business with automation that helps you:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                "Follow-up faster",
                "Make more money",
                "Reduce repetitive, manual tasks",
                "Grow your business faster"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 text-base md:text-lg">
                  <span className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0 shadow-lg shadow-blue-600/20">
                    ✓
                  </span>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 px-6 md:px-12 lg:px-0 lg:pr-16 py-8"
        >
          <h3 className="text-2xl md:text-[28px] font-bold mb-8 text-[#222] leading-tight">
            On average, brands working with <br className="hidden md:block" />
            <span className="text-blue-600">Digital ROI</span> report:
          </h3>

          <div className="space-y-6">
            {/* Stat 1 */}
            <div className="bg-white rounded-[18px] p-6 md:p-7 flex gap-5 items-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-50">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 text-xl flex items-center justify-center shrink-0 font-bold">
                $
              </div>
              <div className="flex-1">
                <strong className="text-[32px] md:text-[38px] block leading-none mb-1 text-[#111]">39%</strong>
                <p className="text-sm md:text-base text-[#555] m-0">increase in revenue, creating faster business growth</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-[18px] p-6 md:p-7 flex gap-5 items-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-50">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 text-2xl flex items-center justify-center shrink-0 font-bold">
                +
              </div>
              <div className="flex-1">
                <strong className="text-[32px] md:text-[38px] block leading-none mb-1 text-[#111]">53%</strong>
                <p className="text-sm md:text-base text-[#555] m-0">more leads, creating confidence in future sales</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-[18px] p-6 md:p-7 flex gap-5 items-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-50">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 text-2xl flex items-center justify-center shrink-0">
                ⏱
              </div>
              <div className="flex-1">
                <strong className="text-[32px] md:text-[38px] block leading-none mb-1 text-[#111]">10h</strong>
                <p className="text-sm md:text-base text-[#555] m-0">per week saved through automation</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
