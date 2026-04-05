import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { JewelleryHero } from './sections/JewelleryHero';
import { JewelleryServices } from './sections/JewelleryServices';
import { JewelleryCTA } from './sections/JewelleryCTA';
import { CaseStudyCarousel } from '../home/sections/CaseStudyCarousel';
import { PartnersSection } from '../home/sections/PartnersSection';
import { GrowTogetherSection } from '../home/sections/GrowTogetherSection';

export const JewelleryPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Jewellery Marketing & Store Walk-In Solutions | Digital ROI</title>
        <meta name="description" content="Get more jewellery store walk-ins with performance marketing. We help jewellery brands bring nearby, high-intent buyers to the showroom." />
      </Helmet>
      
      <main className="bg-white">
        {/* 1st Fold */}
        <JewelleryHero />

        {/* 2nd Fold */}
        <JewelleryServices />

        {/* 3rd Fold */}
        <JewelleryCTA />

        {/* 4th Fold */}
        <CaseStudyCarousel 
          title="Growth of Our Client Is Our Motivation"
          ids={[7]} 
        />

        {/* 5th Fold */}
        <PartnersSection />

        {/* 6th Fold */}
        <GrowTogetherSection 
          title="Let's Grow Together."
          stat1Label="Happy Jewellery Clients"
          stat1Value={10}
          stat1Suffix="+"
          stat2Label="Monthly Ad Spend Managed"
          stat2Value={5}
          stat2Suffix="M+"
          stat2Prefix="₹"
          formType="jewellery"
        />
      </main>
    </Layout>
  );
};

export default JewelleryPage;
