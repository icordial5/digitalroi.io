import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/utils/cn';
import { useModal } from '@/context/ModalContext';

interface Phase {
  id: string;
  label: string;
  name: string;
  title: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
  introText?: string;
  deliverables: string[];
  extraLists?: { title: string; items: string[] }[];
}

const phases: Phase[] = [
  {
    id: 'phase1',
    label: 'Phase 1',
    name: 'Discovery',
    title: 'CRM Discovery & Process Mapping',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    image: 'https://ik.imagekit.io/digitalroipune/CRM-Discovery-Process-Mapping.png',
    features: [
      'Business and sales process understanding workshops',
      'Lead journey mapping (Lead → Conversion)',
      'Identification of decision points, bottlenecks, and drop-offs',
      'Definition of qualified lead criteria and conversion milestones'
    ],
    deliverables: [
      'Documented lead & sales flow',
      'Recommended CRM structure and automation blueprint'
    ]
  },
  {
    id: 'phase2',
    label: 'Phase 2',
    name: 'CRM Setup',
    title: 'CRM Setup & Configuration',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <path d="M9 3v18"></path>
      </svg>
    ),
    image: 'https://ik.imagekit.io/digitalroipune/CRM-Setup-Configuration.png',
    features: [
      'CRM account setup and configuration (Zoho / HubSpot / equivalent)',
      'User roles, permissions, and access controls',
      'Creation of sales pipelines and deal stages (vertical-specific)',
      'Custom fields setup for lead qualification, tracking, and reporting'
    ],
    deliverables: [
      'Fully configured CRM environment',
      'Custom pipelines and fields aligned to business model'
    ]
  },
  {
    id: 'phase3',
    label: 'Phase 3',
    name: 'Lead Capture',
    title: 'Lead Capture & Integration',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
    image: 'https://ik.imagekit.io/digitalroipune/Lead-Capture-Integration.png',
    introText: 'Integration of CRM with:',
    features: [
      'Website lead forms / landing pages',
      'Meta Lead Ads',
      'Google Ads / web forms',
      'WhatsApp (where applicable)',
      'Automatic lead source and campaign tagging'
    ],
    deliverables: [
      'Unified lead capture system',
      'Accurate source-level lead tracking'
    ]
  },
  {
    id: 'phase4',
    label: 'Phase 4',
    name: 'Lead Routing',
    title: 'Lead Routing & Assignment Automation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    image: 'https://ik.imagekit.io/digitalroipune/Lead-Routing-Assignment-Automation.png',
    features: [
      'City / branch / product-based lead routing rules',
      'Round-robin or priority-based lead distribution',
      'High-intent or high-value lead escalation rules'
    ],
    deliverables: [
      'Automated lead assignment workflows',
      'Reduced response time and manual effort'
    ]
  },
  {
    id: 'phase5',
    label: 'Phase 5',
    name: 'Task & SLA',
    title: 'Task, SLA & Follow-up Automation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 11l3 3L22 4"></path>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    ),
    image: 'https://ik.imagekit.io/digitalroipune/Task-SLA-Follow-up-Automation.png',
    features: [
      'Auto task creation on lead and deal events',
      'SLA timers for first contact and follow-ups',
      'Escalation alerts for unattended or overdue leads',
      'Daily task summaries for sales teams'
    ],
    deliverables: [
      'Structured sales follow-up system',
      'SLA adherence visibility'
    ]
  },
  {
    id: 'phase6',
    label: 'Phase 6',
    name: 'Communication',
    title: 'Communication Automation (CRM-led)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
    image: 'https://ik.imagekit.io/digitalroipune/Communication-Automation-CRM-led.png',
    features: [],
    extraLists: [
      {
        title: 'WhatsApp automation triggers from CRM:',
        items: [
          'New lead acknowledgement',
          'Appointment confirmations and reminders',
          'No-show and drop-off recovery'
        ]
      },
      {
        title: 'Email automation for:',
        items: [
          'Lead nurturing',
          'Proposal follow-ups',
          'Re-engagement campaigns'
        ]
      }
    ],
    deliverables: [
      'Automated communication workflows',
      'Improved lead nurturing and conversion'
    ]
  },
  {
    id: 'phase7',
    label: 'Phase 7',
    name: 'Pipeline',
    title: 'Deal & Pipeline Automation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    image: 'https://ik.imagekit.io/digitalroipune/Clean-and-accurate-sales-pipeline.png',
    features: [
      'Automatic deal stage movement based on actions',
      'Trigger-based task creation for next sales steps',
      'Lost deal reason tracking and tagging'
    ],
    deliverables: [
      'Clean and accurate sales pipeline',
      'Action-driven deal progression'
    ]
  },
  {
    id: 'phase8',
    label: 'Phase 8',
    name: 'Reporting',
    title: 'Reporting & Dashboards',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
    image: 'https://ik.imagekit.io/digitalroipune/Reporting-Dashboards.png',
    introText: 'CRM dashboards for:',
    features: [
      'Lead volume by source',
      'Lead-to-appointment conversion',
      'Appointment-to-sale conversion',
      'Sales representative performance',
      'Pipeline aging and revenue visibility',
      'Optional Looker Studio dashboards for advanced attribution'
    ],
    deliverables: [
      'Real-time performance dashboards',
      'Founder and management-level reporting'
    ]
  }
];

