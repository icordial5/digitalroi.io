import React from 'react';

const leadGenLogos = [
  "https://ik.imagekit.io/digitalroipune/solar-square.png",
  "https://ik.imagekit.io/digitalroipune/care-hospitals.png",
  "https://ik.imagekit.io/digitalroipune/jamboree.png",
  "https://ik.imagekit.io/digitalroipune/repos-energy.png",
  "https://ik.imagekit.io/digitalroipune/tata-1mg.png",
  "https://ik.imagekit.io/digitalroipune/Walnut-School.png",
  "https://ik.imagekit.io/digitalroipune/enerparc.png",
  "https://ik.imagekit.io/digitalroipune/amaha.png",
  "https://ik.imagekit.io/digitalroipune/excelr.png"
];

const ecommerceLogos = [
  "https://ik.imagekit.io/digitalroipune/all-things-baby.png",
  "https://ik.imagekit.io/digitalroipune/bodywise.png",
  "https://ik.imagekit.io/digitalroipune/Sri-Krishna-Jewellers.png",
  "https://ik.imagekit.io/digitalroipune/darveys.png",
  "https://ik.imagekit.io/digitalroipune/mcaffeine.png",
  "https://ik.imagekit.io/digitalroipune/lajoya.png",
  "https://ik.imagekit.io/digitalroipune/dusaan.png",
  "https://ik.imagekit.io/digitalroipune/sri-sri-tattva.png",
  "https://ik.imagekit.io/digitalroipune/studio-suits.png"
];

const LogoRow: React.FC<{ title: string; logos: string[] }> = ({ title, logos }) => (
  <div className="logo-row-wrapper">
    <div className="category-title">{title}</div>
    <div className="logo-row">
      {[...logos, ...logos].map((logo, i) => (
        <div key={i} className="logo-item">
          <img src={logo} alt="" referrerPolicy="no-referrer" />
        </div>
      ))}
    </div>
  </div>
);

export const LeadGenLogos: React.FC = () => {
  return (
    <section className="bg-white py-16 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111118] mb-4">Trusted by Leading Brands Across Industries</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          From Lead Generation to E-Commerce, we help brands grow through targeted marketing solutions.
        </p>
      </div>
      
      <div className="logo-scroll-section">
        <LogoRow title="Lead Generation" logos={leadGenLogos} />
        <LogoRow title="E-Commerce" logos={ecommerceLogos} />
      </div>
    </section>
  );
};
