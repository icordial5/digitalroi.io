import React from 'react';
import { SEO } from '@/components/ui/SEO';
import { Layout } from '@/components/layout/Layout';
import { CRMHero } from './sections/CRMHero';
import { CRMFramework } from './sections/CRMFramework';
import { BusinessAutomation } from './sections/BusinessAutomation';
import { CTASection } from '../home/sections/CTASection';
import { CaseStudyCarousel } from '../home/sections/CaseStudyCarousel';
import { PartnersSection } from '../home/sections/PartnersSection';
import { GrowTogetherSection } from '../home/sections/GrowTogetherSection';

export const CRMAutomationPage: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="CRM Automation for Lead Tracking & Follow-ups" 
        description="Capture every lead, automate follow-ups, and track conversions with CRM automation. Improve response time and turn more leads into customers."
        canonicalUrl="https://digitalroi.io/crm-automation"
        exactTitle={true}
      />
      
      <main className="bg-white">
        {/* 1st Fold - Hero with Quiz */}
        <CRMHero />

        {/* 2nd Fold - Framework */}
        <CRMFramework />

        {/* 3rd Fold - Business Automation */}
        <BusinessAutomation />

        {/* 4th Fold - CTA */}
        <CTASection 
          title={
            <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
              <span className="block text-xl md:text-2xl font-semibold text-[#2D3748]">Most brands we work with see a</span>
              <span className="block text-5xl md:text-7xl font-extrabold text-gradient-blue leading-none py-2">30% to 50%</span>
              <span className="block text-xl md:text-2xl font-semibold text-[#2D3748] whitespace-normal md:whitespace-nowrap">jump in efficiency within the first</span>
              <span className="block text-4xl md:text-5xl font-extrabold text-gradient-blue">90 days.</span>
            </div>
          }
          description={
            <>
              We use <strong className="text-[#002b59] font-semibold">tried-and-tested CRM strategies</strong> built specially for <strong className="text-[#002b59] font-semibold">sales teams</strong> to bring real results - not just automation.
            </>
          }
          formType="crm"
        />

        {/* 5th Fold - Case Studies */}
        <CaseStudyCarousel 
          title="Growth of Our Client Is Our Motivation"
          ids={[1, 2, 3]} // Using generic IDs for now
        />

        {/* 6th Fold - Partners */}
        <PartnersSection />

        {/* 7th Fold - Grow Together */}
        <GrowTogetherSection 
          title="Let's Grow Together."
          stat1Label="CRM Implementations"
          stat1Value={50}
          stat1Suffix="+"
          stat2Label="Monthly Leads Automated"
          stat2Value={100}
          stat2Suffix="K+"
        />
      </main>
    </Layout>
  );
};

export default CRMAutomationPage;
