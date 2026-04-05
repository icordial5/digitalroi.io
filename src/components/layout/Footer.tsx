import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const QUICK_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/crm-automation' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

const INDUSTRIES = [
  { name: 'Energy', path: '/industries/energy' },
  { name: 'Healthcare', path: '/industries/healthcare' },
  { name: 'Education', path: '/industries/education' },
  { name: 'Jewellery', path: '/industries/jewellery' },
  { name: 'Hospitality', path: '/industries/hospitality' },
];

export function Footer() {
  return (
    <footer className="bg-[#111118] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <img 
          src="https://ik.imagekit.io/digitalroipune/hero-bg-shape.png" 
          alt="" 
          className="w-[400px] brightness-0 invert"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-8">
              <img
                src="https://ik.imagekit.io/digitalroipune/digitalroi-white-logo.png"
                alt="Digital ROI"
                className="h-20 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-12 max-w-xs">
              Digital ROI helps brands grow with full-funnel performance marketing that generates, qualifies, and nurtures leads into revenue.
            </p>
            
            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center space-x-4">
                <span className="font-bold text-base">Social Media:</span>
                <div className="flex space-x-3">
                  <a href="https://www.facebook.com/digitalroi.io/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#084E96] transition-colors border border-white/10">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/company/digital-roi-india/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#084E96] transition-colors border border-white/10">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://www.instagram.com/digitalroi.io/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#084E96] transition-colors border border-white/10">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8">Quick Link</h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors text-base font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Industries */}
          <div>
            <h3 className="text-xl font-bold mb-8">About & Industries</h3>
            <ul className="space-y-4">
              {INDUSTRIES.map((industry) => (
                <li key={industry.name}>
                  <Link to={industry.path} className="text-gray-300 hover:text-white transition-colors text-base font-medium">
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-xl font-bold mb-8">Quick Contact</h3>
            <ul className="space-y-4 text-base text-gray-300 font-medium">
              <li>
                <a href="mailto:sales@digitalroi.io" className="hover:text-white transition-colors">
                  sales@digitalroi.io
                </a>
              </li>
              <li>
                <a href="tel:+918956110486" className="hover:text-white transition-colors">
                  +91 89561-10486
                </a>
              </li>
              <li>
                <a href="mailto:hi@digitalroi.io" className="hover:text-white transition-colors">
                  hi@digitalroi.io
                </a>
              </li>
              <li>
                <a href="tel:+918956110489" className="hover:text-white transition-colors">
                  +91 89561 10489
                </a>
              </li>
              <li className="leading-relaxed pt-2 text-sm font-normal">
                Suman Ankur, 5th Floor, S.No-82,<br />
                Plot No. 52, Near Orchid School,<br />
                Sahyadri Farms, Baner,<br />
                Pune, 411045
              </li>
              <li className="pt-2 text-sm font-normal">
                CIN: U74999PN2018PTC176098
              </li>
            </ul>
          </div>
        </div>

        {/* Policy Box */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#1e1e26] rounded-xl p-6 flex space-x-16 text-base font-bold">
            <Link to="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400 font-medium">
            © 2025 Digimonk Marketing Pvt. Ltd. All Rights Reserved. | Designed & Developed by iCordial.com
          </p>
        </div>
      </div>

    </footer>
  );
}
