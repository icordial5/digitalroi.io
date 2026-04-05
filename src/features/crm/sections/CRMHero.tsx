import React from 'react';
import { motion } from 'motion/react';
import { CRMQuiz } from './CRMQuiz';

const crmLogos = [
  { name: 'Zoho', url: 'https://ik.imagekit.io/digitalroipune/zoho.png' },
  { name: 'HubSpot', url: 'https://ik.imagekit.io/digitalroipune/hubspot.png' },
  { name: 'LeadSquared', url: 'https://ik.imagekit.io/digitalroipune/leadsquared.png' },
  { name: 'Merito', url: 'https://ik.imagekit.io/digitalroipune/merito.png' },
  { name: 'Freshworks', url: 'https://ik.imagekit.io/digitalroipune/freshworks.png' },
  { name: 'Solar Ladder', url: 'https://ik.imagekit.io/digitalroipune/solar-ladder.png' },
];

export const CRMHero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-[#F8FAFC]">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
                Bought a <span className="text-blue-600">CRM?</span><br />
                We Make Sure You Actually <span className="text-blue-600">Use</span> It.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Improve <span className="font-bold text-blue-900">Sales Process</span> by 30%+ with Automated CRM Workflows and Reporting
              </p>
              
              <button 
                onClick={() => document.getElementById('crm-quiz-container')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 bg-gradient-to-r from-slate-900 to-blue-600 text-white rounded-full font-bold text-lg hover:translate-y-[-2px] transition-all shadow-xl shadow-blue-100"
              >
                Get My Automation Blueprint
              </button>
            </motion.div>
          </div>

          {/* Right Content - Quiz in Laptop Frame */}
          <div className="w-full lg:w-1/2" id="crm-quiz-container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Laptop Frame */}
              <div className="relative bg-[#1a1a1a] rounded-t-[2rem] p-3 shadow-2xl">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rounded-full" />
                <div className="bg-white rounded-xl overflow-hidden min-h-[500px]">
                  <CRMQuiz />
                </div>
              </div>
              <div className="h-4 bg-gradient-to-b from-slate-800 to-slate-900 rounded-b-[2rem] shadow-xl" />
              <div className="w-[80%] h-2 bg-slate-900/10 mx-auto blur-md mt-2" />
            </motion.div>
          </div>
        </div>

        {/* CRM's we work with */}
        <div className="mt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="w-4 h-4 bg-blue-600 rotate-45" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">CRM's we work with</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {crmLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center hover:shadow-md transition-all group"
              >
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="max-h-10 w-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
