import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { EnergyHero } from './sections/EnergyHero';
import { EnergyServices } from './sections/EnergyServices';
import { EnergyResults } from './sections/EnergyResults';
import { CaseStudyCarousel } from '../home/sections/CaseStudyCarousel';
import { GrowTogetherSection } from '../home/sections/GrowTogetherSection';

export const EnergyPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Solar Energy Marketing Solutions | Digital ROI</title>
        <meta name="description" content="Precision-targeted lead generation and CRM automation for Solar brands. Scale your solar business with performance-driven marketing." />
      </Helmet>
      
      <main className="bg-white">
        <EnergyHero />
        <EnergyServices />
        <EnergyResults />
        <CaseStudyCarousel ids={[6, 5, 8]} />
        <GrowTogetherSection 
          title="Let's Grow Together."
          stat1Label="Happy Solar Clients"
          stat1Value={40}
          stat1Suffix="+"
          stat2Label="Monthly Ad Spend Managed"
          stat2Value={50}
          stat2Suffix="M +"
          stat2Prefix="₹ "
          formType="solar"
        />
      </main>
    </Layout>
  );
};

export default EnergyPage;
