import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/ui/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { useModal } from '@/context/ModalContext';
import { ArrowRight, CheckCircle2, XCircle, TrendingUp, Users, Target, BarChart3, MapPin, Zap, ShieldCheck, TrendingDown, Clock, ChevronLeft, ChevronRight, AlertCircle, AlertTriangle } from 'lucide-react';
import { TestimonialsSection } from '../home/sections/TestimonialsSection';
import { CaseStudyCarousel } from '../home/sections/CaseStudyCarousel';
import { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { CenteredCarousel } from './components/CenteredCarousel';

const clients = [
  { name: 'Truemeds', logo: 'https://ik.imagekit.io/digitalroipune/truemeds.png', stats: [{ value: '2×', label: 'increase in conversions' }, { value: '40%', label: 'lower customer acquisition cost (CAC)' }] },
  { name: 'Papillon', logo: 'https://ik.imagekit.io/digitalroipune/papillon.png', stats: [{ value: '5×', label: 'increase in enquiries' }, { value: '2×', label: 'increase in appointments' }] },
  { name: 'Spinalogy', logo: 'https://ik.imagekit.io/digitalroipune/spinalogy.png', stats: [{ value: '3×', label: 'higher conversion rate' }, { value: '200%', label: 'improvement in lead quality' }] },
  { name: 'Amaha', logo: 'https://ik.imagekit.io/digitalroipune/amaha.png', stats: [{ value: '2×', label: 'increase in appointments' }, { value: '60%', label: 'lower customer acquisition cost (CAC)' }] },
  { name: 'MentorBeep', logo: 'https://ik.imagekit.io/digitalroipune/mentorbeep.png', stats: [{ value: '4×', label: 'increase in admission enquiries' }, { value: '2×', label: 'faster response time' }] },
  { name: 'Walnut School', logo: 'https://ik.imagekit.io/digitalroipune/Walnut-School.png', stats: [{ value: '40%', label: 'higher admission conversion rate' }, { value: '2×', label: 'faster lead response time' }] },
  { name: 'The Yoga Institute', logo: 'https://ik.imagekit.io/digitalroipune/the-yoga-institute.png', stats: [{ value: '2×', label: 'more qualified course enquiries' }, { value: '50%', label: 'reduction in junk leads' }] },
  { name: 'Solar Square', logo: 'https://ik.imagekit.io/digitalroipune/solar-square.png', stats: [{ value: '3×', label: 'increase in site inspections' }, { value: '2×', label: 'higher enquiry-to-installation rate' }] },
  { name: 'Jemkon', logo: 'https://ik.imagekit.io/digitalroipune/jemkon.png', stats: [{ value: '2×', label: 'more high-intent exclusive leads' }, { value: '34%', label: 'faster lead response & fulfilment' }] },
  { name: 'Repos Energy', logo: 'https://ik.imagekit.io/digitalroipune/repos-energy.png', stats: [{ value: '3×', label: 'increase in exclusive B2B enquiries' }, { value: '45%', label: 'faster fuel demand fulfilment' }] },
  { name: 'Application Ally', logo: 'https://ik.imagekit.io/digitalroipune/Application-ally.png', stats: [{ value: '3×', label: 'more qualified leads' }, { value: '50%', label: 'lower cost per lead' }] },
  { name: 'Medicover Hospitals', logo: 'https://ik.imagekit.io/digitalroipune/Medicover-Hospitals.png', stats: [{ value: '2×', label: 'increase in appointments' }, { value: '45%', label: 'higher patient engagement' }] }
];

export const PuneMumbaiLandingPage: React.FC = () => {
  const { openModal } = useModal();
  const heroTexts = ["Online Sales.", "Qualified Leads."];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % heroTexts.length;
      const fullText = heroTexts[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, heroTexts]);

  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  useEffect(() => {
    const clientInterval = setInterval(() => {
      setCurrentClientIndex((prev) => (prev + 1) % clients.length);
    }, 4000);
    return () => clearInterval(clientInterval);
  }, []);

  const nextClient = () => setCurrentClientIndex((prev) => (prev + 1) % clients.length);
  const prevClient = () => setCurrentClientIndex((prev) => (prev - 1 + clients.length) % clients.length);

  return (
    <Layout hideHeader={true}>
      <SEO 
        title="Digital Marketing Agency in Pune & Mumbai | Leads & Sales Growth | Digital ROI" 
        description="Generate high-quality leads and drive e-commerce sales in Pune & Mumbai. Digital ROI helps you convert traffic into revenue with full-funnel marketing, better follow-ups, and smarter campaigns."
        canonicalUrl="https://digitalroi.io/digital-marketing-agency-pune-mumbai"
      />

      {/* 1. HERO SECTION */}
      <section 
        className="relative pt-24 pb-24 overflow-hidden min-h-[90vh] flex items-center"
        style={{ background: 'linear-gradient(180deg, transparent 63.39%, #ffffff 82%), linear-gradient(107deg, rgba(8, 78, 150, 0.1) 0%, rgba(8, 78, 150, 0.2) 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <StaggerContainer>
            <StaggerItem>
              <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#111118] text-white/90 font-medium text-sm mb-8 shadow-[0_0_20px_rgba(17,17,24,0.3)]">
                <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                Serving Pune & Mumbai Brands since 2019
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 max-w-5xl mx-auto leading-[1.1] text-[#111118]">
                More <br />
                <span className="text-gradient-blue inline-block min-w-[300px] md:min-w-[450px]">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-[3px] h-[0.8em] bg-blue-600 ml-1 align-middle"
                  />
                </span>
                <br />
                <span className="text-[#111118]">Less Wasted Spend.</span>
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Designed to capture, nurture, and convert both <span className="text-[#084E96] font-semibold">leads</span> and <span className="text-[#084E96] font-semibold">buyers</span> into real revenue.
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button
                  onClick={() => openModal('pune_mumbai_landing')}
                  className="btn-primary"
                >
                  Get Your Growth Plan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-400/10 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* 2. PREMIUM TRUST SECTION */}
      <section className="pt-32 pb-16 bg-[#f8f9fa] relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://ik.imagekit.io/digitalroipune/Home%20bg.webp?updatedAt=1775825482614" 
            alt="Background" 
            className="w-full h-full object-cover opacity-[0.15]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa]/80 via-transparent to-[#f8f9fa]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#111118] text-white/90 font-medium text-sm mb-8 shadow-[0_0_20px_rgba(17,17,24,0.3)]"
            >
              <ShieldCheck className="w-4 h-4 mr-2 text-blue-400" />
              Trusted by Industry Leaders
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
            >
              Proven Results for <span className="text-gradient-blue">Ambitious Brands</span>
            </motion.h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Divider Lines (Bright & Faded) */}
            <div className="absolute top-0 left-[25%] w-px h-full bg-gradient-to-b from-transparent via-slate-400 to-transparent opacity-100 hidden lg:block" />
            <div className="absolute top-0 left-[50%] w-px h-full bg-gradient-to-b from-transparent via-slate-400 to-transparent opacity-100 hidden lg:block" />
            <div className="absolute top-0 left-[75%] w-px h-full bg-gradient-to-b from-transparent via-slate-400 to-transparent opacity-100 hidden lg:block" />
            
            {/* Horizontal Divider Lines (Bright & Faded) */}
            <div className="absolute top-[33.33%] left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-100 hidden lg:block" />
            <div className="absolute top-[66.66%] left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-100 hidden lg:block" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
              {clients.map((client, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                  className="group relative flex items-center justify-center p-12 md:p-16 transition-all duration-500"
                >
                  <div className="relative z-10 transform transition-all duration-500 scale-110 -translate-y-2">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-w-[140px] md:max-w-[180px] max-h-[80px] object-contain transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle Shadow under logo for depth - Always Visible */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/5 blur-xl opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Subtle Elevation Shadow - Always Visible */}
                  <div className="absolute inset-8 rounded-3xl bg-white opacity-100 shadow-[0_20px_50px_rgba(8,78,150,0.15)] transition-all duration-500 -z-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="pt-12 pb-32 bg-white relative overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden">
          <div className="absolute top-10 left-10 text-[20rem] font-black text-red-600 rotate-12">LOSS</div>
          <div className="absolute bottom-10 right-10 text-[20rem] font-black text-red-600 -rotate-12">WASTE</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 font-bold text-sm uppercase tracking-[0.2em] mb-8"
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              The Real Problem
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-[#111118] mb-8 tracking-tighter leading-none">
              Why Most Businesses <br />
              <span className="text-red-600 relative">
                Bleed Money
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9C118.5 3 239.5 3 355 9" stroke="#EF4444" strokeWidth="5" strokeLinecap="round"/>
                </svg>
              </span> on Ads
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              You're not lacking leads or visitors. You're lacking a <span className="text-[#111118] font-bold underline decoration-red-500/30">system</span> to convert them into sales and loyal customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
            {[
              { 
                icon: <TrendingDown className="w-8 h-8 text-red-600" />, 
                highlight: 'Ad Spend Leakage', 
                text: 'Spending ₹1,00,000+ on ads but only converting 10-20% of traffic into actual customers.',
                colSpan: 'md:col-span-7'
              },
              { 
                icon: <Clock className="w-8 h-8 text-red-600" />, 
                highlight: 'The Speed Gap', 
                text: 'Leads sitting unattended for hours while competitors close sales because you wait.',
                colSpan: 'md:col-span-5'
              },
              { 
                icon: <Target className="w-8 h-8 text-red-600" />, 
                highlight: 'Priority Blindness', 
                text: 'High-intent leads come in but there’s no clear system to prioritize or nurture them.',
                colSpan: 'md:col-span-5'
              },
              { 
                icon: <BarChart3 className="w-8 h-8 text-red-600" />, 
                highlight: 'Data Black Hole', 
                text: 'No visibility post-click on which campaigns convert and which leads turn into revenue.',
                colSpan: 'md:col-span-7'
              }
            ].map((pain, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`${pain.colSpan} group relative bg-white border-2 border-slate-50 p-10 rounded-[2.5rem] transition-all duration-500 hover:border-red-100 hover:shadow-2xl hover:shadow-red-900/5`}
              >
                <div className="absolute top-6 right-8 text-red-100 group-hover:text-red-200 transition-colors">
                  <AlertTriangle className="w-12 h-12 opacity-20" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {pain.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#111118] mb-4 tracking-tight">{pain.highlight}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-lg">{pain.text}</p>
                </div>
                
                {/* Subtle "Leak" animation on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-red-500 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BEFORE VS AFTER */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto">
            {/* Before */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-red-50 rounded-3xl p-10 border border-red-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full -mr-16 -mt-16 opacity-50" />
              <div className="flex items-center gap-3 mb-8">
                <XCircle className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-gray-900">Without Digital ROI</h3>
              </div>
              <div className="space-y-6">
                <div className="bg-white/60 p-4 rounded-xl">
                  <p className="text-red-700 font-semibold text-lg">100 visitors → 10-15 purchases</p>
                  <p className="text-gray-600 text-sm mt-1">High cost per sale</p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-red-400 rounded-full mr-3" /> Manual follow-ups.</li>
                  <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-red-400 rounded-full mr-3" /> Missed opportunities.</li>
                  <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-red-400 rounded-full mr-3" /> No structured tracking or nurturing.</li>
                </ul>
              </div>
            </motion.div>

            {/* After */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-emerald-50 rounded-3xl p-10 border border-emerald-100 relative overflow-hidden shadow-xl shadow-emerald-900/5"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200 rounded-bl-full -mr-16 -mt-16 opacity-50" />
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                <h3 className="text-2xl font-bold text-gray-900">With Digital ROI</h3>
              </div>
              <div className="space-y-6">
                <div className="bg-white/80 p-4 rounded-xl shadow-sm">
                  <p className="text-emerald-700 font-bold text-lg">100 visitors → 35-60 purchases</p>
                  <p className="text-gray-600 text-sm mt-1">Significantly lower cost per sale</p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-800 font-medium"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3" /> Instant follow-ups via CRM, WhatsApp, and email.</li>
                  <li className="flex items-center text-gray-800 font-medium"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3" /> Automated nurturing.</li>
                  <li className="flex items-center text-gray-800 font-medium"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3" /> Full funnel working 24/7.</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-6 rounded-2xl shadow-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-2">🔥 The Difference</p>
              <p className="text-2xl md:text-3xl font-bold">2–4× more conversions, without increasing ad spend</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. SYSTEM SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-8"
            >
              <Zap className="w-4 h-4" />
              The Growth System
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight text-[#111118]"
            >
              The Full-Funnel Engine for <br />
              <span className="text-gradient-blue">E-Commerce & Lead Gen</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 font-medium leading-relaxed"
            >
              A simple, powerful system designed to capture, nurture, and convert leads and visitors into sales and revenue.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                num: '01',
                title: 'Audit & Gap Analysis',
                desc: "Identify where leads or sales are being lost in your funnel, whether it's from ads, landing pages, or follow-ups. We'll find the leaks and fix them.",
                gradient: "from-blue-600 to-cyan-500"
              },
              {
                num: '02',
                title: 'Lead Capture & Traffic',
                desc: 'High-intent campaigns, conversion-focused landing pages, and product ads that drive quality traffic and turn visitors into leads or buyers.',
                gradient: "from-purple-600 to-pink-500"
              },
              {
                num: '03',
                title: 'Follow-Up Automation',
                desc: 'Instant responses via CRM, WhatsApp, email, and automated workflows to engage, nurture, and convert leads or visitors faster.',
                gradient: "from-emerald-600 to-teal-500"
              },
              {
                num: '04',
                title: 'Tracking & Optimization',
                desc: "Full visibility on leads, sales, and performance. Use real-time data to optimize campaigns and scale your efforts for the best ROI.",
                gradient: "from-orange-600 to-amber-500"
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white border border-gray-100 hover:border-blue-100 p-12 rounded-[3rem] transition-all duration-500 shadow-sm hover:shadow-2xl"
              >
                <div className="absolute top-0 right-0 p-10">
                  <div className="text-8xl font-black text-gray-50 group-hover:text-blue-50 transition-colors duration-500">
                    {step.num}
                  </div>
                </div>

                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.gradient} p-[1px] mb-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center text-3xl font-black text-[#1a1a1a]">
                      {step.num}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-[#1a1a1a] tracking-tight group-hover:text-blue-600 transition-all">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium text-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section className="py-24 bg-[#fdfcfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              Our Expertise
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-[#1a1a1a] tracking-tight">Everything You Need to <br /> <span className="text-gradient-blue">Convert Traffic Into Revenue</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-blue-600" />,
                title: 'Lead Generation & Traffic',
                items: ['Google Ads (Search & Display)', 'Meta Ads (FB & IG)', 'LinkedIn & TikTok Ads'],
                color: 'blue'
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
                title: 'E-Commerce Growth',
                items: ['High-Converting Landing Pages', 'Dynamic Product Ads', 'Checkout Optimization'],
                color: 'purple'
              },
              {
                icon: <Users className="w-8 h-8 text-emerald-600" />,
                title: 'Follow-Up Automation',
                items: ['CRM & Lead Management', 'WhatsApp Marketing', 'Email Nurture Sequences'],
                color: 'emerald'
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
                title: 'Tracking & Attribution',
                items: ['Full-Funnel Tracking', 'ROI Dashboards', 'Conversion API Setup'],
                color: 'orange'
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className={`w-20 h-20 rounded-2xl bg-${service.color}-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8 leading-tight">{service.title}</h3>
                <ul className="space-y-4">
                  {service.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start text-gray-600 font-medium text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mr-3 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CASE STUDIES & TESTIMONIALS */}
      <CaseStudyCarousel />
      <div className="bg-slate-50 py-8">
        <TestimonialsSection onPlayVideo={() => {}} />
      </div>

      {/* 8. WHO THIS IS FOR */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold uppercase tracking-widest mb-8">
                Ideal Partnership
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-[#111118] mb-10 tracking-tight leading-tight">Built for Ambitious <br /> Brands in <span className="text-gradient-blue">Pune & Mumbai</span></h2>
              
              <div className="space-y-6 mb-12">
                {[
                  'Already driving traffic but struggling with conversions',
                  'Spending ₹1L+ monthly on digital advertising',
                  'Wanting to build a predictable revenue engine',
                  'Ready to scale with automated follow-up systems'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="shrink-0 w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-lg text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                <h3 className="font-bold text-[#1a1a1a] mb-8 text-xl uppercase tracking-wider">Industries We Scale:</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Healthcare & Clinics', 'Solar & Clean Tech', 'Higher Education', 'Real Estate',
                    'D2C E-Commerce', 'Luxury Retail', 'B2B Services', 'Home Improvement'
                  ].map((industry, idx) => (
                    <span key={idx} className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-bold text-blue-700 shadow-sm hover:border-blue-400 hover:text-blue-800 transition-all cursor-default">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[3.5rem] blur-2xl opacity-10" />
              <div className="bg-[#1a1a1a] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/30 blur-[100px] rounded-full pointer-events-none" />
                
                <p className="text-2xl font-medium leading-relaxed mb-12 relative z-10">
                  We understand the <span className="text-blue-400 font-bold">local market dynamics</span> of Pune and Mumbai, helping you beat local competition with global-standard marketing.
                </p>

                <div className="space-y-10 relative z-10">
                  <div className="group">
                    <div className="flex items-center gap-4 text-blue-400 font-black text-xl mb-4 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                      <MapPin className="w-6 h-6" /> Serving Pune
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg font-medium pl-10">
                      Koregaon Park, Kothrud, Wakad, Hinjewadi, Aundh, Baner, Viman Nagar
                    </p>
                  </div>
                  
                  <div className="h-px w-full bg-white/10" />

                  <div className="group">
                    <div className="flex items-center gap-4 text-blue-400 font-black text-xl mb-4 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                      <MapPin className="w-6 h-6" /> Serving Mumbai
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg font-medium pl-10">
                      Andheri, Bandra, Powai, Thane, Borivali, Navi Mumbai, Worli
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. TRUST SECTION */}
      <section className="py-24 bg-[#fdfcfb] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-[0.2em] mb-12">
            Global Standards
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-20 tracking-tight">Trusted & Recognised Across Platforms</h2>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
            <img src="https://ik.imagekit.io/digitalroipune/google-partner.png" alt="Google Premier Partner" className="h-24 md:h-32 object-contain hover:scale-105 transition-transform duration-300" />
            <img src="https://ik.imagekit.io/digitalroipune/meta-partner.png" alt="Meta Business Partner" className="h-24 md:h-32 object-contain hover:scale-105 transition-transform duration-300" />
            <div className="flex items-center justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-16 w-16 md:h-20 md:w-20 hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default PuneMumbaiLandingPage;
