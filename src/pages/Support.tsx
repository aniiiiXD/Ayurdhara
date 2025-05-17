import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const Support = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 font-heading">Support & Help Center</h1>
              <p className="text-gray-600 text-lg">
                We're here to help with any questions or issues you may have with our platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our support team</p>
                <p className="text-blue-600 font-semibold">+91 9876543210</p>
                <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9am-6pm IST</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="rounded-full bg-green-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us your queries anytime</p>
                <p className="text-green-600 font-semibold">support@mrhealth.com</p>
                <p className="text-sm text-gray-500 mt-2">We usually reply within 24 hours</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="rounded-full bg-yellow-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with our support agents</p>
                <button className="text-yellow-600 font-semibold border border-yellow-600 rounded-md px-4 py-2 hover:bg-yellow-50 transition-colors">
                  Start Chat
                </button>
                <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-50 p-6">
                <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
                <p className="text-gray-600">Find quick answers to common questions about our platform.</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How do I find a doctor based on my symptoms?</h3>
                    <p className="text-gray-600">
                      In the patient portal, you can use our symptom filter feature. Simply enter your symptoms in the search bar, and our system will suggest doctors specializing in those areas.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Can I change my appointment with a doctor?</h3>
                    <p className="text-gray-600">
                      Yes, you can reschedule or cancel appointments through your patient dashboard. Please make changes at least 24 hours before your scheduled appointment.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How can I access my online classes as a student?</h3>
                    <p className="text-gray-600">
                      After logging into the student portal, you'll find all your scheduled Zoom meetings on the dashboard. Simply click on the meeting link at the scheduled time to join.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">I can't find a doctor for my specific condition. What should I do?</h3>
                    <p className="text-gray-600">
                      If you can't find a suitable doctor, use our consultancy form in the patient portal. Our team will review your requirements and help connect you with the right specialist.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Is my personal and medical information secure?</h3>
                    <p className="text-gray-600">
                      Yes, we take data security very seriously. All your personal and medical information is encrypted and stored securely according to healthcare privacy regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;