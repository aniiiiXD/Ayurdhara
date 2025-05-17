import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { UserIcon, UserRound, GraduationCap, Users } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  
  const navigateToLogin = (userType: string) => {
    navigate(`/login/${userType}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div 
        className="h-screen bg-cover bg-center" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg")'
        }}
      >
        <Navbar transparent />
        
        <div className="container-custom h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading animate-fade-in">
            Welcome to <span className="text-blue-400">mr</span> Health Platform
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-10 animate-slide-in">
            Connecting patients with the right healthcare professionals for better wellness and care.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-8">
            <div 
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
              onClick={() => navigateToLogin('patient')}
            >
              <div className="flex justify-center mb-4">
                <UserIcon size={48} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Patient Portal</h3>
              <p className="mb-4">Find doctors, wellness centers, and personalized care based on your needs.</p>
              <Button 
                variant="primary" 
                onClick={() => navigateToLogin('patient')}
                className="w-full"
              >
                Patient Login
              </Button>
            </div>
            
            <div 
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
              onClick={() => navigateToLogin('doctor')}
            >
              <div className="flex justify-center mb-4">
                <UserRound size={48} className="text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Doctor Portal</h3>
              <p className="mb-4">Manage your practice, patient appointments, and professional profile.</p>
              <Button 
                variant="secondary" 
                onClick={() => navigateToLogin('doctor')}
                className="w-full"
              >
                Doctor Login
              </Button>
            </div>
            
            <div 
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
              onClick={() => navigateToLogin('student')}
            >
              <div className="flex justify-center mb-4">
                <GraduationCap size={48} className="text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Student Portal</h3>
              <p className="mb-4">Access your learning materials, online classes, and educational resources.</p>
              <Button 
                variant="outline" 
                onClick={() => navigateToLogin('student')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                Student Login
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Why Choose Mr Health?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We provide comprehensive healthcare solutions connecting patients with the right medical professionals and resources.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Find The Right Doctor</h3>
              <p className="text-gray-600">Search and connect with specialized doctors based on your symptoms and needs.</p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-secondary h-8 w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Wellness Centers</h3>
              <p className="text-gray-600">Discover Panchakarma and Yoga centers for holistic health and wellbeing treatments.</p>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-lg text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-accent h-8 w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Health Resources</h3>
              <p className="text-gray-600">Access educational blogs and resources about health, wellness, and medical conditions.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg" 
                alt="Doctor consulting with patient" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-heading">Personalized Healthcare At Your Fingertips</h2>
              <p className="text-gray-600 mb-6">
                Our platform connects you with healthcare professionals specializing in your specific needs. Whether you're looking for a general physician, an Ayurvedic doctor, or a wellness center, we have you covered.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Search doctors based on your location</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Filter specialists based on your symptoms</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Find Panchakarma and Yoga centers near you</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Get personalized consultations when needed</span>
                </li>
              </ul>
              <Button 
                variant="primary" 
                size="large"
                onClick={() => navigateToLogin('patient')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;