import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/ui/SEO';

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="Privacy Policy | Digital ROI" 
        description="Privacy Policy for Digimonk Marketing Pvt Ltd, operating as Digital ROI."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-12">Last updated: 16 December 2025</p>
        
        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
          <p className="mb-6">
            Digimonk Marketing Pvt Ltd, operating as Digital ROI (“we”, “us”, “our”), runs digitalroi.io (the “Website”). This Privacy Policy explains how we collect, use, share, and protect information when you visit our Website, submit a form, or interact with our marketing.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">1. Information We Collect</h2>
          <h3 className="text-xl font-semibold mt-6 mb-2">A) Information you provide</h3>
          <p className="mb-4">When you submit an enquiry or a lead form, we may collect:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Name</li>
            <li>Work email address</li>
            <li>Phone number</li>
            <li>Company name and designation</li>
            <li>Details shared in message fields</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">B) Information collected automatically</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>IP address and approximate location (city/region)</li>
            <li>Browser and device information</li>
            <li>Pages visited, time spent, and referral source</li>
            <li>Cookie identifiers and website event data</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Respond to enquiries and schedule consultations</li>
            <li>Share proposals, case studies, and requested information</li>
            <li>Manage leads and communication via Zoho CRM</li>
            <li>Improve website experience and performance</li>
            <li>Measure campaign performance and conversions</li>
            <li>Prevent spam, fraud, and security threats</li>
            <li>Comply with applicable legal requirements</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">3. Cookies, Pixels & Analytics</h2>
          <p className="mb-4 font-semibold">Tools we use:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Google Analytics 4 (GA4) – website usage tracking</li>
            <li>Meta Pixel – ad conversion & remarketing</li>
            <li>LinkedIn Insight Tag – ad performance & audience insights</li>
            <li>Zoho CRM – lead & contact management</li>
          </ul>
          <p className="mb-6">
            These tools may process online identifiers such as cookie IDs, device data, and event data like page views and form interactions.
          </p>
          <p className="mb-4 font-semibold">Your choices</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Manage cookies via browser settings</li>
            <li>Adjust ad preferences on Meta and LinkedIn</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">4. How We Share Information</h2>
          <p className="mb-6">We do not sell your personal information.</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Service providers (hosting, analytics, CRM)</li>
            <li>Advertising platforms for conversion tracking</li>
            <li>Legal authorities if required by law</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">5. Data Retention</h2>
          <p className="mb-6">
            We retain personal information only as long as necessary to respond to your request, maintain business records, and comply with legal obligations.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">6. Data Security</h2>
          <p className="mb-6">
            We use reasonable technical and organizational safeguards to protect your data. However, no online transmission is completely secure.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">7. Your Rights</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Access to your personal data</li>
            <li>Correction or deletion</li>
            <li>Restriction or objection to processing</li>
          </ul>
          <p className="mb-6">Contact us at sales@digitalroi.io or hi@digitalroi.io</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">8. Third-Party Links</h2>
          <p className="mb-6">
            Our Website may contain links to third-party websites. We are not responsible for their privacy practices.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">9. Children’s Privacy</h2>
          <p className="mb-6">
            Our services are intended for business users and not for individuals under 18 years of age.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">10. Updates to This Policy</h2>
          <p className="mb-6">
            Updates to this Privacy Policy will be posted on this page with a revised “Last updated” date.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">11. Contact Us</h2>
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

export default PrivacyPolicy;
