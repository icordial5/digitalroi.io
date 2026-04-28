import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';
import { useModal, FormType } from '@/context/ModalContext';
import { cn } from '@/utils/cn';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

interface LeadFormProps {
  type: FormType;
  onSuccess?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ type, onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const getFormTitle = () => {
    switch (type) {
      case 'crm_automation': return 'Get Your Free CRM Audit';
      case 'solar': return 'Ready to Grow Your Solar Business?';
      case 'education': return 'Ready to Grow Your Institute?';
      case 'jewellery': return 'Ready to Grow Your Jewellery Brand?';
      case 'hospitality': return 'Ready to Grow Your Hotel/Restaurant?';
      case 'healthcare': return 'Ready to Grow Your Healthcare Facility?';
      case 'ecommerce': return 'Ready to Grow Your Online Store?';
      case 'lead_gen': return 'Ready to Grow Your Business?';
      default: return 'Ready to Grow Your Business?';
    }
  };

  const getFormSubtitle = () => {
    switch (type) {
      case 'crm_automation': return 'Unlock the full potential of your CRM system with expert insights';
      case 'lead_gen': return 'Select your business type to get the best solution tailored to your needs';
      default: return 'Fill out the form and our team will get back to you within 24 hours';
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!executeRecaptcha) {
      alert('reCAPTCHA not loaded correctly. Please try again.');
      return;
    }

    setIsSubmitting(true);

    try {
      const token = await executeRecaptcha('lead_form');
      
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const apiKey = import.meta.env.VITE_API_KEY || '';
      
      const response = await axios.post(`${apiUrl}/api/leads/submit`, {
        ...data,
        form_type: type,
        recaptchaToken: token
      }, {
        headers: {
          'x-api-key': apiKey
        }
      });
      
      if (response.data.success) {
        if (onSuccess) {
          onSuccess();
        }
        navigate('/thank-you');
      } else {
        throw new Error(response.data.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
          {getFormTitle()}
        </h2>
        <p className="text-sm text-slate-500 leading-relaxed">
          {getFormSubtitle()}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name*</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            required 
            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
          />
        </div>
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Company Name*</label>
          <input 
            type="text" 
            name="company" 
            placeholder="Your company name" 
            required 
            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Company Email*</label>
        <input 
          type="email" 
          name="email" 
          placeholder="your@email.com" 
          required 
          className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
        />
      </div>

      {type === 'lead_gen' && (
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Business Type*</label>
          <select name="business_type" required className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all appearance-none bg-white">
            <option value="">Select Business Type</option>
            <option value="Lead Generation">Lead Generation</option>
            <option value="E-commerce">E-commerce</option>
          </select>
        </div>
      )}

      {/* Industry Specific Fields */}
      {type === 'crm_automation' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Monthly Lead Volume*</label>
              <select name="lead_volume" required className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all appearance-none bg-white">
                <option value="">Select Volume</option>
                <option value="0-500">0 - 500 leads/month</option>
                <option value="500-2000">500 - 2,000 leads/month</option>
                <option value="2000-10000">2,000 - 10,000 leads/month</option>
                <option value="10000+">10,000+ leads/month</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Current CRM*</label>
              <select name="current_crm" required className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all appearance-none bg-white">
                <option value="">Select Your CRM</option>
                <option value="Zoho CRM">Zoho CRM</option>
                <option value="Salesforce">Salesforce</option>
                <option value="HubSpot">HubSpot</option>
                <option value="Pipedrive">Pipedrive</option>
                <option value="Excel/Google Sheets">Excel/Google Sheets</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </>
      )}

      {type === 'education' && (
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Institute Name*</label>
          <input 
            type="text" 
            name="institute" 
            placeholder="Enter institute name" 
            required 
            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
          />
        </div>
      )}

      {(type === 'hospitality' || type === 'healthcare') && (
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            {type === 'hospitality' ? 'Hotel/Restaurant Name*' : 'Facility Name*'}
          </label>
          <input 
            type="text" 
            name="facility" 
            placeholder="Enter business name" 
            required 
            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
          />
        </div>
      )}

      {type === 'solar' && (
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Target Sector*</label>
          <select name="target_sector" required className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all appearance-none bg-white">
            <option value="">Select Sector</option>
            <option value="B2B">B2B</option>
            <option value="B2C">B2C</option>
            <option value="Both">Both</option>
          </select>
        </div>
      )}

      {type !== 'crm_automation' && (
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Monthly Marketing Ad Budget*</label>
          <select name="budget" required className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all appearance-none bg-white">
            <option value="">Select Budget</option>
            <option value="Not running ads">Not running ads</option>
            <option value="Upto Rs. 1,00,000">Upto Rs. 1,00,000</option>
            <option value="Rs. 1,00,000 - Rs. 3,00,000">Rs. 1,00,000 - Rs. 3,00,000</option>
            <option value="Rs. 3,00,000 - Rs. 10,00,000">Rs. 3,00,000 - Rs. 10,00,000</option>
            <option value="Rs. 10,00,000 - Rs. 25,00,000">Rs. 10,00,000 - Rs. 25,00,000</option>
            <option value="Over Rs. 25,00,000">Over Rs. 25,00,000</option>
          </select>
        </div>
      )}

      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Phone*</label>
        <input 
          type="tel" 
          name="phone" 
          placeholder="+91 XXXXX XXXXX" 
          required 
          className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
        />
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full py-4 px-6 bg-[#1a70ae] hover:bg-[#1f84cc] text-white text-sm font-bold uppercase tracking-widest rounded-xl transition-all transform active:translate-y-0 hover:-translate-y-1 shadow-lg shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          type === 'crm_automation' ? 'GET FREE CRM AUDIT' : 'GET A FREE GROWTH CONSULTATION'
        )}
      </button>
    </form>
  );
};

export const LeadModal: React.FC = () => {
  const { isOpen, formType, closeModal } = useModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-[560px] bg-white rounded-[2rem] shadow-2xl overflow-hidden"
          >
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-red-500 hover:text-white text-slate-500 rounded-full flex items-center justify-center transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10 max-h-[90vh] overflow-y-auto custom-scrollbar">
              <LeadForm type={formType} onSuccess={closeModal} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
