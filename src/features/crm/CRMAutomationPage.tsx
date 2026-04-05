import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { CRMHero } from './sections/CRMHero';
import { CRMFramework } from './sections/CRMFramework';
import { BusinessAutomation } from './sections/BusinessAutomation';
import { CRMCTA } from './sections/CRMCTA';
import { CaseStudyCarousel } from '../home/sections/CaseStudyCarousel';
import { PartnersSection } from '../home/sections/PartnersSection';
import { GrowTogetherSection } from '../home/sections/GrowTogetherSection';

export const CRMAutomationPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>CRM Automation & Sales Process Optimization | Digital ROI</title>
        <meta name="description" content="Improve your sales process by 30%+ with automated CRM workflows and reporting. We help you actually use your CRM to drive revenue." />
      </Helmet>
      
      <main className="bg-white">
        {/* 1st Fold - Hero with Quiz */}
        <CRMHero />

        {/* 2nd Fold - Framework */}
        <CRMFramework />

        {/* 3rd Fold - Business Automation */}
        <BusinessAutomation />

        {/* 4th Fold - CTA */}
        <CRMCTA />

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
