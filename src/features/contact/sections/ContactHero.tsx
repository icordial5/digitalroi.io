import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export const ContactHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-b from-[#E3F0FF] to-[#F8FAFC] pt-32 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-6"
        >
          <span>Home</span>
          <span>/</span>
          <span className="text-blue-600 font-medium">Contact Us</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight"
        >
          Contact us
        </motion.h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3 h-3" />
                Let's Work Together
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Let's Start <span className="text-blue-500">Growing</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                Let's build a full-funnel growth system that brings you better leads, stronger conversions, and real revenue.
              </p>
            </div>

            {/* Support Center Box */}
            <div className="bg-[#E3F0FF] rounded-3xl p-8 flex items-center gap-6 shadow-sm">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Call support center 24/7</p>
                <p className="text-2xl md:text-3xl font-black text-slate-900">+91 89561-10486</p>
              </div>
            </div>

            {/* Email & Location Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600 text-sm">sales@digitalroi.io</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Location</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Suman Ankur, 5th Floor, S.No-82, Plot No. 52, Near Orchid School, Sahyadri Farms, Baner, Pune, 411045
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Border/Shadow */}
            <div className="absolute -inset-4 bg-blue-500/5 rounded-[2.5rem] blur-2xl -z-10" />
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
