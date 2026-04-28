/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'motion/react';
import { PageTransition } from './components/ui/PageTransition';
import { LoadingScreen } from './components/ui/LoadingScreen';

const Home = lazy(() => import('./features/home/Home'));
const EnergyPage = lazy(() => import('./features/energy/EnergyPage'));
const HealthcarePage = lazy(() => import('./features/healthcare/HealthcarePage'));
const EducationPage = lazy(() => import('./features/education/EducationPage'));
const JewelleryPage = lazy(() => import('./features/jewellery/JewelleryPage'));
const HospitalityPage = lazy(() => import('./features/hospitality/HospitalityPage'));
const EcommercePage = lazy(() => import('./features/ecommerce/EcommercePage'));
const LeadGenPage = lazy(() => import('./features/lead-gen/LeadGenPage'));
const AboutPage = lazy(() => import('./features/about/AboutPage'));
const ContactPage = lazy(() => import('./features/contact/ContactPage'));
const CRMAutomationPage = lazy(() => import('./features/crm/CRMAutomationPage'));
const PuneMumbaiLandingPage = lazy(() => import('./features/landing-pages/PuneMumbaiLandingPage'));
const ThankYouPage = lazy(() => import('./features/thank-you/ThankYouPage').then(module => ({ default: module.ThankYouPage })));
const NotFoundPage = lazy(() => import('./features/404/NotFoundPage').then(module => ({ default: module.NotFoundPage })));
const PrivacyPolicy = lazy(() => import('./features/legal/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./features/legal/TermsConditions'));
const PlaceholderPage = lazy(() => import('./components/layout/PlaceholderPage').then(module => ({ default: module.PlaceholderPage })));

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { ModalProvider } from './context/ModalContext';
import { LeadModal } from './components/forms/LeadModal';
import { CookieConsent } from './components/ui/CookieConsent';

// Fallback component that signals Suspense is loading
const SuspenseFallback = ({ onMount, onUnmount }: { onMount: () => void, onUnmount: () => void }) => {
  useEffect(() => {
    onMount();
    return () => onUnmount();
  }, [onMount, onUnmount]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<PageTransition><LeadGenPage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="/crm-automation" element={<PageTransition><CRMAutomationPage /></PageTransition>} />
          <Route path="/ecommerce" element={<PageTransition><EcommercePage /></PageTransition>} />
          <Route path="/thank-you" element={<PageTransition><ThankYouPage /></PageTransition>} />
          <Route path="/lead-generation" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/digital-marketing-agency-pune-mumbai" element={<PageTransition><PuneMumbaiLandingPage /></PageTransition>} />
          
          {/* Industries */}
          <Route path="/industries/solar-marketing" element={<PageTransition><EnergyPage /></PageTransition>} />
          <Route path="/industries/healthcare-marketing" element={<PageTransition><HealthcarePage /></PageTransition>} />
          <Route path="/industries/education-marketing" element={<PageTransition><EducationPage /></PageTransition>} />
          <Route path="/industries/jewellery-marketing" element={<PageTransition><JewelleryPage /></PageTransition>} />
          <Route path="/industries/hospitality-marketing" element={<PageTransition><HospitalityPage /></PageTransition>} />
          
          <Route path="/blog" element={<PageTransition><PlaceholderPage title="Blog" description="Insights on performance marketing and CRM automation." /></PageTransition>} />
          <Route path="/case-studies" element={<PageTransition><PlaceholderPage title="Case Studies" description="See how we've helped brands scale their revenue." /></PageTransition>} />
          <Route path="/terms" element={<PageTransition><TermsConditions /></PageTransition>} />
          <Route path="/privacy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
          
          <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default function App() {
  const [isSuspenseLoading, setIsSuspenseLoading] = useState(true);
  const [isMinTimePassed, setIsMinTimePassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMinTimePassed(true);
    }, 800); // 0.8 seconds minimum loading time for better UX
    return () => clearTimeout(timer);
  }, []);

  const showLoader = isSuspenseLoading || !isMinTimePassed;

  return (
    <HelmetProvider>
      <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LenaM4sAAAAAEwVQRNdnKzS0-9bO1rGTAM9s1xu'}>
        <ModalProvider>
          <Router>
            <LoadingScreen isLoading={showLoader} />
            <Suspense fallback={
              <SuspenseFallback 
                onMount={() => setIsSuspenseLoading(true)} 
                onUnmount={() => setIsSuspenseLoading(false)} 
              />
            }>
              <AnimatedRoutes />
            </Suspense>
            <LeadModal />
            <CookieConsent />
          </Router>
        </ModalProvider>
      </GoogleReCaptchaProvider>
    </HelmetProvider>
  );
}
