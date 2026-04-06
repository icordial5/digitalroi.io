import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'motion/react';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/917758021802?text=Hello!%20I'm%20interested%20in%20lead%20generation%20services%20for%20my%20business.%20Could%20you%20please%20provide%20further%20details?";
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Periodic bounce animation every 5 seconds
    const interval = setInterval(async () => {
      await controls.start({
        y: -8,
        scale: 1.05,
        transition: { duration: 0.5, ease: "easeOut" }
      });
      await controls.start({
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="fixed bottom-[20px] left-[20px] md:bottom-[30px] md:left-[30px] z-[100] flex items-center">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={controls}
        onViewportEnter={() => controls.start({ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1 } })}
        whileHover={{ scale: 1.1, backgroundColor: "#128c7e" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#25d366] rounded-full flex items-center justify-center shadow-[2px_2px_3px_#999] transition-colors duration-300"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Pulse Effect */}
        <motion.div
          animate={{
            scale: [0.95, 1.1, 0.95],
            opacity: [0.7, 0, 0.7],
            boxShadow: [
              "0 0 0 0 rgba(37, 211, 102, 0.7)",
              "0 0 0 15px rgba(37, 211, 102, 0)",
              "0 0 0 0 rgba(37, 211, 102, 0)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full bg-[#25d366] -z-10"
        />

        {/* WhatsApp Icon */}
        <img 
          src="https://ik.imagekit.io/digitalroipune/WhatsApp_icon.png" 
          alt="WhatsApp" 
          className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] object-contain"
        />

        {/* Tooltip (Desktop only) */}
        <div 
          className={`hidden md:block absolute left-[70px] top-1/2 -translate-y-1/2 bg-[#333] text-white px-3 py-2 rounded-md text-xs whitespace-nowrap transition-all duration-300 pointer-events-none ${
            isHovered ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-2'
          }`}
        >
          Chat with us on WhatsApp
        </div>
      </motion.a>
    </div>
  );
};
