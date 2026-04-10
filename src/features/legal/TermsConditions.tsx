import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/ui/SEO';

const TermsConditions: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="Terms & Conditions | Digital ROI" 
        description="Terms and Conditions for Digimonk Marketing Pvt Ltd, operating as Digital ROI."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Terms & Conditions</h1>
        <p className="text-sm text-slate-500 mb-12">Last updated: 16 December 2025</p>
        
        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
          <p className="mb-6">
            These Terms & Conditions (“Terms”) govern your use of the website digitalroi.io (the “Website”) and the services provided by Digimonk Marketing Pvt Ltd, operating as Digital ROI (“we”, “us”, “our”).
          </p>
          <p className="mb-6">
            By accessing our Website or engaging with our services, you agree to these Terms. If you do not agree, please discontinue use of the Website and services.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">1. About Digital ROI</h2>
          <p className="mb-6">
            Digital ROI is a digital and performance marketing agency providing services including performance advertising, lead generation, website optimization, CRM automation, analytics, and marketing consulting.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">2. Use of the Website</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>You must use the Website for lawful purposes only</li>
            <li>You must not attempt unauthorized access or disrupt Website functionality</li>
            <li>You must not misuse content, branding, or intellectual property</li>
            <li>You must not submit false, misleading, or harmful information</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">3. Enquiries & Communication</h2>
          <p className="mb-4 font-semibold">By submitting an enquiry or form on our Website:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>You confirm the accuracy of provided information</li>
            <li>You consent to being contacted via email, phone, or WhatsApp</li>
            <li>You understand that submitting a form does not guarantee service engagement</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">4. Services & Engagement</h2>
          <p className="mb-6">
            All services are governed by written proposals, agreements, or contracts that define scope, pricing, timelines, and deliverables. Services commence only after written confirmation.
          </p>
          <p className="mb-6">
            Marketing results depend on multiple external factors and no specific outcome is guaranteed.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">5. Payments & Fees</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Fees are communicated in advance through proposals</li>
            <li>Payments must be made as per agreed timelines</li>
            <li>Delayed payments may result in service suspension</li>
            <li>Fees are non-refundable unless stated otherwise in writing</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">6. Intellectual Property</h2>
          <p className="mb-6">
            All Website content, branding, designs, and materials are the intellectual property of Digital ROI unless otherwise stated. Unauthorized use is prohibited.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">7. Third-Party Platforms</h2>
          <p className="mb-6">
            Our services may involve third-party platforms such as Google, Meta, LinkedIn, and CRM or analytics tools. We are not responsible for their policies, outages, or changes.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">8. Disclaimer</h2>
          <p className="mb-6">
            We do not guarantee specific leads, revenue, ROI, or business outcomes. Marketing performance depends on budgets, competition, market conditions, and client inputs.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">9. Limitation of Liability</h2>
          <p className="mb-6">
            To the maximum extent permitted by law, Digital ROI shall not be liable for indirect, incidental, or consequential damages. Our liability is limited to fees paid during the applicable service period.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">10. Termination</h2>
          <p className="mb-6">
            We reserve the right to suspend or terminate access to the Website or services for violation of these Terms or contractual agreements.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">11. Privacy</h2>
          <p className="mb-6">
            Use of this Website is also governed by our Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">12. Governing Law</h2>
          <p className="mb-6">
            These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Pune, Maharashtra.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">13. Contact Information</h2>
          <p className="mb-2">Digimonk Marketing Pvt Ltd – Digital ROI</p>
          <p className="mb-2">Address: Suman Ankur, 5th Floor, S.No-82, Plot No. 52, Near Orchid School, Sahyadri Farms, Baner, Pune 411045</p>
          <p className="mb-2">Email: sales@digitalroi.io / hi@digitalroi.io</p>
          <p className="mb-2">Phone: +91 89561-10486 / +91 89561-10489</p>
          <p className="mb-2">CIN: U74999PN2018PTC176098</p>
        </div>
      </div>
    </Layout>
  );
};

export default TermsConditions;
