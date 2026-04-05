import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  isLoading?: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading = true }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Blue Bird */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-24 h-24"
            >
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Bird Body */}
                <path
                  d="M30 50C30 50 40 40 60 40C80 40 90 50 90 50C90 50 80 60 60 60C40 60 30 50 30 50Z"
                  fill="#3B82F6"
                />
                {/* Bird Head */}
                <circle cx="75" cy="45" r="10" fill="#3B82F6" />
                <circle cx="78" cy="43" r="2" fill="white" />
                {/* Beak */}
                <path d="M85 45L95 48L85 51V45Z" fill="#F59E0B" />
                
                {/* Wings Animation */}
                <motion.path
                  d="M50 45C50 45 40 20 20 25C20 25 30 45 50 45Z"
                  fill="#2563EB"
                  animate={{
                    rotateX: [0, 60, 0],
                    y: [0, 5, 0]
                  }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ originX: "50%", originY: "45%" }}
                />
                <motion.path
                  d="M50 55C50 55 40 80 20 75C20 75 30 55 50 55Z"
                  fill="#1D4ED8"
                  animate={{
                    rotateX: [0, -60, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ originX: "50%", originY: "55%" }}
                />
              </svg>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col items-center"
            >
              <h2 className="text-xl font-bold text-[#111118] tracking-tight">Digital ROI</h2>
              <div className="mt-2 w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
