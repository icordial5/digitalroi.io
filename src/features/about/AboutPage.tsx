import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { AboutHero } from './sections/AboutHero';
import { AboutApproach } from './sections/AboutApproach';
import { PartnersSection } from '../home/sections/PartnersSection';
import { GrowTogetherSection } from '../home/sections/GrowTogetherSection';

export const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us | Digital ROI - Full-Funnel Performance Marketing Agency</title>
        <meta name="description" content="Learn more about Digital ROI, our mission to help brands generate high-quality leads, and our vision to be the most trusted growth partner." />
      </Helmet>
      
      <main className="bg-white">
        {/* 1st Fold - Hero */}
        <AboutHero />

        {/* 2nd Fold - Approach, Mission, Vision */}
        <AboutApproach />

        {/* 3rd Fold - Official Partners */}
        <PartnersSection />

        {/* 4th Fold - Let's Grow Together */}
        <GrowTogetherSection 
          title="Let's Grow Together."
          stat1Label="Campaigns Managed"
          stat1Value={500}
          stat1Suffix="+"
          stat2Label="Revenue Generated"
          stat2Value={10}
          stat2Suffix="Cr+"
        />
      </main>
    </Layout>
  );
};

export default AboutPage;
