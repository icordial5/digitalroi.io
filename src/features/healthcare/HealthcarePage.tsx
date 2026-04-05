import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { HealthcareHero } from './sections/HealthcareHero';
import { HealthcareComparison } from './sections/HealthcareComparison';
import { HealthcareGrowthSteps } from './sections/HealthcareGrowthSteps';
import { HealthcareResults } from './sections/HealthcareResults';
import { HealthcareProblem } from './sections/HealthcareProblem';
import { HealthcareSolution } from './sections/HealthcareSolution';
import { HealthcareJourneyAnalysis } from './sections/HealthcareJourneyAnalysis';
import { PartnersSection } from '../home/sections/PartnersSection';
import { TestimonialsSection } from '../home/sections/TestimonialsSection';
import { CaseStudyCarousel } from '../home/sections/CaseStudyCarousel';
import { GrowTogetherSection } from '../home/sections/GrowTogetherSection';
import { VideoModal } from '../home/components/VideoModal';

export const HealthcarePage: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <Layout>
      <Helmet>
        <title>Healthcare Marketing & Patient Growth Solutions | Digital ROI</title>
        <meta name="description" content="Increase your OPD without increasing ad spend. We help hospitals and clinics turn enquiries into patient walk-ins with our proven Patient Revenue Engine." />
      </Helmet>
      
      <main className="bg-white">
        {/* 1st Fold */}
        <HealthcareHero />

        {/* 2nd Fold */}
        <HealthcareComparison />

        {/* 3rd Fold */}
        <HealthcareGrowthSteps />

        {/* 4th Fold */}
        <HealthcareResults />

        {/* 5th Fold */}
        <HealthcareProblem />

        {/* 6th Fold */}
        <HealthcareSolution />

        {/* 7th Fold */}
        <TestimonialsSection onPlayVideo={setActiveVideo} />

        {/* 8th Fold */}
        <CaseStudyCarousel ids={[3, 4, 1, 2]} />

        {/* 9th Fold */}
        <HealthcareJourneyAnalysis />

        {/* 10th Fold */}
        <PartnersSection />

        {/* 11th Fold */}
        <GrowTogetherSection 
          title="Let's Grow Together."
          stat1Label="Happy Healthcare Clients"
          stat1Value={30}
          stat1Suffix="+"
          stat2Label="Monthly Ad Spend Managed"
          stat2Value={30}
          stat2Suffix="M+"
          stat2Prefix="₹"
          formType="healthcare"
        />

        <VideoModal videoUrl={activeVideo} onClose={() => setActiveVideo(null)} />
      </main>
    </Layout>
  );
};

export default HealthcarePage;
