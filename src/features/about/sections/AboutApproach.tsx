import React from 'react';
import { motion } from 'motion/react';
import { Target, Rocket, Eye, CheckCircle2, ArrowRight } from 'lucide-react';

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  itemsTitle: string;
  items: string[];
  footer?: string;
  color: string;
  delay: number;
}

const ApproachCard: React.FC<SectionProps> = ({ icon, title, subtitle, description, itemsTitle, items, footer, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="group relative bg-white rounded-[2.5rem] p-10 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full overflow-hidden"
  >
    {/* Background Glow */}
    <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-10 transition-opacity group-hover:opacity-20 ${color}`} />
    
    <div className="relative z-10 flex flex-col h-full">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500 ${color.replace('bg-', 'bg-opacity-10 text-').replace('blur-3xl', '')}`}>
        {icon}
      </div>
      
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">{title}</span>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">{subtitle}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>

      <div className="mt-auto">
        <div className="h-px w-full bg-slate-100 mb-8" />
        <p className="text-sm font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span className="w-6 h-0.5 bg-blue-600 rounded-full" />
          {itemsTitle}
        </p>
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600 group/item">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0 transition-transform group-hover/item:scale-110" />
              <span className="text-sm md:text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        {footer && (
          <p className="mt-8 pt-6 border-t border-slate-50 text-sm font-medium text-slate-500 italic">
            {footer}
          </p>
        )}
      </div>
    </div>
  </motion.div>
);

export const AboutApproach: React.FC = () => {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Our Approach */}
          <ApproachCard
            icon={<Target className="w-8 h-8" />}
            title="Our Approach"
            subtitle="Turning marketing into measurable growth"
            description="We help brands attract quality leads, convert them faster, and scale predictably through full-funnel performance marketing. Everything is powered by data, automation, and continuous optimization."
            itemsTitle="We work across:"
            items={[
              "Google, Meta & LinkedIn Ads",
              "Landing pages",
              "WhatsApp & CRM automation",
              "Tracking & reporting"
            ]}
            color="bg-blue-500"
            delay={0.1}
          />

          {/* Our Mission */}
          <ApproachCard
            icon={<Rocket className="w-8 h-8" />}
            title="Our Mission"
            subtitle="To help brands generate, qualify, and convert leads into revenue"
            description="Every system is built to support real business goals - not just traffic or impressions. We focus on the entire journey from the first click to the final sale."
            itemsTitle="We aim to help businesses:"
            items={[
              "Generate higher-quality leads",
              "Improve conversion rates",
              "Reduce wasted ad spend",
              "Automate follow-ups",
              "Achieve consistent, predictable growth"
            ]}
            color="bg-purple-500"
            delay={0.2}
          />

          {/* Our Vision */}
          <ApproachCard
            icon={<Eye className="w-8 h-8" />}
            title="Our Vision"
            subtitle="To become the most trusted full-funnel growth partner for lead-driven brands"
            description="The goal is simple - help brands grow without guessing what works. We build long-term systems that scale with your business."
            itemsTitle="We scale businesses using:"
            items={[
              "Strong and scalable marketing systems",
              "Smart automation workflows",
              "Transparent reporting",
              "Long-term performance strategies",
              "Achieve consistent, predictable growth"
            ]}
            footer="The goal is simple - help brands grow without guessing what works."
            color="bg-orange-500"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};
