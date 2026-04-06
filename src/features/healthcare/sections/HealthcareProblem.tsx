import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Clock, Users, Database, ClipboardList, MessageSquare } from 'lucide-react';

const problems = [
  {
    id: "01",
    title: "Follow-ups are Delayed",
    desc: "A patient who enquired this morning chose your competitor by afternoon. Speed wins.",
    icon: Clock
  },
  {
    id: "02",
    title: "Leads Not Properly Qualified",
    desc: "Your team spends time on cold leads while serious patients slip away unattended.",
    icon: Users
  },
  {
    id: "03",
    title: "No Clear Tracking System",
    desc: "Without tracking, you can't know which leads are hot, cold, or already gone to someone else.",
    icon: Database
  },
  {
    id: "04",
    title: "Everything Handled Manually",
    desc: "WhatsApp groups and Excel sheets are not a CRM. Manual processes mean missed patients — guaranteed.",
    icon: ClipboardList
  },
  {
    id: "05",
    title: "Patients Are Never Nurtured",
    desc: "One message is not enough. Without consistent follow-up, patients forget your hospital within days.",
    icon: MessageSquare,
    isAlert: true
  }
];

export const HealthcareProblem: React.FC = () => {
  return (
    <section className="hlp-section w-full py-[clamp(60px,8vw,110px)] px-[clamp(16px,5vw,80px)] relative overflow-hidden bg-[#F0F4F8]">
      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(circle, rgba(30,77,183,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="hlp-inner relative z-10 max-w-[1140px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5a6231a] border-[1.5px] border-[#f5a62366] text-[#b8700a] text-[clamp(11px,0.7rem+0.2vw,13px)] font-bold tracking-[0.11em] uppercase mb-4.5">
            <AlertCircle className="w-3.5 h-3.5 text-[#f5a623]" />
            The Real Problem
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold text-[#0f1f5c] leading-[1.15] mb-4 tracking-tight mx-auto">
            Why Most Healthcare providers<br />
            <span className="text-[#1e4db7]">Lose Patients</span>
          </h2>
          <p className="text-[clamp(15px,1.8vw,18px)] text-[#4a5a8a] max-w-[560px] mx-auto leading-[1.65]">
            Even after generating enquiries, most hospitals & clinics fail to convert them into real patient walk-ins, not because of marketing, but because of what happens after the enquiry comes in.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
          
          {/* LEFT: Big stats card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-br from-[#0f1f5c] to-[#1e4db7] rounded-[24px] p-[clamp(28px,4vw,48px)] shadow-[0_8px_32px_rgba(14,30,90,0.14),0_1px_4px_rgba(14,30,90,0.08)] relative overflow-hidden"
          >
            {/* Inner glow effect */}
            <div className="absolute -top-[60px] -right-[60px] w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,transparent_70%)] rounded-full pointer-events-none" />
            
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#f5a623] mb-4 flex items-center gap-1.5">
              <span className="inline-block w-5 h-[2px] bg-[#f5a623] rounded-[2px]" />
              Industry Reality
            </div>
            <h2 className="text-[clamp(20px,1.5rem+0.5vw,30px)] font-extrabold text-white leading-[1.2] mb-2.5">
              Most enquiries never become appointments
            </h2>
            <p className="text-[clamp(13px,0.85rem+0.1vw,15px)] text-white/70 leading-[1.7] mb-7 max-w-[44ch]">
              Hospitals spend lakhs generating leads through ads and referrals - then lose the majority of them to slow follow-up and poor tracking.
            </p>

            <div className="flex gap-3 flex-wrap mb-8">
              <div className="bg-white/12 border border-white/12 rounded-[10px] p-2.5 px-4 text-center flex-1 min-w-[90px]">
                <span className="block text-[clamp(18px,1.4rem+0.4vw,26px)] font-extrabold text-[#f5a623] leading-[1.1] tracking-tight">78%</span>
                <span className="block text-[11px] text-white/70 mt-0.5 tracking-[0.02em] leading-[1.4]">Leads never<br />converted</span>
              </div>
              <div className="bg-white/12 border border-white/12 rounded-[10px] p-2.5 px-4 text-center flex-1 min-w-[90px]">
                <span className="block text-[clamp(18px,1.4rem+0.4vw,26px)] font-extrabold text-[#f5a623] leading-[1.1] tracking-tight">5 min</span>
                <span className="block text-[11px] text-white/70 mt-0.5 tracking-[0.02em] leading-[1.4]">Ideal response<br />window</span>
              </div>
              <div className="bg-white/12 border border-white/12 rounded-[10px] p-2.5 px-4 text-center flex-1 min-w-[90px]">
                <span className="block text-[clamp(18px,1.4rem+0.4vw,26px)] font-extrabold text-[#f5a623] leading-[1.1] tracking-tight">60%</span>
                <span className="block text-[11px] text-white/70 mt-0.5 tracking-[0.02em] leading-[1.4]">Choose first<br />responder</span>
              </div>
            </div>

            <ul className="list-none flex flex-col gap-2.5">
              {problems.map((p, i) => (
                <li key={i} className="flex items-center gap-2.5 text-white/80 text-sm">
                  <AlertCircle className="w-4 h-4 text-[#f5a623] shrink-0" />
                  {p.title}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT: Individual reason cards */}
          <div className="flex flex-col gap-3.5">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08 * (index + 1), ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[18px] p-5 px-5.5 flex items-start gap-4 shadow-[0_2px_12px_rgba(14,30,90,0.07),0_1px_3px_rgba(14,30,90,0.04)] transition-all duration-240 hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgba(14,30,90,0.13),0_2px_6px_rgba(14,30,90,0.07)] group relative overflow-hidden"
              >
                <div className="absolute inset-0 rounded-[18px] bg-gradient-to-br from-[#1e4db70a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-240" />
                
                <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-[#0f1f5c] to-[#1e4db7] text-white text-sm font-extrabold flex items-center justify-center shrink-0 tracking-tighter relative z-10">
                  {problem.id}
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-[clamp(14px,0.9rem+0.15vw,16px)] font-bold text-[#1a2035] leading-[1.3] mb-1">
                    {problem.title}
                  </h4>
                  <p className="text-[clamp(12px,0.78rem+0.1vw,14px)] text-[#3d4a6b] leading-[1.6]">
                    {problem.desc}
                  </p>
                  {problem.isAlert && (
                    <span className="inline-flex items-center gap-1.5 bg-[#fff4e0] text-[#a05e00] text-[11px] font-bold uppercase tracking-[0.07em] px-2.5 py-1 rounded-full mt-2">
                      <AlertCircle className="w-2.5 h-2.5" />
                      Biggest revenue leak
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
