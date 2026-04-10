import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/ui/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { useModal } from '@/context/ModalContext';
import { ArrowRight, CheckCircle2, XCircle, TrendingUp, Users, Target, BarChart3, MapPin, Zap, ShieldCheck, TrendingDown, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
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
  { name: 'Repos Energy', logo: 'https://ik.imagekit.io/digitalroipune/repos-energy.png', stats: [{ value: '3×', label: 'increase in exclusive B2B enquiries' }, { value: '45%', label: 'faster fuel demand fulfilment' }] }
];

export const PuneMumbaiLandingPage: React.FC = () => {
  const { openModal } = useModal();
  const [heroTextIndex, setHeroTextIndex] = useState(0);
  const heroTexts = ["Online Sales.", "Qualified Leads."];
  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setHeroTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(textInterval);
  }, [heroTexts.length]);

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
      <section className="relative pt-12 pb-12 overflow-hidden bg-[#0A0A0F] text-white">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <StaggerContainer>
            <StaggerItem>
              <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-blue-400 font-medium text-sm mb-8">
                <MapPin className="w-4 h-4 mr-2" />
                Serving Pune & Mumbai Brands since 2019
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-5xl mx-auto leading-[1.1]">
                More <br className="md:hidden" />
                <div className="inline-block w-[320px] md:w-[480px] text-left md:text-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={heroTextIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
                    >
                      {heroTexts[heroTextIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <br />
                <span className="text-white">
                  Less Wasted Spend.
                </span>
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                Helping <span className="text-blue-500 font-semibold">e-commerce</span> brands and <span className="text-blue-500 font-semibold">lead generation</span> businesses increase sales and conversions with smarter targeting, automation, and optimized follow-ups.
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <button
                onClick={() => openModal('pune_mumbai_landing')}
                className="btn-primary !px-10 !py-4 !text-lg flex items-center gap-2 mx-auto group"
              >
                Get a Free Growth Plan
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Trusted by growing businesses across Pune & Mumbai</h2>
          </div>

          <CenteredCarousel items={clients} />

          <div className="text-center mt-12">
            <p className="text-xl font-medium text-blue-900 bg-blue-100/50 border border-blue-200 inline-block px-8 py-4 rounded-full shadow-sm">
              Helping businesses turn leads into actual enquiries, appointments, sales, and revenue.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="py-16 bg-[#0B0F19] relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-sm uppercase tracking-widest mb-6 backdrop-blur-sm">
              The Real Problem
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Why Most Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Bleed Money</span><br className="hidden md:block" /> on Digital Marketing
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
              You're not lacking leads or visitors. You're lacking a system to convert them into sales and loyal customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <TrendingDown className="w-6 h-6 text-red-400" />, highlight: 'Spending ₹1,00,000+ on ads', text: 'but only converting 10-20% of traffic into actual customers.' },
              { icon: <Clock className="w-6 h-6 text-red-400" />, highlight: 'Leads sitting unattended for hours', text: 'while competitors close sales because you wait.' },
              { icon: <Target className="w-6 h-6 text-red-400" />, highlight: 'High-intent leads come in', text: 'but there’s no clear system to prioritize or nurture them.' },
              { icon: <BarChart3 className="w-6 h-6 text-red-400" />, highlight: 'No visibility post-click', text: 'on which campaigns convert and which leads turn into revenue.' }
            ].map((pain, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-red-500/30 p-8 rounded-[2rem] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-6 relative z-10">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-500">
                    {pain.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{pain.highlight}</h3>
                    <p className="text-slate-400 leading-relaxed">{pain.text}</p>
                  </div>
                </div>
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
      <section className="py-16 bg-[#0B0F19] text-white relative overflow-hidden">
        {/* Premium Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 rounded-full blur-[120px]"
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-bold uppercase tracking-widest mb-8 backdrop-blur-md"
            >
              <Zap className="w-4 h-4" />
              The Growth System
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight leading-tight text-white"
            >
              The Full-Funnel Engine for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">E-Commerce & Lead Gen</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 font-medium leading-relaxed"
            >
              A simple, powerful system designed to capture, nurture, and convert leads and visitors into sales and revenue.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: '01',
                title: 'Audit & Gap Analysis',
                desc: "Identify where leads or sales are being lost in your funnel, whether it's from ads, landing pages, or follow-ups. We'll find the leaks and fix them.",
                gradient: "from-blue-500 to-cyan-400"
              },
              {
                num: '02',
                title: 'Lead Capture & Traffic',
                desc: 'High-intent campaigns, conversion-focused landing pages, and product ads that drive quality traffic and turn visitors into leads or buyers.',
                gradient: "from-purple-500 to-pink-400"
              },
              {
                num: '03',
                title: 'Follow-Up Automation',
                desc: 'Instant responses via CRM, WhatsApp, email, and automated workflows to engage, nurture, and convert leads or visitors faster.',
                gradient: "from-emerald-500 to-teal-400"
              },
              {
                num: '04',
                title: 'Tracking & Optimization',
                desc: "Full visibility on leads, sales, and performance. Use real-time data to optimize campaigns and scale your efforts for the best ROI.",
                gradient: "from-orange-500 to-amber-400"
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 hover:border-white/20 p-10 rounded-[2.5rem] transition-all duration-500 overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-[2.5rem] blur-xl -z-10`}
                />
                
                <div className="absolute top-0 right-0 p-8">
                  <div className={`text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent group-hover:from-white/20 transition-all duration-500`}>
                    {step.num}
                  </div>
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} p-[1px] mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <div className="w-full h-full bg-[#0B0F19] rounded-2xl flex items-center justify-center text-2xl font-bold text-white">
                      {step.num}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-medium text-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Everything You Need to Convert Leads and Traffic Into Sales</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-blue-600" />,
                title: 'Lead Generation & Traffic',
                items: ['Google Ads', 'Meta Ads', 'TikTok Ads']
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
                title: 'E-Commerce Sales Optimization',
                items: ['Landing Pages', 'Product Ads (Static & Video)', 'Funnel Optimization']
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: 'Follow-Up & Customer Nurturing',
                items: ['CRM Integration', 'WhatsApp Automation', 'Email Workflows']
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
                title: 'Tracking & Reporting',
                items: ['Funnel Tracking', 'Performance Dashboards']
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center text-gray-600 font-medium">
                      <ArrowRight className="w-4 h-4 text-blue-500 mr-2 shrink-0" />
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Built for Growing Businesses in Pune & Mumbai</h2>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">This works best if you:</h3>
                <ul className="space-y-4">
                  {[
                    'Are already driving traffic to your store or generating leads',
                    'Are spending on ads (₹1L+ recommended)',
                    'Want to improve conversions, not just increase leads or clicks',
                    'Have a team handling follow-ups and customer enquiries'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 shrink-0" />
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <h3 className="font-bold text-gray-900 mb-6 text-xl">Industries we commonly work with:</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Healthcare', 'Solar', 'Education', 'High-ticket services',
                    'Jewellery', 'Beauty & Personal Care', 'Home Decor', 'Luxury Goods'
                  ].map((industry, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-blue-700 shadow-sm hover:border-blue-300 hover:bg-blue-50 transition-colors">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#0A0A0F] rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none" />
              
              <p className="text-xl font-medium leading-relaxed mb-10 relative z-10">
                Working closely with businesses across Pune & Mumbai - understanding local markets, customer behaviour, and competition dynamics.
              </p>

              <div className="space-y-8 relative z-10">
                <div>
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-lg mb-3">
                    <MapPin className="w-5 h-5" /> Serving Pune
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Koregaon Park, Kothrud, Wakad, Hinjewadi, Aundh, Baner
                  </p>
                </div>
                
                <div className="h-px w-full bg-white/10" />

                <div>
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-lg mb-3">
                    <MapPin className="w-5 h-5" /> Serving Mumbai
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Andheri, Bandra, Powai, Thane, Borivali, Navi Mumbai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TRUST SECTION */}
      <section className="py-10 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-14">Trusted & Recognised Across Platforms</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="https://ik.imagekit.io/digitalroipune/google-partner.png" alt="Google Premier Partner" className="h-24 md:h-28 object-contain" />
            <img src="https://ik.imagekit.io/digitalroipune/meta-partner.png" alt="Meta Business Partner" className="h-24 md:h-28 object-contain" />
            <div className="flex items-center justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-16 w-16 md:h-20 md:w-20" />
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default PuneMumbaiLandingPage;
