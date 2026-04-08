import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-gray-700 space-y-6">
          <p className="text-sm text-gray-500">Last updated: April 8, 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
            <p className="mb-4">
              Hydro Havens Pools and Spas collects information you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fill out our contact or quote request forms</li>
              <li>Call us for estimates or inquiries</li>
              <li>Subscribe to our communications (if applicable)</li>
            </ul>
            <p className="mt-4">
              This information may include your name, phone number, email address, physical address, 
              and details about your project requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Provide estimates and project consultations</li>
              <li>Communicate with you about your project</li>
              <li>Send periodic updates about our services (with your consent)</li>
              <li>Improve our website and customer service</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share 
              information with trusted partners who assist us in operating our website or servicing you, 
              so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. 
              However, no method of transmission over the Internet is 100% secure, and we cannot 
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Request access to your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact:
              <br /><br />
              <strong>Hydro Havens Pools and Spas</strong><br />
              Phone: (915) 262-7590<br />
              Email: marioluna301270@gmail.com<br />
              Address: [Your Business Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}