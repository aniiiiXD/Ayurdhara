import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PatientDashboard from './PatientDashboard';
import HealthBlogs from './HealthBlogs';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';

const PatientPortal = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Redirect to login if not authenticated
  if (!user || user.type !== 'patient') {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Access Restricted</h2>
            <p className="mb-6">You need to log in as a patient to access this area.</p>
            <Button
              variant="primary"
              onClick={() => navigate('/login/patient')}
            >
              Patient Login
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<PatientDashboard />} />
        <Route path="/blogs" element={<HealthBlogs />} />
      </Routes>
    </div>
  );
};

export default PatientPortal;