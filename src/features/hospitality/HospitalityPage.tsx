import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { HospitalityHero } from './sections/HospitalityHero';
import { HospitalityServices } from './sections/HospitalityServices';
import { HospitalityCTA } from './sections/HospitalityCTA';
import { CaseStudyCarousel } from '../home/sections/CaseStudyCarousel';
import { PartnersSection } from '../home/sections/PartnersSection';
import { GrowTogetherSection } from '../home/sections/GrowTogetherSection';

export const HospitalityPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Hospitality Marketing & Direct Booking Solutions | Digital ROI</title>
        <meta name="description" content="Get more direct bookings, MICE & wedding enquiries with performance marketing. We help hotels and resorts drive revenue through smart targeting." />
      </Helmet>
      
      <main className="bg-white">
        {/* 1st Fold */}
        <HospitalityHero />

        {/* 2nd Fold */}
        <HospitalityServices />

        {/* 3rd Fold */}
        <HospitalityCTA />

        {/* 5th Fold (User requested carousel here) */}
        <CaseStudyCarousel 
          title="Growth of Our Client Is Our Motivation"
          ids={[6, 5, 8]} 
        />

        {/* 6th Fold */}
        <PartnersSection />

        {/* 7th Fold */}
        <GrowTogetherSection 
          title="Let's Grow Together."
          stat1Label="Happy Hospitality Clients"
          stat1Value={10}
          stat1Suffix="+"
          stat2Label="Monthly Ad Spend Managed"
          stat2Value={8}
          stat2Suffix="M+"
          stat2Prefix="₹"
          formType="hospitality"
        />
      </main>
    </Layout>
  );
};

export default HospitalityPage;
