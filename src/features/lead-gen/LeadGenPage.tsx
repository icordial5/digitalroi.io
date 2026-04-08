import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/ui/SEO';
import { LeadGenHero } from './sections/LeadGenHero';
import { LeadGenLogos } from './sections/LeadGenLogos';
import { LeadGenServices } from './sections/LeadGenServices';
import { LeadGenSolutions } from './sections/LeadGenSolutions';
import { CTASection } from '../home/sections/CTASection';
import { TestimonialsSection } from '../home/sections/TestimonialsSection';
import { CaseStudyCarousel } from '../home/sections/CaseStudyCarousel';
import { PartnersSection } from '../home/sections/PartnersSection';
import { GrowTogetherSection } from '../home/sections/GrowTogetherSection';
import { VideoModal } from '../home/components/VideoModal';

const LeadGenPage: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <Layout>
      <SEO 
        title="Lead Generation & E-commerce Marketing | Digital ROI" 
        description="Get more revenue with qualified leads and online sales. Helping businesses grow through smart targeting and automation."
        canonicalUrl="https://digitalroi.io/lead-generation"
        exactTitle={true}
      />
      
      <LeadGenHero />
      <LeadGenLogos />
      <LeadGenServices />
      
      <CTASection 
        title={
          <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
            <span className="block text-xl md:text-2xl font-semibold text-[#2D3748]">Most brands we partner with see a</span>
            <span className="block text-5xl md:text-7xl font-extrabold text-gradient-blue leading-none py-2">30% to 50%</span>
            <span className="block text-xl md:text-2xl font-semibold text-[#2D3748] whitespace-normal md:whitespace-nowrap">increase in leads or sales within</span>
            <span className="block text-4xl md:text-5xl font-extrabold text-gradient-blue">90 days.</span>
          </div>
        }
        description={
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-slate-600">
              <strong className="text-[#002b59] font-semibold">We get you more revenue</strong> with strategies that generate high-quality leads and increase e-commerce sales.
            </p>
          </div>
        }
        buttonText="Let's Make Growth Happen"
        formType="lead_gen"
      />

      <LeadGenSolutions />

      <TestimonialsSection onPlayVideo={setActiveVideo} />
      
      <CaseStudyCarousel title="Growth of Our Client Is Our Motivation" />
      
      <PartnersSection />
      <GrowTogetherSection formType="lead_gen" />
      
      <VideoModal videoUrl={activeVideo} onClose={() => setActiveVideo(null)} />
    </Layout>
  );
};

export default LeadGenPage;
