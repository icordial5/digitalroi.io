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
        title="Full Funnel Marketing Agency - Turn Leads into Revenue" 
        description="Full funnel marketing focused on turning leads into revenue. Improve lead quality, speed up follow-ups, and fix gaps between marketing and conversions."
        canonicalUrl="https://digitalroi.io/"
        exactTitle={true}
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
