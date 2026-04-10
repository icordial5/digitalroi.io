import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const HealthcareJourneyAnalysis: React.FC = () => {
  const funnelStepsTypical = [
    { label: "Total Enquiries", num: "100", sub: "leads come in", weight: 1, color: "bg-red-500" },
    { label: "Qualified Leads", num: "30", sub: "prospects", weight: 0.30, color: "bg-orange-500" },
    { label: "Clinic Visits", num: "10", sub: "actually show up", weight: 0.10, color: "bg-yellow-500" },
    { label: "Patients Converted", num: "3", sub: "patients only", weight: 0.03, color: "bg-gray-400" },
  ];

  const funnelStepsOptimized = [
    { label: "Total Enquiries", num: "100", sub: "leads come in", weight: 1, color: "bg-blue-600" },
    { label: "Qualified Leads", num: "60", sub: "prospects", weight: 0.60, color: "bg-blue-500", badge: "2×" },
    { label: "Clinic Visits", num: "40", sub: "show up", weight: 0.40, color: "bg-green-500", badge: "4×" },
    { label: "Patients Converted", num: "20", sub: "patients", weight: 0.20, color: "bg-green-600", badge: "7×" },
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden bg-white font-['DM_Sans',_sans-serif]">
      {/* Background Orbs */}
      <div className="absolute top-[-150px] right-[-150px] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1120px] mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 text-[11px] font-bold tracking-[0.14em] uppercase mb-4">
            <TrendingUp className="w-3 h-3" />
            Patient Journey Analysis
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold text-[#0f172a] leading-[1.15] mb-3 tracking-tight">
            What Happens to <span className="bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] bg-clip-text text-transparent">Your Enquiries Today?</span>
          </h2>
          <p className="text-base text-gray-600 max-w-[50ch] mx-auto leading-relaxed">
            See exactly where patients drop off — and how every step is recovered with the OPD Growth System.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* LEFT CARD: Without a System */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[1.5rem] overflow-hidden shadow-[0_4px_24px_rgba(30,58,95,0.1),0_1px_4px_rgba(30,58,95,0.06)] flex flex-col h-full group hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(30,58,95,0.14)] transition-all duration-300"
          >
            <div className="p-6 pb-4 bg-gradient-to-br from-[#1e3a5f] to-[#374151] flex flex-col gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-red-300/30 text-red-300 text-[11px] font-bold tracking-wider uppercase w-fit">
                <AlertCircle className="w-2.5 h-2.5" />
                Typical Lead Generation Funnel
              </div>
              <h3 className="text-[1.9rem] font-extrabold text-white leading-tight">Without a System</h3>
              <p className="text-sm text-white/70">How most clinics lose patients every day</p>
            </div>
            
            <div className="p-7 flex-1">
              <div className="flex flex-col h-full">
                {funnelStepsTypical.map((step, i) => (
                  <div key={i} className="flex gap-4 group/step">
                    <div className="flex flex-col items-center shrink-0 w-[52px]">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-[13px] font-extrabold border-[2.5px] transition-transform duration-250 group-hover/step:scale-110 ${
                        i === 0 ? 'bg-red-50 text-red-600 border-red-600/20' :
                        i === 1 ? 'bg-orange-50 text-orange-600 border-orange-600/20' :
                        i === 2 ? 'bg-yellow-50 text-yellow-600 border-yellow-600/20' :
                        'bg-gray-50 text-gray-500 border-gray-500/20'
                      }`}>
                        {step.num}
                      </div>
                      {i < funnelStepsTypical.length - 1 && (
                        <div className={`w-[2px] flex-1 min-h-[20px] rounded-full my-0.5 opacity-50 ${
                          i === 0 ? 'bg-gradient-to-b from-red-300 to-orange-300' :
                          i === 1 ? 'bg-gradient-to-b from-orange-300 to-yellow-300' :
                          'bg-gradient-to-b from-yellow-300 to-gray-300'
                        }`} />
                      )}
                    </div>
                    <div className="flex-1 pt-1 pb-6">
                      <div className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-1">{step.label}</div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-extrabold text-[#0f172a] leading-none">{step.num}</span>
                        <span className="text-sm text-gray-500">{step.sub}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-2 rounded-full flex-1 bg-black/5 overflow-hidden">
                          <motion.div 
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: step.weight }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                            style={{ originX: 0 }}
                            className={`h-full rounded-full ${step.color}`}
                          />
                        </div>
                        <span className="text-[13px] font-extrabold text-gray-500 min-w-[3rem] text-right">{Math.round(step.weight * 100)}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 px-6 border-t border-black/5 bg-gray-50 flex items-center gap-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4 rotate-180" />
              </div>
              <p className="text-[13px] text-gray-600 leading-relaxed">
                <strong className="text-gray-900">97 patients lost every month.</strong> Drop-offs happen between enquiry and follow-up — with zero system to catch them.
              </p>
            </div>
          </motion.div>

          {/* RIGHT CARD: With Digital ROI */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[1.5rem] overflow-hidden shadow-[0_4px_24px_rgba(30,58,95,0.1),0_1px_4px_rgba(30,58,95,0.06)] flex flex-col h-full group hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(30,58,95,0.14)] transition-all duration-300"
          >
            <div className="p-6 pb-4 bg-gradient-to-br from-[#1e3a5f] via-[#1d4ed8] to-[#3b82f6] flex flex-col gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-200/30 text-orange-200 text-[11px] font-bold tracking-wider uppercase w-fit">
                <CheckCircle2 className="w-2.5 h-2.5" />
                OPD Growth System
              </div>
              <h3 className="text-[1.9rem] font-extrabold text-white leading-tight">With Digital ROI</h3>
              <p className="text-sm text-white/70">Every step tracked, followed-up & optimized</p>
            </div>
            
            <div className="p-7 flex-1">
              <div className="flex flex-col h-full">
                {funnelStepsOptimized.map((step, i) => (
                  <div key={i} className="flex gap-4 group/step">
                    <div className="flex flex-col items-center shrink-0 w-[52px]">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-[13px] font-extrabold border-[2.5px] transition-transform duration-250 group-hover/step:scale-110 ${
                        i < 2 ? 'bg-blue-50 text-blue-700 border-blue-700/20' :
                        'bg-green-50 text-green-700 border-green-700/20'
                      }`}>
                        {step.num}
                      </div>
                      {i < funnelStepsOptimized.length - 1 && (
                        <div className="w-[2px] flex-1 min-h-[20px] rounded-full my-0.5 opacity-50 bg-gradient-to-b from-blue-300 to-green-300" />
                      )}
                    </div>
                    <div className="flex-1 pt-1 pb-6">
                      <div className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-1">{step.label}</div>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-2xl font-extrabold text-[#0f172a] leading-none">{step.num}</span>
                        <span className="text-sm text-gray-500">{step.sub}</span>
                        {step.badge && (
                          <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-green-100 border border-green-600/20 text-green-700 text-[11px] font-extrabold">
                            <ArrowUpRight className="w-2.5 h-2.5" strokeWidth={3} />
                            {step.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-2 rounded-full flex-1 bg-black/5 overflow-hidden">
                          <motion.div 
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: step.weight }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                            style={{ originX: 0 }}
                            className={`h-full rounded-full ${step.color}`}
                          />
                        </div>
                        <span className="text-[13px] font-extrabold text-gray-500 min-w-[3rem] text-right">{Math.round(step.weight * 100)}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 px-6 border-t border-black/5 bg-blue-600/5 flex items-center gap-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <p className="text-[13px] text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Every enquiry captured & nurtured.</strong> Automated follow-up, smart tracking — from enquiry to confirmed patient.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0f172a] rounded-[1.5rem] p-8 md:p-10 grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        >
          <div className="text-center">
            <div className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-orange-200 leading-none mb-1">3%</div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-white/50">Typical Conversion Rate</div>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/10 mx-auto" />
          <div className="text-center">
            <div className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-orange-200 leading-none mb-1">6.7×</div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-white/50">More Patients With OPD System</div>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/10 mx-auto" />
          <div className="text-center">
            <div className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-green-300 leading-none mb-1">20%</div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-white/50">With Digital ROI System</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
