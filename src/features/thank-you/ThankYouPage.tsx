import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';

export const ThankYouPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Thank You - Digital ROI</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-[20px] px-6 md:px-10 py-10 md:py-[60px] max-w-[600px] w-full text-center shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative z-10"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="w-[100px] h-[100px] mx-auto mb-[30px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#667eea] to-[#764ba2]"
          >
            <motion.div
              initial={{ width: 0, height: 0 }}
              animate={{ width: 49, height: 18 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
              className="border-[4px] border-white border-t-0 border-r-0 transform -rotate-45"
            ></motion.div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="text-[28px] md:text-[36px] font-bold text-[#1f2937] mb-4"
          >
            Thank You! 🎉
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="text-[16px] md:text-[18px] text-[#6b7280] mb-[30px] leading-[1.6]"
          >
            Thank you — we’ve received your details. <br className="hidden md:block"/>
            Our team is reviewing your request and will reach out within <strong className="text-[#374151]">1 business day</strong>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="bg-[#f3f4f6] rounded-[12px] p-6 my-[30px] text-left"
          >
            <h3 className="text-[18px] font-semibold text-[#374151] mb-3">What Happens Next</h3>
            <ul className="space-y-2.5 m-0 p-0 list-none">
              <li className="text-[15px] text-[#6b7280] relative pl-7 leading-relaxed">
                <span className="absolute left-0 text-[#667eea] font-bold text-[18px] top-[-2px]">✓</span> 
                Quick review of your requirements
              </li>
              <li className="text-[15px] text-[#6b7280] relative pl-7 leading-relaxed">
                <span className="absolute left-0 text-[#667eea] font-bold text-[18px] top-[-2px]">✓</span> 
                A short call to understand goals & timelines
              </li>
              <li className="text-[15px] text-[#6b7280] relative pl-7 leading-relaxed">
                <span className="absolute left-0 text-[#667eea] font-bold text-[18px] top-[-2px]">✓</span> 
                A practical plan with clear next steps
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="bg-[#f3f4f6] rounded-[12px] p-6 my-[30px] text-left"
          >
            <h3 className="text-[18px] font-semibold text-[#374151] mb-3">If it’s urgent, reach out to our onboarding expert</h3>
            <ul className="space-y-2.5 m-0 p-0 list-none">
              <li className="text-[15px] text-[#374151] relative pl-7 leading-relaxed font-semibold">
                <span className="absolute left-0 top-0"></span>Anosh Jadhav
              </li>
              <li className="text-[15px] text-[#6b7280] relative pl-7 leading-relaxed">
                <span className="absolute left-0 top-0">📞</span> 
                <a href="tel:+918956110486" className="text-[#667eea] hover:underline transition-all">+91 89561 10486</a>
              </li>
              <li className="text-[15px] text-[#6b7280] relative pl-7 leading-relaxed">
                <span className="absolute left-0 top-0">✉️</span> 
                <a href="mailto:anosh.jadhav@digitalroi.io" className="text-[#667eea] hover:underline transition-all">anosh.jadhav@digitalroi.io</a>
              </li>
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </Layout>
  );
};
