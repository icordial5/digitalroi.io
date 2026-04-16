import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { EcommerceHero } from './sections/EcommerceHero';
import { EcommerceBrands } from './sections/EcommerceBrands';
import { EcommerceServices } from './sections/EcommerceServices';
import { EcommerceLinkedInPosts } from './sections/EcommerceLinkedInPosts';
import { CTASection } from '../home/sections/CTASection';
import { TestimonialsSection } from '../home/sections/TestimonialsSection';
import { CaseStudyCarousel } from '../home/sections/CaseStudyCarousel';
import { PartnersSection } from '../home/sections/PartnersSection';
import { GrowTogetherSection } from '../home/sections/GrowTogetherSection';
import { VideoModal } from '../home/components/VideoModal';

const EcommercePage: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <Layout>
      <Helmet>
        <title>Ecommerce Marketing Services | Digital ROI</title>
        <meta name="description" content="Increase traffic and get more revenue with smart marketing strategies for your online store." />
      </Helmet>

      <EcommerceHero />
      <EcommerceBrands />
      <EcommerceServices />
      <EcommerceLinkedInPosts />
      
      <CTASection 
        title={
          <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
            <span className="block text-xl md:text-2xl font-semibold text-[#2D3748]">Most brands we work with see a</span>
            <span className="block text-5xl md:text-7xl font-extrabold text-gradient-blue leading-none py-2">30% to 50%</span>
            <span className="block text-xl md:text-2xl font-semibold text-[#2D3748] whitespace-normal md:whitespace-nowrap">increase in online sales within</span>
            <span className="block text-4xl md:text-5xl font-extrabold text-gradient-blue">90 days.</span>
          </div>
        }
        description={
          <>
            <strong className="text-[#002b59] font-semibold">Our strategies are built to grow your online store</strong>, turning traffic into real sales.
          </>
        }
        buttonText="Let's Grow Your Business"
        formType="ecommerce"
      />

      <TestimonialsSection onPlayVideo={setActiveVideo} />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudyCarousel 
            title="Growth of Our Client Is Our Motivation" 
            industry="ecommerce" 
          />
        </div>
      </section>

      <PartnersSection />
      <GrowTogetherSection formType="ecommerce" />
      <VideoModal videoUrl={activeVideo} onClose={() => setActiveVideo(null)} />
    </Layout>
  );
};

export default EcommercePage;
