import React from 'react';
import { motion } from 'motion/react';
import { Target, PenTool, Layout, MessageSquare, Database, BarChart3 } from 'lucide-react';

const services = [
  {
    title: "Targeted Ads",
    description: "We help you reach the right people with ads on Google, Meta, and LinkedIn. Whether you need more qualified leads or online sales, we turn clicks into customers and grow your business.",
    icon: Target,
    color: "bg-blue-500"
  },
  {
    title: "Engaging Content",
    description: "Our creative content grabs attention and encourages action. We improve engagement, lower costs, and boost both lead generation and e-commerce sales.",
    icon: PenTool,
    color: "bg-indigo-500"
  },
  {
    title: "Optimized Landing Pages",
    description: "We turn visitors into customers with fast, user-friendly landing pages. Whether you're capturing leads or selling products, we ensure a smooth experience that increases conversions.",
    icon: Layout,
    color: "bg-emerald-500"
  },
  {
    title: "WhatsApp Automation",
    description: "We use WhatsApp to respond instantly and nurture leads automatically. This helps you convert more prospects into customers and drive more sales, whether for services or products.",
    icon: MessageSquare,
    color: "bg-green-500"
  },
  {
    title: "CRM Systems",
    description: "We integrate smart CRM systems that track leads and automate follow-ups. For both lead gen and e-commerce, we help you stay organized and turn opportunities into loyal customers.",
    icon: Database,
    color: "bg-purple-500"
  },
  {
    title: "Smart Analytics",
    description: "We give you clear insights into what's working and what's not. With full visibility of your campaigns, you can make data-driven decisions to grow both your lead generation and e-commerce efforts.",
    icon: BarChart3,
    color: "bg-orange-500"
  }
];

export const LeadGenServices: React.FC = () => {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111118] mb-6">How We Grow Your Business</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive marketing solutions designed to scale your revenue and optimize your performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#111118] mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
