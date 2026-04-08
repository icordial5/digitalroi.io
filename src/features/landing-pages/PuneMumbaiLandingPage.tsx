import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { useModal } from '@/context/ModalContext';
import { ArrowRight, CheckCircle2, XCircle, TrendingUp, Users, Target, BarChart3, MapPin, Zap, ShieldCheck } from 'lucide-react';
import { TestimonialsSection } from '../home/sections/TestimonialsSection';
import { CaseStudyCarousel } from '../home/sections/CaseStudyCarousel';
import { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export const PuneMumbaiLandingPage: React.FC = () => {
  const { openModal } = useModal();

  return (
    <Layout hideHeader={true}>
      <SEO 
        title="Digital Marketing Agency in Pune & Mumbai | Digital ROI" 
        description="Helping e-commerce brands and lead generation businesses increase sales and conversions with smarter targeting, automation, and optimized follow-ups."
        canonicalUrl="https://digitalroi.io/pune-mumbai-digital-marketing"
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-20 overflow-hidden bg-[#0A0A0F] text-white">
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
                More Conversions/Qualified Leads.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Less Wasted Spend.
                </span>
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                Helping e-commerce brands and lead generation businesses increase sales and conversions with smarter targeting, automation, and optimized follow-ups.
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
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Trusted by growing businesses across Pune & Mumbai</h2>
            <p className="text-lg text-gray-500 font-medium tracking-wide">HEALTHCARE • SOLAR • EDUCATION • HIGH-TICKET SERVICES</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { name: 'Truemeds', stats: [{ value: '2x', label: 'increase in conversions' }, { value: '40%', label: 'lower CAC' }] },
              { name: 'Papillon Hair World', stats: [{ value: '5x', label: 'increase in enquiries' }, { value: '2x', label: 'increase in appointments' }] },
              { name: 'Spinalogy Clinic', stats: [{ value: '3x', label: 'higher conversion rate' }, { value: '200%', label: 'higher lead quality' }] },
              { name: 'Amaha', stats: [{ value: '2x', label: 'increase in appointments' }, { value: '60%', label: 'lower CAC' }] },
              { name: 'MentorBeep', stats: [{ value: '4x', label: 'increase in admission enquiries' }, { value: '2x', label: 'faster response time' }] },
              { name: 'Walnut School', stats: [{ value: '40%', label: 'higher admission conversion' }, { value: '2x', label: 'faster lead response time' }] },
              { name: 'The Yoga Institute', stats: [{ value: '2x', label: 'more qualified course enquiries' }, { value: '50%', label: 'reduction in junk leads' }] },
              { name: 'Solar Square', stats: [{ value: '3x', label: 'increase in site inspections' }, { value: '2x', label: 'higher enquiry-to-installation rate' }] },
              { name: 'Jemkon', stats: [{ value: '2x', label: 'more exclusive high-intent leads' }, { value: '34%', label: 'faster lead response & fulfilment' }] },
              { name: 'Repos Energy', stats: [{ value: '3x', label: 'increase in exclusive B2B enquiries' }, { value: '45%', label: 'faster fuel demand fulfilment' }] }
            ].map((client, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  {client.name}
                </h3>
                <div className="space-y-5">
                  {client.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-4">
                      <div className="w-16 shrink-0 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-gray-600 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-medium text-blue-900 bg-blue-100/50 border border-blue-200 inline-block px-8 py-4 rounded-full shadow-sm">
              Helping businesses turn leads into actual enquiries, appointments, sales, and revenue.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 font-medium text-sm mb-6">
              The Real Problem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Most Businesses Bleed Money on Digital Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You're not lacking leads or visitors. You're lacking a system to convert them into sales and loyal customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '📉', text: 'Spending ₹1,00,000+ on ads but only converting 10-20% of traffic into actual customers' },
              { icon: '📵', text: 'Leads and site visitors sitting unattended for hours — competitors close sales while you wait' },
              { icon: '🔎', text: 'High-intent leads and clicks come in, but there’s no clear way to prioritize them' },
              { icon: '📊', text: 'No visibility on what happens after the lead - which campaigns convert, which leads turn into revenue' }
            ].map((pain, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4"
              >
                <div className="text-3xl shrink-0">{pain.icon}</div>
                <p className="text-gray-700 text-lg font-medium leading-relaxed">{pain.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BEFORE VS AFTER */}
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-[#0A0A0F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Full-Funnel Engine for E-Commerce and Lead Generation</h2>
            <p className="text-xl text-gray-400">
              A simple system designed to capture, nurture, and convert leads and visitors into sales and revenue, whether you're focused on service-based leads or online product sales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: '1',
                title: 'Audit & Gap Analysis',
                desc: "Identify where leads or sales are being lost in your funnel, whether it's from ads, landing pages, or follow-ups. We'll find the leaks and fix them."
              },
              {
                num: '2',
                title: 'Lead Capture & Traffic Generation',
                desc: 'High-intent campaigns, conversion-focused landing pages, and product ads that drive quality traffic and turn visitors into leads or buyers.'
              },
              {
                num: '3',
                title: 'Follow-Up Automation',
                desc: 'Instant responses via CRM, WhatsApp, email, and automated workflows to engage, nurture, and convert leads or visitors faster, across both service and e-commerce industries.'
              },
              {
                num: '4',
                title: 'Tracking & Optimization',
                desc: "Full visibility on leads, sales, and performance. Use real-time data to optimize campaigns and scale your efforts, ensuring you get the best ROI, whether you're driving leads or sales."
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors relative overflow-hidden group"
              >
                <div className="text-8xl font-black text-white/5 absolute -top-4 -right-4 group-hover:text-blue-500/10 transition-colors">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-xl font-bold mb-6">
                    {step.num}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section className="py-24 bg-slate-50">
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
      <div className="bg-slate-50 py-12">
        <TestimonialsSection onPlayVideo={() => {}} />
      </div>

      {/* 8. WHO THIS IS FOR */}
      <section className="py-24 bg-white">
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

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="font-semibold text-gray-900 mb-2">Industries we commonly work with:</h3>
                <p className="text-blue-600 font-medium">Healthcare • Solar • Education • High-ticket services</p>
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
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-14">Trusted & Recognised Across Platforms</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="https://ik.imagekit.io/digitalroipune/google-partner.png" alt="Google Premier Partner" className="h-24 md:h-28 object-contain" />
            <img src="https://ik.imagekit.io/digitalroipune/meta-partner.png" alt="Meta Business Partner" className="h-24 md:h-28 object-contain" />
            <div className="flex items-center gap-4 font-bold text-3xl md:text-4xl text-gray-800">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-16 w-16 md:h-20 md:w-20" />
              WhatsApp Business
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ShieldCheck className="w-16 h-16 text-white/80 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fix What Happens After the Lead Comes In
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Most businesses don't need more visitors or leads.<br />
            They need a better system to convert the ones they already have.
          </p>
          <button
            onClick={() => openModal('pune_mumbai_landing')}
            className="bg-white text-blue-600 hover:bg-gray-50 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Get Your Free Growth Audit
          </button>
        </div>
      </section>

    </Layout>
  );
};

export default PuneMumbaiLandingPage;
