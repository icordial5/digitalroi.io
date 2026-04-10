import React from 'react';
import { motion } from 'motion/react';
import { Target, Sparkles, LayoutTemplate, MessageCircle, Database, BarChart3, ArrowRight, TrendingUp } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { useModal } from '@/context/ModalContext';

const services = [
  {
    icon: Target,
    title: "Targeted Ads",
    description: "Data-driven campaigns on Meta, Google, and LinkedIn to reach high-intent buyers.",
    gradient: "from-blue-500 to-cyan-400",
    delay: 0
  },
  {
    icon: Sparkles,
    title: "Engaging Content",
    description: "Compelling ad copy and creatives that capture attention and drive action.",
    gradient: "from-purple-500 to-pink-400",
    delay: 0.2
  },
  {
    icon: LayoutTemplate,
    title: "Optimized Landing Pages",
    description: "High-converting funnels designed to turn clicks into qualified leads.",
    gradient: "from-emerald-500 to-teal-400",
    delay: 0.4
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description: "Instant follow-ups and automated nurturing to keep leads engaged 24/7.",
    gradient: "from-green-500 to-emerald-400",
    delay: 0.1
  },
  {
    icon: Database,
    title: "CRM Systems",
    description: "Seamless lead routing and pipeline management to close deals faster.",
    gradient: "from-orange-500 to-amber-400",
    delay: 0.3
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Real-time tracking and attribution to measure ROI and scale winners.",
    gradient: "from-indigo-500 to-blue-400",
    delay: 0.5
  }
];

export const HowWeGrowSection: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Dynamic Background Elements - Line Wave */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[200%] h-full flex items-center opacity-[0.03]"
        >
          <svg className="w-full h-full" viewBox="0 0 2000 1000" preserveAspectRatio="none" fill="none" stroke="#2563EB" strokeWidth="2">
            <path d="M0,500 C250,300 500,700 750,500 C1000,300 1250,700 1500,500 C1750,300 2000,700 2000,500" />
            <path d="M0,600 C250,400 500,800 750,600 C1000,400 1250,800 1500,600 C1750,400 2000,800 2000,600" />
            <path d="M0,400 C250,200 500,600 750,400 C1000,200 1250,600 1500,400 C1750,200 2000,600 2000,400" />
          </svg>
          <svg className="w-full h-full" viewBox="0 0 2000 1000" preserveAspectRatio="none" fill="none" stroke="#2563EB" strokeWidth="2">
            <path d="M0,500 C250,300 500,700 750,500 C1000,300 1250,700 1500,500 C1750,300 2000,700 2000,500" />
            <path d="M0,600 C250,400 500,800 750,600 C1000,400 1250,800 1500,600 C1750,400 2000,800 2000,600" />
            <path d="M0,400 C250,200 500,600 750,400 C1000,200 1250,600 1500,400 C1750,200 2000,600 2000,400" />
          </svg>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Our Growth Engine
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-[#111118] mb-8 tracking-tight leading-tight"
          >
            How We Grow Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#084E96] to-[#2563EB]">Business</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Designed to capture, nurture, and convert both leads and buyers into real revenue.
          </motion.p>

          {/* Floating Badges */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex absolute top-10 -left-10 items-center gap-3 bg-white border border-slate-100 px-6 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="text-left">
              <div className="text-[#111118] font-bold text-lg">+45%</div>
              <div className="text-emerald-600 text-xs font-semibold uppercase tracking-wider">Avg. Growth</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden lg:flex absolute bottom-0 -right-4 items-center gap-3 bg-white border border-slate-100 px-6 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-left">
              <div className="text-[#111118] font-bold text-lg">-30%</div>
              <div className="text-blue-600 text-xs font-semibold uppercase tracking-wider">Cost Per Lead</div>
            </div>
          </motion.div>
        </div>

        {/* Floating Cards Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: service.delay 
                }}
                className="group relative h-full"
              >
                {/* Hover Glow Effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-[2rem] blur-xl -z-10`}
                />
                
                <div className="relative h-full bg-white hover:bg-slate-50 border border-slate-100 hover:border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.08)] rounded-[2rem] p-8 transition-all duration-500 flex flex-col overflow-hidden">
                  {/* Top Gradient Line */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} opacity-50`} />
                  
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px] mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-slate-800" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#111118] mb-4 tracking-wide group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed flex-grow font-medium">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative z-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 blur-3xl -z-10 rounded-full opacity-50" />
            <button
              onClick={() => openModal('lead_gen')}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#111118] text-white rounded-full font-black text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Get a Free Audit</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                <ArrowRight className="w-4 h-4 text-white group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </button>
        </motion.div>
      </div>
    </section>
  );
};
