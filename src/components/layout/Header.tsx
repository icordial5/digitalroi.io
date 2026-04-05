import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/utils/cn';
import { useModal } from '@/context/ModalContext';

const INDUSTRIES = [
  { name: 'Energy', path: '/industries/energy' },
  { name: 'Healthcare', path: '/industries/healthcare' },
  { name: 'Education', path: '/industries/education' },
  { name: 'Jewellery', path: '/industries/jewellery' },
  { name: 'Hospitality', path: '/industries/hospitality' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsIndustriesOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-2' : 'py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={cn(
            "flex justify-between items-center bg-white rounded-full px-6 py-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-white/20 transition-all duration-300",
            isScrolled ? "bg-white/90 backdrop-blur-md" : "bg-white"
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <img
              src="https://ik.imagekit.io/digitalroipune/untitled-tag-us_mp4_hd.original.jpg"
              alt="Digital ROI"
              className={cn(
                "w-auto object-contain transition-all duration-300",
                isScrolled ? "h-10 scale-100" : "h-12 scale-105"
              )}
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn(
                "relative font-medium transition-colors py-1",
                isActive('/') ? "text-[#2563EB]" : "text-[#0F172A] hover:text-[#2563EB]"
              )}
            >
              Home
              {isActive('/') && (
                <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full" />
              )}
            </Link>
            
            <div className="relative group">
              <button
                className={cn(
                  "flex items-center font-medium transition-colors py-1",
                  location.pathname.startsWith('/industries') ? "text-[#2563EB]" : "text-[#0F172A] hover:text-[#2563EB]"
                )}
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                Industries <ChevronDown className="ml-1 h-4 w-4" />
                {location.pathname.startsWith('/industries') && (
                  <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full" />
                )}
              </button>
              
              {/* Dropdown */}
              <AnimatePresence>
                {isIndustriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 origin-top-left border border-slate-100"
                    onMouseEnter={() => setIsIndustriesOpen(true)}
                    onMouseLeave={() => setIsIndustriesOpen(false)}
                  >
                    {INDUSTRIES.map((industry) => (
                      <Link
                        key={industry.name}
                        to={industry.path}
                        className={cn(
                          "block px-4 py-2 text-sm transition-colors",
                          location.pathname === industry.path ? "bg-[#F8FAFC] text-[#2563EB]" : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#2563EB]"
                        )}
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/crm-automation" 
              className={cn(
                "relative font-medium transition-colors py-1",
                isActive('/crm-automation') ? "text-[#2563EB]" : "text-[#0F172A] hover:text-[#2563EB]"
              )}
            >
              CRM Automation
              {isActive('/crm-automation') && (
                <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full" />
              )}
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "relative font-medium transition-colors py-1",
                isActive('/about') ? "text-[#2563EB]" : "text-[#0F172A] hover:text-[#2563EB]"
              )}
            >
              About Us
              {isActive('/about') && (
                <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full" />
              )}
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "relative font-medium transition-colors py-1",
                isActive('/contact') ? "text-[#2563EB]" : "text-[#0F172A] hover:text-[#2563EB]"
              )}
            >
              Contact Us
              {isActive('/contact') && (
                <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full" />
              )}
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => openModal('homepage')}
              className="btn-primary !px-6 !py-2.5 !text-base"
            >
              Get A Free Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#0F172A] hover:text-[#0A3D91] focus:outline-none transition-transform active:scale-95"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to="/" className={cn("block px-3 py-2 text-base font-medium rounded-md", isActive('/') ? "text-[#0A3D91] bg-blue-50" : "text-[#0F172A] hover:text-[#0A3D91] hover:bg-gray-50")}>
                Home
              </Link>
              <div className="px-3 py-2">
                <div className="text-base font-medium text-[#0F172A] mb-2">Industries</div>
                <div className="pl-4 space-y-1 border-l-2 border-gray-100">
                  {INDUSTRIES.map((industry) => (
                    <Link
                      key={industry.name}
                      to={industry.path}
                      className={cn("block px-3 py-2 text-sm font-medium rounded-md", location.pathname === industry.path ? "text-[#0A3D91] bg-blue-50" : "text-[#64748B] hover:text-[#0A3D91] hover:bg-gray-50")}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/crm-automation" className={cn("block px-3 py-2 text-base font-medium rounded-md", isActive('/crm-automation') ? "text-[#0A3D91] bg-blue-50" : "text-[#0F172A] hover:text-[#0A3D91] hover:bg-gray-50")}>
                CRM Automation
              </Link>
              <Link to="/about" className={cn("block px-3 py-2 text-base font-medium rounded-md", isActive('/about') ? "text-[#0A3D91] bg-blue-50" : "text-[#0F172A] hover:text-[#0A3D91] hover:bg-gray-50")}>
                About Us
              </Link>
              <Link to="/contact" className={cn("block px-3 py-2 text-base font-medium rounded-md", isActive('/contact') ? "text-[#0A3D91] bg-blue-50" : "text-[#0F172A] hover:text-[#0A3D91] hover:bg-gray-50")}>
                Contact Us
              </Link>
              <div className="pt-4 px-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openModal('homepage');
                  }}
                  className="btn-primary w-full !text-base"
                >
                  Get A Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
