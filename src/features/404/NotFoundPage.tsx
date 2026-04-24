import React from 'react';
import { motion } from 'motion/react';
import { FileQuestion, Search, ArrowRight, Home, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Helmet } from 'react-helmet-async';

export const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>404: Page Not Found - Digital ROI</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4 md:px-8 py-20">
        <div className="max-w-2xl w-full text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8 relative inline-block text-slate-200"
          >
            <div className="text-[120px] md:text-[180px] font-bold leading-none tracking-tighter mix-blend-multiply">
              404
            </div>
            <FileQuestion className="w-20 h-20 md:w-32 md:h-32 text-gradient-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90" strokeWidth={1} />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4"
          >
            Oops! Page not found
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg mx-auto leading-relaxed"
          >
            The page you're looking for seems to have gone missing or may have been moved.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="max-w-md mx-auto mb-12 relative"
          >
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4" />
              <input 
                type="text" 
                placeholder="Search our site..." 
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#667eea] focus:border-transparent shadow-sm transition-all text-slate-900 placeholder:text-slate-400"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-colors">
                 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#667eea]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Go to Home
            </Link>
            
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </Link>
          </motion.div>

        </div>
      </div>
    </Layout>
  );
};
