import React from 'react';
import { SEO } from '@/components/ui/SEO';
import { Layout } from '@/components/layout/Layout';
import { JewelleryHero } from './sections/JewelleryHero';
import { JewelleryServices } from './sections/JewelleryServices';
import { CTASection } from '../home/sections/CTASection';
import { CaseStudyCarousel } from '../home/sections/CaseStudyCarousel';
import { PartnersSection } from '../home/sections/PartnersSection';
import { GrowTogetherSection } from '../home/sections/GrowTogetherSection';

export const JewelleryPage: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="Jewellery Marketing for Premium Leads & Store Walk-ins" 
        description="Bring in premium leads and store walk-ins with high-intent targeting and consistent follow-ups. Built for jewellery brands focused on conversions."
        canonicalUrl="https://digitalroi.io/industries/jewellery-marketing"
        exactTitle={true}
      />
      
      <main className="bg-white">
        {/* 1st Fold */}
        <JewelleryHero />

        {/* 2nd Fold */}
        <JewelleryServices />

        {/* 3rd Fold */}
        <CTASection 
          title={
            <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
              <span className="block text-xl md:text-2xl font-semibold text-[#2D3748]">Most jewellery brands we work with see a</span>
              <span className="block text-5xl md:text-7xl font-extrabold text-gradient-blue leading-none py-2">30% to 50%</span>
              <span className="block text-xl md:text-2xl font-semibold text-[#2D3748] whitespace-normal md:whitespace-nowrap">increase in store walk-ins within the first</span>
              <span className="block text-4xl md:text-5xl font-extrabold text-gradient-blue">90 days.</span>
            </div>
          }
          description={
            <>
              We use <strong className="text-[#002b59] font-semibold">tried-and-tested marketing strategies</strong> built specially for <strong className="text-[#002b59] font-semibold">jewellery brands</strong> to bring real results - not just traffic.
            </>
          }
          formType="jewellery"
        />

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
