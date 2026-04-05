import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/ui/SEO';
import { HeroSection } from './sections/HeroSection';
import { TrustedLogosSection } from './sections/TrustedLogosSection';
import { ServicesSection } from './sections/ServicesSection';
import { CTASection } from './sections/CTASection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { CaseStudyCarousel } from './sections/CaseStudyCarousel';
import { PartnersSection } from './sections/PartnersSection';
import { GrowTogetherSection } from './sections/GrowTogetherSection';
import { VideoModal } from './components/VideoModal';

const Home: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <Layout>
      <SEO 
        title="Lead Generation & CRM Automation" 
        description="Digital ROI helps brands grow with full-funnel performance marketing that generates, qualifies, and nurtures leads into revenue."
      />
      <HeroSection />
      <TrustedLogosSection />
      <ServicesSection />
      <CTASection />
      <TestimonialsSection onPlayVideo={setActiveVideo} />
      <CaseStudyCarousel />
      <PartnersSection />
      <GrowTogetherSection />
      <VideoModal videoUrl={activeVideo} onClose={() => setActiveVideo(null)} />
    </Layout>
  );
};

export default Home;
