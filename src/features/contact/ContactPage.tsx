import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { ContactHero } from './sections/ContactHero';
import { ContactMap } from './sections/ContactMap';
import { PartnersSection } from '../home/sections/PartnersSection';
import { GrowTogetherSection } from '../home/sections/GrowTogetherSection';

export const ContactPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Digital ROI - Get a Free Consultation</title>
        <meta name="description" content="Get in touch with Digital ROI for a free consultation. Our team will help you build a full-funnel growth system for your brand." />
      </Helmet>
      
      <main className="bg-white">
        {/* 1st Fold - Hero with Form */}
        <ContactHero />

        {/* 2nd Fold - Location Map */}
        <ContactMap />

        {/* 3rd Fold - Official Partners */}
        <PartnersSection />

        {/* 4th Fold - Let's Grow Together */}
        <GrowTogetherSection 
          title="Let's Grow Together."
          stat1Label="Client Satisfaction"
          stat1Value={98}
          stat1Suffix="%"
          stat2Label="Support Response"
          stat2Value={24}
          stat2Suffix="h"
        />
      </main>
    </Layout>
  );
};

export default ContactPage;
