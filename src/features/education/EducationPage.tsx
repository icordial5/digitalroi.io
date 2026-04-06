import React from 'react';
import { SEO } from '@/components/ui/SEO';
import { Layout } from '@/components/layout/Layout';
import { EducationHero } from './sections/EducationHero';
import { ServicesSection } from '../home/sections/ServicesSection';
import { CTASection } from '../home/sections/CTASection';
import { CaseStudyCarousel } from '../home/sections/CaseStudyCarousel';
import { PartnersSection } from '../home/sections/PartnersSection';
import { GrowTogetherSection } from '../home/sections/GrowTogetherSection';

export const EducationPage: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="Education Marketing for More Admission Inquiries" 
        description="Generate more admission inquiries with better targeting and timely follow-ups. Built for schools and institutes looking to improve conversions."
        canonicalUrl="https://digitalroi.io/industries/education-marketing"
        exactTitle={true}
      />
      
      <main className="bg-white">
        {/* 1st Fold */}
        <EducationHero />

        {/* 2nd Fold */}
        <ServicesSection />

        {/* 3rd Fold */}
        <CTASection 
          title={
            <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
              <span className="block text-xl md:text-2xl font-semibold text-[#2D3748]">Most educational institutions we work with see a</span>
              <span className="block text-5xl md:text-7xl font-extrabold text-gradient-blue leading-none py-2">30% to 50%</span>
              <span className="block text-xl md:text-2xl font-semibold text-[#2D3748] whitespace-normal md:whitespace-nowrap">increase in applications within the first</span>
              <span className="block text-4xl md:text-5xl font-extrabold text-gradient-blue">90 days.</span>
            </div>
          }
          description={
            <>
              We use <strong className="text-[#002b59] font-semibold">tried-and-tested marketing strategies</strong> built specially for <strong className="text-[#002b59] font-semibold">institutes</strong> to bring real results - not just traffic.
            </>
          }
          formType="education"
        />

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
