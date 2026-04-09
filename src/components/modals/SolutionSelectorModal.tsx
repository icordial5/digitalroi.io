import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Target, ShoppingBag, Sparkles, TrendingUp, BarChart3, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/utils/cn';

interface SolutionSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STORAGE_KEY = 'digital_roi_solution_modal_v2_seen';

export const SolutionSelectorModal: React.FC<SolutionSelectorModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    onClose();
  };

  const handleNavigation = (path: string) => {
    localStorage.setItem(STORAGE_KEY, 'true');
    onClose();
    navigate(path);
  };

  // Check if already seen on mount
  useEffect(() => {
    if (isOpen) {
      const seen = localStorage.getItem(STORAGE_KEY);
      if (seen === 'true') {
        onClose();
      }
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40, rotateX: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40, rotateX: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[480px] bg-white rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] overflow-hidden border border-white/20"
          >
            {/* Creative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-transparent" />
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" 
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [0, -90, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" 
              />
              
              {/* Marketing Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#111118 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            </div>

            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 w-10 h-10 bg-white/50 hover:bg-red-500 hover:text-white text-slate-400 rounded-full flex items-center justify-center transition-all z-10 shadow-sm border border-slate-100 backdrop-blur-sm"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-lg shadow-blue-600/20"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Performance Marketing
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-black text-[#111118] mb-4 leading-[1.1] tracking-tight">
                  Scale Your <span className="text-blue-600">Revenue</span> <br /> Today.
                </h2>
                <p className="text-slate-500 text-base max-w-sm mx-auto font-medium">
                  Choose your path to growth and let's optimize your ROI.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {/* Lead Generation Option */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavigation('/lead-generation')}
                  className="group relative p-6 rounded-[2rem] border-2 border-slate-100 bg-white hover:border-blue-600 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.15)] transition-all duration-500 text-left"
                >
                  <div className="flex items-center gap-5 relative z-10">
                    <div className="w-14 h-14 rounded-[1.25rem] bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                      <Target className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-black text-xl text-[#111118] tracking-tight">Lead Generation</span>
                        <Zap className="w-4 h-4 text-amber-500 fill-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-sm text-slate-500 font-semibold flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                        High-intent leads from Meta & Google
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Hover Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
                </motion.button>

                {/* Ecommerce Option */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavigation('/ecommerce-marketing')}
                  className="group relative p-6 rounded-[2rem] border-2 border-slate-100 bg-white hover:border-indigo-600 hover:shadow-[0_20px_40px_-10px_rgba(79,70,229,0.15)] transition-all duration-500 text-left"
                >
                  <div className="flex items-center gap-5 relative z-10">
                    <div className="w-14 h-14 rounded-[1.25rem] bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-inner">
                      <ShoppingBag className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-black text-xl text-[#111118] tracking-tight">Ecommerce</span>
                        <BarChart3 className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-sm text-slate-500 font-semibold flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                        Scale sales & optimize ROAS
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Hover Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
                </motion.button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">
                  Trusted by 130+ brands
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};


