import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const LeadGenSolutions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111118] mb-6">Find the Perfect Solution for Your Business</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Select your business type to see how we can help you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Lead Generation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col h-full"
          >
            <h3 className="text-3xl font-bold text-[#111118] mb-8">Lead Generation</h3>
            <ul className="space-y-6 mb-10 flex-grow">
              {[
                "Generate qualified leads from Google, Meta, and LinkedIn.",
                "Automate your follow-ups and increase conversions.",
                "Track everything with powerful analytics."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate('/lead-generation')}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              Get More Qualified Leads <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* E-commerce */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111118] p-10 rounded-[2.5rem] text-white flex flex-col h-full"
          >
            <h3 className="text-3xl font-bold mb-8">E-commerce</h3>
            <ul className="space-y-6 mb-10 flex-grow">
              {[
                "Drive targeted traffic to your product pages.",
                "Increase sales with optimized landing pages.",
                "Use data-driven creatives to improve your ROI."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-lg text-white/80">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate('/ecommerce-marketing')}
              className="bg-white text-[#111118] hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              Get More Online Sales <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