export const CRMFramework: React.FC = () => {
  const [activeTab, setActiveTab] = useState('phase1');
  const { openModal } = useModal();

  const activePhase = phases.find((p) => p.id === activeTab) || phases[0];

  return (
    <section className="bg-white">
      {/* Header Section */}
      <div className="bg-slate-50 py-12 px-6 md:px-16 text-center border-b border-slate-100">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[42px] font-bold text-[#111118] mb-4 leading-tight tracking-tight"
        >
          Our CRM Automation Delivery Framework
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 max-w-[800px] mx-auto leading-relaxed"
        >
          Transform your sales operations from manual chaos to an automated, reporting-ready revenue engine
        </motion.p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center items-start gap-5 py-10 px-5 bg-white border-b border-slate-100">
        {phases.map((phase) => (
          <button
            key={phase.id}
            onClick={() => setActiveTab(phase.id)}
            className={cn(
              "flex flex-col items-center gap-3 p-2.5 transition-all duration-300 min-w-[120px] group outline-none",
              activeTab === phase.id ? "active" : ""
            )}
          >
            <div className={cn(
              "w-[70px] h-[70px] rounded-full border-2 flex items-center justify-center transition-all duration-400",
              activeTab === phase.id 
                ? "bg-[#111118] border-[#111118] scale-110 shadow-lg" 
                : "bg-slate-50 border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-md"
            )}>
              <div className={cn(
                "transition-all duration-400",
                activeTab === phase.id ? "text-white scale-110" : "text-slate-400 group-hover:text-blue-600 group-hover:scale-110"
              )}>
                {phase.icon}
              </div>
            </div>
            <div className="text-center">
              <div className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.5px] mb-0.5 transition-colors duration-300",
                activeTab === phase.id ? "text-blue-600 font-bold" : "text-slate-400 group-hover:text-blue-600"
              )}>
                {phase.label}
              </div>
              <div className={cn(
                "text-[13px] font-semibold transition-colors duration-300",
                activeTab === phase.id ? "text-[#111118] font-bold" : "text-slate-600 group-hover:text-blue-600"
              )}>
                {phase.name}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Tab Content Wrapper */}
      <div className="relative min-h-[600px] w-full overflow-hidden bg-slate-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 py-12 px-6 md:px-16 max-w-[1400px] mx-auto items-start">
              {/* Image Section */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full"
              >
                <img 
                  src={activePhase.image} 
                  alt={activePhase.title} 
                  className="w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.01] transition-transform duration-300 block border border-slate-100"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Text Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-slate-100"
              >
                <div className="text-[13px] font-bold tracking-[2px] text-blue-600 mb-2.5 uppercase">
                  {activePhase.label}
                </div>
                <h2 className="text-[32px] font-bold mb-5 leading-[1.2] text-[#111118]">
                  {activePhase.title}
                </h2>

                {activePhase.introText && (
                  <p className="text-[15px] mb-2.5 text-slate-700 font-bold">{activePhase.introText}</p>
                )}

                {activePhase.features.length > 0 && (
                  <ul className="list-none m-0 p-0 mb-6">
                    {activePhase.features.map((feature, i) => (
                      <li key={i} className="relative pl-[26px] py-2 text-sm leading-[1.5] text-slate-600">
                        <span className="absolute left-0 font-bold text-base text-blue-600">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {activePhase.extraLists?.map((list, i) => (
                  <div key={i} className="mb-6 last:mb-0">
                    <p className="text-[15px] mb-2.5 text-slate-700 font-bold">{list.title}</p>
                    <ul className="list-none m-0 p-0">
                      {list.items.map((item, j) => (
                        <li key={j} className="relative pl-[26px] py-1.5 text-sm leading-[1.5] text-slate-600">
                          <span className="absolute left-0 font-bold text-base text-blue-600">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="bg-slate-50 p-[18px] rounded-2xl mt-1.5 border-l-4 border-blue-600">
                  <h3 className="text-[15px] font-bold mb-2.5 uppercase tracking-[1px] text-[#111118]">
                    Deliverables:
                  </h3>
                  <ul className="list-none m-0 p-0">
                    {activePhase.deliverables.map((item, i) => (
                      <li key={i} className="relative pl-[22px] py-1 text-[13px] leading-[1.5] text-slate-600">
                        <span className="absolute left-0 font-bold text-[15px] text-blue-600">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button 
                    onClick={() => openModal('crm_automation')}
                    className="btn-primary w-full !py-4"
                  >
                    GET FREE CRM AUDIT
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
