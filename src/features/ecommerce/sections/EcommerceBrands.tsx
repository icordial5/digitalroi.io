import React from 'react';
import { cn } from '@/utils/cn';

const brands = [
  "https://ik.imagekit.io/digitalroipune/all-things-baby.png",
  "https://ik.imagekit.io/digitalroipune/bodywise.png",
  "https://ik.imagekit.io/digitalroipune/carolina.png",
  "https://ik.imagekit.io/digitalroipune/dan-henry.png",
  "https://ik.imagekit.io/digitalroipune/darveys.png",
  "https://ik.imagekit.io/digitalroipune/daughter-earth.png",
  "https://ik.imagekit.io/digitalroipune/dusaan.png",
  "https://ik.imagekit.io/digitalroipune/flossy.png",
  "https://ik.imagekit.io/digitalroipune/glen.png",
  "https://ik.imagekit.io/digitalroipune/kaya%20clinic.png",
  "https://ik.imagekit.io/digitalroipune/mcaffeine.png",
  "https://ik.imagekit.io/digitalroipune/sri-sri-tattva.png",
  "https://ik.imagekit.io/digitalroipune/studio-suits.png",
  "https://ik.imagekit.io/digitalroipune/the-kaatn-trail.png",
  "https://ik.imagekit.io/digitalroipune/traser-logo.png"
];

const LogoRow: React.FC<{ brands: string[], className?: string }> = ({ brands, className }) => (
  <div className={cn("logo-row-wrapper", className)}>
    <div className="logo-row">
      {[...brands, ...brands, ...brands].map((brand, i) => (
        <div key={i} className="logo-item">
          <img src={brand} alt="Brand Logo" referrerPolicy="no-referrer" />
        </div>
      ))}
    </div>
  </div>
);

export const EcommerceBrands: React.FC = () => {
  // Split brands into two rows for better scrolling effect
  const firstRow = brands.slice(0, 8);
  const secondRow = brands.slice(8);

  return (
    <section className="bg-white py-12 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#111118]">Trusted by Leading Online Brands</h2>
      </div>
      
      <div className="logo-scroll-section mt-8 flex flex-col gap-6">
        <LogoRow brands={firstRow} />
        <LogoRow brands={secondRow} />
      </div>
    </section>
  );
};
