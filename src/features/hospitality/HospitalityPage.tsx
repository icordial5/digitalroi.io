import React from 'react';
import { SEO } from '@/components/ui/SEO';
import { Layout } from '@/components/layout/Layout';
import { HospitalityHero } from './sections/HospitalityHero';
import { HospitalityServices } from './sections/HospitalityServices';
import { CTASection } from '../home/sections/CTASection';
import { CaseStudyCarousel } from '../home/sections/CaseStudyCarousel';
import { PartnersSection } from '../home/sections/PartnersSection';
import { GrowTogetherSection } from '../home/sections/GrowTogetherSection';

export const HospitalityPage: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="Hospitality Marketing for Bookings, MICE & Destination Wedding Leads" 
        description="Drive direct bookings, MICE and destination wedding inquiries with targeted campaigns and faster response systems."
        canonicalUrl="https://digitalroi.io/industries/hospitality-marketing"
        exactTitle={true}
      />
      
      <main className="bg-white">
        {/* 1st Fold */}
        <HospitalityHero />

        {/* 2nd Fold */}
        <HospitalityServices />

        {/* 3rd Fold */}
        <CTASection 
          title={
            <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
              <span className="block text-xl md:text-2xl font-semibold text-[#2D3748]">Most hospitality brands we work with see a</span>
              <span className="block text-5xl md:text-7xl font-extrabold text-gradient-blue leading-none py-2">30% to 50%</span>
              <span className="block text-xl md:text-2xl font-semibold text-[#2D3748] whitespace-normal md:whitespace-nowrap">increase in direct bookings within the first</span>
              <span className="block text-4xl md:text-5xl font-extrabold text-gradient-blue">90 days.</span>
            </div>
          }
          description={
            <>
              We use <strong className="text-[#002b59] font-semibold">tried-and-tested marketing strategies</strong> built specially for <strong className="text-[#002b59] font-semibold">hotels & resorts</strong> to bring real results - not just traffic.
            </>
          }
          formType="hospitality"
        />

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
