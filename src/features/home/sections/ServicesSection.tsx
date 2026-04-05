import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';

const services = [
  {
    title: "Performance Marketing",
    desc: "Generate up to 3x more qualified leads with targeted campaigns on Google, Meta, and LinkedIn. Reach the right audience, convert clicks into customers, and scale efficiently while keeping costs in check.",
    image: "https://ik.imagekit.io/digitalroipune/Perf.-Marketing.gif",
    imageLeft: true
  },
  {
    title: "Content & Creative Services",
    desc: "Build brands that capture attention and inspire action. Our data-driven creatives increase click-through rates by 30-50% and reduce cost-per-lead by up to 40%.",
    image: "https://ik.imagekit.io/digitalroipune/Creative.gif",
    imageLeft: false
  },
  {
    title: "Landing Page Optimization",
    desc: "Turn visitors into conversions with high-performing landing pages. Get 2x better results through fast load speeds, engaging design, and frictionless user experiences.",
    image: "https://ik.imagekit.io/digitalroipune/Landing-Page.gif",
    imageLeft: true
  },
  {
    title: "WhatsApp Automation",
    desc: "Respond instantly, nurture leads automatically, and convert faster. Brands using our WhatsApp workflows see 25-40% higher conversion rates and improved engagement.",
    image: "https://ik.imagekit.io/digitalroipune/WhatsApp-Automation.gif",
    imageLeft: false
  },
  {
    title: "CRM Integration",
    desc: "Never lose a lead again. Track every enquiry, automate follow-ups, and increase conversion rates by up to 40% with smart CRM systems.",
    image: "https://ik.imagekit.io/digitalroipune/CRM-Automation.gif",
    imageLeft: true
  },
  {
    title: "Data Tracking & Analytics",
    desc: "Know exactly what's working - and what's not. Gain full-funnel visibility across ads, landing pages, and automation platforms to make smarter, data-backed decisions.",
    image: "https://ik.imagekit.io/digitalroipune/Data-Tracking.gif",
    imageLeft: false
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section 
      className="py-16 relative bg-white"
      style={{ 
        backgroundImage: 'url(https://ik.imagekit.io/digitalroipune/hero-bg-shape.png)',
        backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <Sparkles className="w-8 h-8 text-[#084E96]" />
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Our Services And Solutions</h2>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              className={`flex flex-col ${service.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: service.imageLeft ? -20 : 20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
                }}
                className="w-full md:w-1/2"
              >
                <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 bg-white">
                  <img src={service.image} alt={service.title} className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
                </div>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: service.imageLeft ? 20 : -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
                }}
                className="w-full md:w-1/2"
              >
                <div className="relative">
                  <div className={cn("absolute w-40 h-40 bg-[#F5F3FF] rounded-3xl -z-10", service.imageLeft ? "-bottom-6 -left-6" : "-bottom-6 -right-6")} />
                  <div 
                    className={cn("p-10 md:p-12 text-white shadow-xl", service.imageLeft ? "rounded-3xl rounded-bl-[4rem]" : "rounded-3xl rounded-br-[4rem]")}
                    style={{ backgroundImage: 'linear-gradient(100deg, #084E96 0%, #2a81e3 100%)' }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-white/90 leading-relaxed text-base md:text-lg">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
