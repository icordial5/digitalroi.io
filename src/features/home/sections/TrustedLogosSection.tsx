import React from 'react';

const solarLogos = [
// ... (rest of the file)
  "https://ik.imagekit.io/digitalroipune/Truzon.png",
  "https://ik.imagekit.io/digitalroipune/forcdyno.png",
  "https://ik.imagekit.io/digitalroipune/Husk.png",
  "https://ik.imagekit.io/digitalroipune/Enphase.png",
  "https://ik.imagekit.io/digitalroipune/enerparc.png",
  "https://ik.imagekit.io/digitalroipune/repos-energy.png",
  "https://ik.imagekit.io/digitalroipune/livguard.png",
  "https://ik.imagekit.io/digitalroipune/Alligator-Solar.png",
  "https://ik.imagekit.io/digitalroipune/jemkon.png",
  "https://ik.imagekit.io/digitalroipune/roofsol.png",
  "https://ik.imagekit.io/digitalroipune/solar-square.png"
];

const healthcareLogos = [
  "https://ik.imagekit.io/digitalroipune/care-hospitals.png",
  "https://ik.imagekit.io/digitalroipune/Medicover-Hospitals.png",
  "https://ik.imagekit.io/digitalroipune/amaha.png",
  "https://ik.imagekit.io/digitalroipune/tata-1mg.png",
  "https://ik.imagekit.io/digitalroipune/orange-health-lab.png",
  "https://ik.imagekit.io/digitalroipune/truemeds.png",
  "https://ik.imagekit.io/digitalroipune/kaya-clinic.png"
];

const educationLogos = [
  "https://ik.imagekit.io/digitalroipune/jamboree.png",
  "https://ik.imagekit.io/digitalroipune/Application-ally.png",
  "https://ik.imagekit.io/digitalroipune/Crack-ed.png",
  "https://ik.imagekit.io/digitalroipune/Walnut-School.png",
  "https://ik.imagekit.io/digitalroipune/excelr.png",
  "https://ik.imagekit.io/digitalroipune/seed-global.png",
  "https://ik.imagekit.io/digitalroipune/orient-spectra.png",
  "https://ik.imagekit.io/digitalroipune/the-yoga-institute.png",
  "https://ik.imagekit.io/digitalroipune/mentorbeep.png",
  "https://ik.imagekit.io/digitalroipune/pathivy.png"
];

const luxuryLogos = [
  "https://ik.imagekit.io/digitalroipune/Sri-Krishna-Jewellers.png",
  "https://ik.imagekit.io/digitalroipune/pmj.png",
  "https://ik.imagekit.io/digitalroipune/lajoya.png",
  "https://ik.imagekit.io/digitalroipune/evermore.png",
  "https://ik.imagekit.io/digitalroipune/darveys.png",
  "https://ik.imagekit.io/digitalroipune/sri-sri.png",
  "https://ik.imagekit.io/digitalroipune/mcaffeine.png"
];

const ecommerceLogos = [
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

const LogoRow: React.FC<{ title: string; logos: string[] }> = ({ title, logos }) => (
  <div className="logo-row-wrapper">
    <div className="category-title">{title}</div>
    <div className="logo-row">
      {[...logos, ...logos].map((logo, i) => (
        <div key={i} className="logo-item" style={logo.includes('Enphase') ? { background: 'white' } : {}}>
          <img src={logo} alt="" referrerPolicy="no-referrer" />
        </div>
      ))}
    </div>
  </div>
);

export const TrustedLogosSection: React.FC<{ hideEcommerce?: boolean }> = ({ hideEcommerce = false }) => {
  return (
    <section className="bg-white pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="logo-scroll-section">
          <h2 className="logo-section-title">Trusted by Leading Companies Across Industries</h2>
          {!hideEcommerce && <LogoRow title="Ecommerce" logos={ecommerceLogos} />}
          <LogoRow title="Solar & Energy" logos={solarLogos} />
          <LogoRow title="Healthcare" logos={healthcareLogos} />
          <LogoRow title="Education" logos={educationLogos} />
          <LogoRow title="Jewellery & Luxury" logos={luxuryLogos} />
        </div>
      </div>
    </section>
  );
};
