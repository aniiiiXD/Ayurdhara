import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 font-heading">Terms & Services</h1>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="prose max-w-none">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the Mr Health platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
                </p>
                
                <h2>2. Description of Service</h2>
                <p>
                  Mr Health provides a platform connecting patients with healthcare professionals, including doctors and wellness centers. Our services include but are not limited to:
                </p>
                <ul>
                  <li>Finding and connecting with healthcare professionals</li>
                  <li>Accessing educational healthcare content</li>
                  <li>Online consultations and appointment bookings</li>
                  <li>Educational resources for medical students</li>
                </ul>
                
                <h2>3. User Accounts</h2>
                <p>
                  Users must create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
                
                <h2>4. User Conduct</h2>
                <p>
                  Users agree not to:
                </p>
                <ul>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Impersonate any person or entity</li>
                  <li>Upload or transmit viruses or malicious code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use our platform for any illegal or unauthorized purpose</li>
                </ul>
                
                <h2>5. Healthcare Disclaimer</h2>
                <p>
                  The information provided on this platform is for general informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </p>
                
                <h2>6. Privacy Policy</h2>
                <p>
                  Our Privacy Policy, which is incorporated into these Terms by reference, explains how we collect, use, and disclose information that pertains to your privacy.
                </p>
                
                <h2>7. Intellectual Property</h2>
                <p>
                  All content included on this platform is the property of Mr Health or its content suppliers and is protected by intellectual property laws. Users may not reproduce, distribute, or create derivative works without our express permission.
                </p>
                
                <h2>8. Termination</h2>
                <p>
                  We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
                </p>
                
                <h2>9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the new Terms on the platform. Your continued use of the platform after such modifications will constitute your acknowledgment and agreement to the modified Terms.
                </p>
                
                <h2>10. Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us at legal@mrhealth.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;