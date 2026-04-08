import React from 'react';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-12 prose prose-lg max-w-none">
        <div className="text-gray-700 space-y-6">
          <p className="text-sm text-gray-500">Last updated: April 8, 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p>
              Welcome to Hydro Havens Pools and Spas. By accessing our website at hydrohavenspools.com, 
              you agree to be bound by these Terms of Service and comply with all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services Description</h2>
            <p>
              Hydro Havens Pools and Spas provides custom pool construction, spa installation, 
              turf installation, stamped concrete, and outdoor living space design services in the El Paso area. 
              All services are subject to separate written contracts and estimates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Quote Requests and Estimates</h2>
            <p>
              All quote requests submitted through our website are non-binding. Final pricing is determined 
              after on-site evaluation and consultation. Estimates are valid for 30 days unless otherwise specified 
              in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
            <p>
              All content on this website, including images, text, logos, and design elements, is the property 
              of Hydro Havens Pools and Spas and is protected by copyright laws. Unauthorized use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
            <p>
              Hydro Havens Pools and Spas shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages resulting from your use of our website or services. 
              We warrant our workmanship according to the terms specified in individual project contracts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
              <br /><br />
              <strong>Hydro Havens Pools and Spas</strong><br />
              Phone: (915) 262-7590<br />
              Email: marioluna301270@gmail.com<br />
              Hours: Monday - Saturday, 5:00 AM - 5:00 PM
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}