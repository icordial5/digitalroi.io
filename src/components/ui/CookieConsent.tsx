import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, X, Settings } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie_consent');
    if (!hasConsented) {
      // Small delay before showing the banner
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 z-[9999] w-[calc(100%-2rem)] max-w-[360px] md:bottom-8 md:left-8"
        >
          <div className="bg-[#222222] text-white rounded-2xl p-6 shadow-2xl border border-white/10 relative overflow-hidden">
            {/* Top right icons */}
            <div className="absolute top-4 right-4 flex items-center gap-3 text-gray-400">
              <Globe className="w-5 h-5" />
              <button onClick={handleDecline} className="hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-3 pr-16">This website uses cookies</h3>
            
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              This website uses cookies to improve user experience. <a href="/privacy" className="text-white underline hover:text-gray-200">Read more</a>
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mb-4">
              <button 
                onClick={handleAccept}
                className="flex-1 py-2.5 px-4 bg-transparent border border-white/20 hover:bg-white/10 rounded-xl text-sm font-bold tracking-wide transition-colors"
              >
                ACCEPT ALL
              </button>
              <button 
                onClick={handleDecline}
                className="flex-1 py-2.5 px-4 bg-transparent border border-white/20 hover:bg-white/10 rounded-xl text-sm font-bold tracking-wide transition-colors"
              >
                DECLINE ALL
              </button>
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-2 text-sm font-bold text-gray-300 hover:text-white transition-colors">
              <Settings className="w-4 h-4" />
              SHOW DETAILS
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
