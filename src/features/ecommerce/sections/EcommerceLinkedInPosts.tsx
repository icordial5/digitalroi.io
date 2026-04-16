import React from 'react';
import { motion } from 'motion/react';

export const EcommerceLinkedInPosts: React.FC = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            See Our <span className="text-gradient-blue">Success Stories</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Real results from our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full flex justify-center"
          >
            <iframe 
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7416468628126027776" 
              height="800" 
              width="100%" 
              frameBorder="0" 
              allowFullScreen={true} 
              title="Embedded post"
              className="rounded-xl shadow-lg border border-slate-200 max-w-[504px] w-full bg-white"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full flex justify-center"
          >
            <iframe 
              src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7406670021550280704" 
              height="800" 
              width="100%" 
              frameBorder="0" 
              allowFullScreen={true} 
              title="Embedded post"
              className="rounded-xl shadow-lg border border-slate-200 max-w-[504px] w-full bg-white"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
