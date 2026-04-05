import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { EducationHero } from './sections/EducationHero';
import { ServicesSection } from '../home/sections/ServicesSection';
import { EducationCTA } from './sections/EducationCTA';
import { CaseStudyCarousel } from '../home/sections/CaseStudyCarousel';
import { PartnersSection } from '../home/sections/PartnersSection';
import { GrowTogetherSection } from '../home/sections/GrowTogetherSection';

export const EducationPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Education Marketing & Admission Growth Solutions | Digital ROI</title>
        <meta name="description" content="Increase admissions with performance-driven educational marketing. We help institutions grow with precision targeting and automated lead nurturing." />
      </Helmet>
      
      <main className="bg-white">
        {/* 1st Fold */}
        <EducationHero />

        {/* 2nd Fold */}
        <ServicesSection />

        {/* 3rd Fold */}
        <EducationCTA />

        {/* 4th Fold */}
        <CaseStudyCarousel 
          title="Growth of Our Client Is Our Motivation"
          ids={[9]} 
        />

        {/* 5th Fold */}
        <PartnersSection />

        {/* 6th Fold */}
        <GrowTogetherSection 
          title="Let's Grow Together."
          stat1Label="Happy Education Clients"
          stat1Value={20}
          stat1Suffix="+"
          stat2Label="Monthly Ad Spend Managed"
          stat2Value={30}
          stat2Suffix="M+"
          stat2Prefix="₹"
          formType="education"
        />
      </main>
    </Layout>
  );
};

export default EducationPage;
