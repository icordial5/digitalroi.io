import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useModal } from '@/context/ModalContext';
import { io } from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

const QUICK_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Ecommerce Marketing', path: '/ecommerce-marketing' },
  { name: 'CRM Automation', path: '/crm-automation' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Case Studies', path: '/case-studies' },
];

const INDUSTRIES = [
  { name: 'Solar', path: '/industries/solar-marketing' },
  { name: 'Healthcare', path: '/industries/healthcare-marketing' },
  { name: 'Education', path: '/industries/education-marketing' },
  { name: 'Jewellery', path: '/industries/jewellery-marketing' },
  { name: 'Hospitality', path: '/industries/hospitality-marketing' },
];

export function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="bg-[#0A0A0F] text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Subtle Glow Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section with CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-between pb-16 mb-16 border-b border-white/5 gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Ready to scale your <span className="text-[#2563EB]">revenue?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Join 10+ brands that are already growing their business with our performance marketing strategies.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openModal('homepage')}
            className="btn-primary !px-10 !py-4 !text-lg flex items-center gap-2 group"
          >
            Get A Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="inline-block">
              <img
                src="https://ik.imagekit.io/digitalroipune/digitalroi-white-logo.png"
                alt="Digital ROI"
                className="h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Digital ROI helps brands grow with full-funnel performance marketing that generates, qualifies, and nurtures leads into revenue.
            </p>
            
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/digitalroi.io/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300 border border-white/10 hover:border-[#1877F2] group">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/company/digital-roi-india/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#0A66C2] transition-all duration-300 border border-white/10 hover:border-[#0A66C2] group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="https://www.instagram.com/digitalroi.io/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#E4405F] transition-all duration-300 border border-white/10 hover:border-[#E4405F] group">
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-[#2563EB] transition-colors text-base flex items-center group">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-[#2563EB] mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-white uppercase tracking-wider">Industries</h3>
            <ul className="space-y-4">
              {INDUSTRIES.map((industry) => (
                <li key={industry.name}>
                  <Link to={industry.path} className="text-gray-400 hover:text-[#2563EB] transition-colors text-base flex items-center group">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-[#2563EB] mr-0 group-hover:mr-2 transition-all duration-300" />
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-white uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="mailto:sales@digitalroi.io" className="block text-gray-400 hover:text-white transition-colors text-sm">sales@digitalroi.io</a>
                  <a href="mailto:hi@digitalroi.io" className="block text-gray-400 hover:text-white transition-colors text-sm">hi@digitalroi.io</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:+918956110486" className="block text-gray-400 hover:text-white transition-colors text-sm">+91 89561 10486</a>
                  <a href="tel:+918956110489" className="block text-gray-400 hover:text-white transition-colors text-sm">+91 89561 10489</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Suman Ankur, 5th Floor, Baner, Pune, 411045
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8 text-sm font-medium text-gray-500">
            <Link to="/terms" target="_blank" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" target="_blank" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-gray-500 text-center">
              © 2026 Digimonk Marketing Pvt. Ltd. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-600">
              Design and Develop <a href="https://icordial.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">iCordial.com</a>
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-xs text-gray-600">
              CIN: U74999PN2018PTC176098
            </div>
            <VisitorCounter />
          </div>
        </div>
      </div>
    </footer>
  );
}

function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Get or create session ID
    let sessionId = localStorage.getItem('visitor_session_id');
    if (!sessionId) {
      sessionId = uuidv4();
      localStorage.setItem('visitor_session_id', sessionId);
    }

    // Connect to Socket.io server
    const socket = io();

    socket.on('connect', () => {
      socket.emit('register', sessionId);
    });

    socket.on('visitorCount', (newCount: number) => {
      // Add a base offset of 112 to the real user count to meet the "start above 100" requirement
      // while still accurately tracking real-time fluctuations of actual users.
      setCount(newCount + 112);
    });

    // Send heartbeat on user activity
    const handleActivity = () => {
      socket.emit('heartbeat', sessionId);
    };

    // Throttle activity events
    let throttleTimer: ReturnType<typeof setTimeout> | null = null;
    const throttledActivity = () => {
      if (throttleTimer) return;
      throttleTimer = setTimeout(() => {
        handleActivity();
        throttleTimer = null;
      }, 5000); // Max 1 heartbeat every 5 seconds
    };

    window.addEventListener('mousemove', throttledActivity);
    window.addEventListener('keydown', throttledActivity);
    window.addEventListener('scroll', throttledActivity);
    window.addEventListener('click', throttledActivity);

    // Initial heartbeat
    handleActivity();

    return () => {
      window.removeEventListener('mousemove', throttledActivity);
      window.removeEventListener('keydown', throttledActivity);
      window.removeEventListener('scroll', throttledActivity);
      window.removeEventListener('click', throttledActivity);
      if (throttleTimer) clearTimeout(throttleTimer);
      socket.disconnect();
    };
  }, []);

  if (count === 0) return null; // Hide until we have a count

  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
        Live Visitors: <span className="text-white tabular-nums">{count.toLocaleString()}</span>
      </span>
    </div>
  );
}
