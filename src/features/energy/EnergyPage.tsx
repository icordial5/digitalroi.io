import React from 'react';
import { SEO } from '@/components/ui/SEO';
import { Layout } from '@/components/layout/Layout';
import { EnergyHero } from './sections/EnergyHero';
import { EnergyServices } from './sections/EnergyServices';
import { EnergyResults } from './sections/EnergyResults';
import { CTASection } from '../home/sections/CTASection';
import { CaseStudyCarousel } from '../home/sections/CaseStudyCarousel';
import { GrowTogetherSection } from '../home/sections/GrowTogetherSection';

export const EnergyPage: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="Solar Marketing for More Site Visits & Installations" 
        description="Increase Solar site visits and installations with high-intent campaigns and quick follow-ups. Reduce wasted leads and focus on serviceable inquiries."
        canonicalUrl="https://digitalroi.io/industries/solar-marketing"
        exactTitle={true}
      />
      
      <main className="bg-white">
        <EnergyHero />
        <EnergyServices />
        <EnergyResults />
        <CTASection 
          title={
            <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
              <span className="block text-xl md:text-2xl font-semibold text-[#2D3748]">Most Solar brands we work with see a</span>
              <span className="block text-5xl md:text-7xl font-extrabold text-gradient-blue leading-none py-2">30% to 50%</span>
              <span className="block text-xl md:text-2xl font-semibold text-[#2D3748] whitespace-normal md:whitespace-nowrap">jump in site visits within the first</span>
              <span className="block text-4xl md:text-5xl font-extrabold text-gradient-blue">90 days.</span>
            </div>
          }
          description={
            <>
              We use <strong className="text-[#002b59] font-semibold">tried-and-tested marketing strategies</strong> built specially for <strong className="text-[#002b59] font-semibold">Solar brands</strong> to bring real results - not just traffic.
            </>
          }
          formType="solar"
        />
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
