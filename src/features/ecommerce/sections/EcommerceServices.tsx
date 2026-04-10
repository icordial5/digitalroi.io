import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, LayoutTemplate, ShoppingCart, Users, LineChart } from 'lucide-react';
import { cn } from '@/utils/cn';

const services = [
  {
    icon: Target,
    title: "Targeted Ads",
    description: "We help you get your products in front of the right customers with ads on Google, Meta, and TikTok, bringing more people to your store."
  },
  {
    icon: Eye,
    title: "Eye-Catching Ads",
    description: "We create ads that grab attention and get people to click, making sure your ads lead to sales."
  },
  {
    icon: LayoutTemplate,
    title: "Product Page Improvement",
    description: "We make your product pages easy to use and fast, so visitors stay longer and are more likely to buy."
  },
  {
    icon: ShoppingCart,
    title: "Abandoned Cart Recovery",
    description: "We automatically remind customers who leave items in their cart, helping you recover sales that might have been lost."
  },
  {
    icon: Users,
    title: "Customer Retention",
    description: "Strategies to turn one-time buyers into repeat customers and increase lifetime value."
  },
  {
    icon: LineChart,
    title: "Simple Analytics",
    description: "We track how well your store is doing and help you make smarter choices to grow your business."
  }
];

const getCardStyle = (index: number) => {
  switch (index) {
    case 0:
      return "md:col-span-2 bg-gradient-to-br from-[#0A3D91] to-[#2563EB] text-white border-transparent";
    case 1:
      return "md:col-span-1 bg-white text-[#111118] border-slate-200";
    case 2:
      return "md:col-span-1 bg-white text-[#111118] border-slate-200";
    case 3:
      return "md:col-span-2 bg-[#111118] text-white border-transparent";
    case 4:
      return "md:col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-[#111118] border-blue-100";
    case 5:
      return "md:col-span-1 bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-transparent";
    default:
      return "bg-white text-[#111118] border-slate-200";
  }
};

const getIconStyle = (index: number) => {
  switch (index) {
    case 0:
      return "bg-white/20 text-white";
    case 1:
    case 2:
      return "bg-blue-50 text-blue-600";
    case 3:
      return "bg-white/10 text-white";
    case 4:
      return "bg-blue-100 text-blue-700";
    case 5:
      return "bg-white/20 text-white";
    default:
      return "bg-blue-50 text-blue-600";
  }
};

const getTextClass = (index: number) => {
  if (index === 0 || index === 3 || index === 5) return "text-white/80";
  return "text-slate-600";
};

export const EcommerceServices: React.FC = () => {
  return (
    <section className="py-16 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        <div className="absolute top-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">Our Process</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111118] tracking-tight"
          >
            How We Help Your <br className="hidden md:block" />
            <span className="text-gradient-blue">Online Store Grow</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "relative p-8 md:p-10 rounded-[32px] border overflow-hidden group hover:-translate-y-1 transition-all duration-300",
                getCardStyle(index)
              )}
            >
              {/* Large background number watermark */}
              <div className="absolute -right-4 -bottom-10 text-[150px] font-black opacity-[0.03] pointer-events-none leading-none select-none">
                0{index + 1}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110",
                  getIconStyle(index)
                )}>
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                <p className={cn("text-lg leading-relaxed mt-auto", getTextClass(index))}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
