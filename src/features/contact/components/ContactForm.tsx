import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const response = await axios.post(`${apiUrl}/api/leads/submit`, {
        ...data,
        form_type: 'contact_page'
      });
      
      if (response.data.success) {
        navigate('/thank-you');
        (e.target as HTMLFormElement).reset();
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
    <div className="w-full max-w-[700px] mx-auto">
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-blue-100">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-[28px] font-bold text-[#1f2937] mb-2.5 leading-tight">
            Get in Touch with Us
          </h2>
          <p className="text-sm md:text-base text-[#6b7280] leading-relaxed">
            Fill out the form and our team will get back to you within 24 hours
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#374151]">Full Name*</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
                required 
                className="w-full px-3.5 py-3 border-[1.5px] border-[#e5e7eb] rounded-lg text-base text-[#1f2937] bg-white focus:outline-none focus:border-[#3b82f6] focus:ring-3 focus:ring-blue-500/10 transition-all placeholder:text-[#9ca3af] placeholder:text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#374151]">Company Email*</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Enter company email" 
                required 
                className="w-full px-3.5 py-3 border-[1.5px] border-[#e5e7eb] rounded-lg text-base text-[#1f2937] bg-white focus:outline-none focus:border-[#3b82f6] focus:ring-3 focus:ring-blue-500/10 transition-all placeholder:text-[#9ca3af] placeholder:text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-[#374151]">Monthly Marketing Ad Budget*</label>
            <div className="relative">
              <select 
                name="budget" 
                required 
                className="w-full px-3.5 py-3 border-[1.5px] border-[#e5e7eb] rounded-lg text-base text-[#1f2937] bg-white focus:outline-none focus:border-[#3b82f6] focus:ring-3 focus:ring-blue-500/10 transition-all appearance-none cursor-pointer"
              >
                <option value="">Select Budget</option>
                <option value="Not running ads">Not running ads</option>
                <option value="Upto Rs. 1,00,000">Upto Rs. 1,00,000</option>
                <option value="Rs. 1,00,000 - Rs. 3,00,000">Rs. 1,00,000 - Rs. 3,00,000</option>
                <option value="Rs. 3,00,000 - Rs. 10,00,000">Rs. 3,00,000 - Rs. 10,00,000</option>
                <option value="Rs. 10,00,000 - Rs. 25,00,000">Rs. 10,00,000 - Rs. 25,00,000</option>
                <option value="Over Rs. 25,00,000">Over Rs. 25,00,000</option>
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                  <path fill="#6b7280" d="M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-[#374151]">Phone*</label>
            <input 
              type="tel" 
              name="phone" 
              placeholder="Enter phone number" 
              pattern="[0-9]{10}" 
              required 
              className="w-full px-3.5 py-3 border-[1.5px] border-[#e5e7eb] rounded-lg text-base text-[#1f2937] bg-white focus:outline-none focus:border-[#3b82f6] focus:ring-3 focus:ring-blue-500/10 transition-all placeholder:text-[#9ca3af] placeholder:text-sm"
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={cn(
              "w-full py-3.5 px-5 bg-[#1a70ae] hover:bg-[#1f84cc] text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-all transform active:translate-y-0 hover:-translate-y-0.5 shadow-[0_6px_18px_rgba(26,112,174,0.4)] disabled:opacity-70 disabled:cursor-not-allowed mt-2.5",
              isSubmitting && "animate-pulse"
            )}
          >
            {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
          </button>
        </form>
      </div>
    </div>
  );
};
