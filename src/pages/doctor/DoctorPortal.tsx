import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';

const DoctorPortal = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Redirect to login if not authenticated
  if (!user || user.type !== 'doctor') {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Access Restricted</h2>
            <p className="mb-6">You need to log in as a doctor to access this area.</p>
            <Button
              variant="primary"
              onClick={() => navigate('/login/doctor')}
            >
              Doctor Login
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container-custom py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h1 className="text-2xl font-bold mb-2">Doctor Portal</h1>
            <p className="text-gray-600">
              This is a placeholder for the doctor portal. Future functionality will be added here.
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-blue-800 mb-2">Coming Soon</h2>
                <p className="text-blue-700">
                  We're currently developing the doctor portal with features for managing your practice, 
                  appointments, and patient records. Please check back soon for updates.
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

export default DoctorPortal;