import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: 1,
    tag: "Step 01",
    name: "Patient Acquisition",
    desc: "Capture enquiries from ads, website forms & WhatsApp"
  },
  {
    num: 2,
    tag: "Step 02",
    name: "Lead Qualification",
    desc: "Auto-score leads by treatment type, urgency & location"
  },
  {
    num: 3,
    tag: "Step 03",
    name: "Instant Follow-up",
    desc: "Respond in seconds - not hours",
    badges: [
      { text: "✓ WhatsApp", type: "wa" },
      { text: "CRM", type: "crm" }
    ]
  },
  {
    num: 4,
    tag: "Step 04",
    name: "Conversion to OPD",
    desc: "Nurture leads to confirmed hospital appointments"
  },
  {
    num: 5,
    tag: "Step 05",
    name: "Revenue Tracking",
    desc: "See which leads became patients & what revenue they earned"
  }
];

const metrics = [
  {
    num: "3×",
    label: "More OPD conversions from the same number of enquiries",
    gradient: "linear-gradient(135deg, #0f1f5c 0%, #1e4db7 100%)"
  },
  {
    num: "< 1 min",
    label: "Average follow-up time via WhatsApp automation",
    gradient: "linear-gradient(135deg, #1a327a 0%, #2b65d9 100%)"
  },
  {
    num: "100%",
    label: "Leads tracked - zero manual entries, zero lost patients",
    gradient: "linear-gradient(135deg, #212529 0%, #2391f5 100%)"
  }
];

export const HealthcareSolution: React.FC = () => {
  return (
    <section className="pre-section w-full py-[clamp(60px,8vw,100px)] px-[clamp(20px,4vw,40px)] relative overflow-hidden bg-white">
      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(circle, rgba(30,77,183,0.07) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="pre-inner max-w-[1160px] mx-auto relative z-10">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-[clamp(48px,7vw,80px)]"
        >
          <div className="inline-flex items-center gap-2 bg-[rgba(30,77,183,0.1)] border border-[rgba(30,77,183,0.2)] text-[#1e4db7] text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-[#f5a623] rounded-full animate-pulse" />
            Digital ROI Solution
          </div>
          <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold text-[#0f1f5c] leading-[1.15] mb-4 tracking-tight">
            The Patient <span className="text-[#1e4db7] relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-[#f5a623] after:to-[#e8971a] after:rounded-[2px]">Revenue Engine</span>
          </h2>
          <p className="text-[clamp(15px,1.8vw,18px)] text-[#4a5a8a] max-w-[560px] mx-auto leading-[1.65]">
            A simple system designed to turn enquiries into real patients - tracked, followed up, and converted automatically.
          </p>
        </motion.header>

        {/* 5-Step Pipeline */}
        <div className="pre-pipeline grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 items-start mb-14 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[31px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#c3d0f0] via-[#1e4db7] to-[#c3d0f0] z-0" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="pre-step flex flex-col items-center text-center px-2.5 pb-8 relative z-10 group"
            >
              <div className={`w-[62px] h-[62px] rounded-full flex items-center justify-center text-[21px] font-extrabold mb-[18px] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.08] shrink-0 ${
                index === 0 ? 'bg-[#0f1f5c] text-white shadow-[0_4px_18px_rgba(15,31,92,0.35)]' :
                index === 1 ? 'bg-[#1a327a] text-white shadow-[0_4px_18px_rgba(26,50,122,0.35)]' :
                index === 2 ? 'bg-[#1e4db7] text-white shadow-[0_4px_18px_rgba(30,77,183,0.35)]' :
                index === 3 ? 'bg-[#2b65d9] text-white shadow-[0_4px_18px_rgba(43,101,217,0.35)]' :
                'bg-gradient-to-br from-[#212529] to-[#2391f5] text-white'
              }`}>
                {step.num}
              </div>
              <span className="inline-block text-[10px] font-bold tracking-[0.1em] uppercase text-[#8a9cc8] mb-1.5">
                {step.tag}
              </span>
              <h3 className="text-[clamp(13px,1.3vw,15px)] font-bold text-[#0f1f5c] leading-[1.3] mb-1.5">
                {step.name}
              </h3>
              <p className="text-[12px] text-[#6070a0] leading-[1.55]">
                {step.desc}
              </p>
              {step.badges && (
                <div className="flex gap-1 justify-center mt-2 flex-wrap">
                  {step.badges.map((badge, bIndex) => (
                    <span key={bIndex} className={`inline-flex items-center gap-0.5 text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${
                      badge.type === 'wa' ? 'bg-[rgba(37,211,102,0.1)] text-[#128C7E] border border-[rgba(37,211,102,0.25)]' :
                      'bg-[rgba(30,77,183,0.1)] text-[#1e4db7] border border-[rgba(30,77,183,0.2)]'
                    }`}>
                      {badge.text}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.21 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[20px] p-7 px-6 text-white relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,31,92,0.3)] group"
              style={{ background: metric.gradient }}
            >
              <div className="absolute -top-[30px] -right-[30px] w-[100px] h-[100px] bg-white/5 rounded-full pointer-events-none" />
              <div className="text-[clamp(32px,4vw,44px)] font-black tracking-tight leading-none mb-1.5">
                {metric.num}
              </div>
              <div className="text-base opacity-85 leading-[1.45] font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.53, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-br from-[#0f1f5c] via-[#1e4db7] to-[#2b65d9] rounded-[24px] p-[clamp(28px,4vw,44px)] px-[clamp(24px,4vw,52px)] flex items-center justify-between gap-6 flex-wrap relative overflow-hidden"
        >
          <div className="absolute -top-[60px] -right-[60px] w-[220px] h-[220px] bg-white/5 rounded-full pointer-events-none" />
          <div className="flex-1 min-w-[260px] relative z-10">
            <h3 className="text-[clamp(18px,2.5vw,26px)] font-extrabold text-white mb-2 leading-[1.25]">
              Ready to automate your patient revenue?
            </h3>
            <p className="text-sm text-white/70 leading-[1.55]">
              Join 30+ healthcare facilities using our engine to scale their OPD.
            </p>
          </div>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2.5 bg-[#f5a623] hover:bg-[#ffb83a] text-[#0f1f5c] text-base font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_28px_rgba(245,166,35,0.45)] relative z-10 group"
          >
            Get Your Growth Plan
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
