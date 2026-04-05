import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';

const steps = [
  {
    title: "Reach Patients Who Are Already Searching",
    desc: "We run targeted campaigns on Google, Meta, and LinkedIn to connect you with people actively looking for your treatments - helping you get better quality patient enquiries, not just more leads.",
    image: "https://ik.imagekit.io/digitalroipune/Perf.-Marketing.gif",
    imageLeft: true
  },
  {
    title: "Creatives That Build Trust & Get Action",
    desc: "In healthcare, trust matters. We create simple, clear, and impactful creatives that grab attention and encourage patients to take the next step - helping improve response and enquiry rates.",
    image: "https://ik.imagekit.io/digitalroipune/Creative.gif",
    imageLeft: false
  },
  {
    title: "Landing Pages That Convert Visitors Into Appointments",
    desc: "We design fast, easy-to-understand pages that clearly explain your services and make it simple for patients to book an appointment without confusion.",
    image: "https://ik.imagekit.io/digitalroipune/Landing-Page.gif",
    imageLeft: true
  },
  {
    title: "Instant WhatsApp Follow-Ups",
    desc: "Patients don’t like waiting. We set up automated WhatsApp responses so every enquiry is answered instantly - increasing your chances of converting them into actual visits.",
    image: "https://ik.imagekit.io/digitalroipune/WhatsApp-Automation.gif",
    imageLeft: false
  },
  {
    title: "CRM Systems That Ensure No Patient Is Missed",
    desc: "We help you track every enquiry and automate follow-ups, so no potential patient slips through the cracks and your team can focus on conversions.",
    image: "https://ik.imagekit.io/digitalroipune/CRM-Automation.gif",
    imageLeft: true
  },
  {
    title: "Clear Data to Improve Patient Conversion",
    desc: "We show you exactly what’s working and where patients are dropping off - so you can make better decisions and continuously improve your results.",
    image: "https://ik.imagekit.io/digitalroipune/Data-Tracking.gif",
    imageLeft: false
  }
];

export const HealthcareGrowthSteps: React.FC = () => {
  return (
    <section 
      className="py-16 relative bg-[#F8FAFC]"
      style={{ 
        backgroundImage: 'url(https://ik.imagekit.io/digitalroipune/hero-bg-shape.png)',
        backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <Sparkles className="w-8 h-8 text-[#084E96]" />
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">How Patient Growth Happens</h2>
        </motion.div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              className={`flex flex-col ${step.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: step.imageLeft ? -50 : 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="w-full md:w-1/2"
              >
                <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 bg-white">
                  <img src={step.image} alt={step.title} className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
                </div>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: step.imageLeft ? 50 : -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="w-full md:w-1/2"
              >
                <div className="relative">
                  <div className={cn("absolute w-40 h-40 bg-[#F5F3FF] rounded-3xl -z-10", step.imageLeft ? "-bottom-6 -left-6" : "-bottom-6 -right-6")} />
                  <div 
                    className={cn("p-10 md:p-12 text-white shadow-xl", step.imageLeft ? "rounded-3xl rounded-bl-[4rem]" : "rounded-3xl rounded-br-[4rem]")}
                    style={{ backgroundImage: 'linear-gradient(100deg, #084E96 0%, #2a81e3 100%)' }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-white/90 leading-relaxed text-base md:text-lg">{step.desc}</p>
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
