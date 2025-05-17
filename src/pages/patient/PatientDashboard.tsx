import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Search, MapPin, Phone, Mail, FileText, 
  Menu, X, Users, Package, Activity, HelpCircle, 
  FileQuestion, Star, Heart, Tag
} from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { doctors, centers } from '../../data/mockData';

type ListingType = 'doctors' | 'panchakarma' | 'yoga';

const PatientDashboard = () => {
  const { user } = useAuth();
  const [selectedCity, setSelectedCity] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [activeTab, setActiveTab] = useState<ListingType>('doctors');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Filter data based on city and symptoms
  const filteredDoctors = doctors.filter(doctor => {
    const matchesCity = !selectedCity || doctor.city === selectedCity;
    const matchesSymptoms = !symptoms || doctor.specialties.some(
      specialty => specialty.toLowerCase().includes(symptoms.toLowerCase())
    );
    return matchesCity && matchesSymptoms;
  });
  
  const filteredCenters = centers.filter(center => {
    const matchesCity = !selectedCity || center.city === selectedCity;
    const matchesType = center.type === activeTab;
    return matchesCity && matchesType;
  });
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCity(e.target.value);
  };
  
  const handleSymptomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSymptoms(e.target.value);
  };
  
  const handleSubmitConsultancy = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    alert('Your consultancy request has been submitted. Our team will contact you soon.');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-blue-900 text-white">
        <div className="container-custom py-14 pt-24">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold">Patient Dashboard</h1>
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md hover:bg-blue-800"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex-grow bg-gray-50">
        <div className="container-custom py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden bg-white p-4 rounded-lg shadow-md mb-4 slide-in">
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/patient" className="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <Users size={18} className="mr-2" />
                        <span>Find Clinics</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <Package size={18} className="mr-2" />
                        <span>Buy Medicines</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <Activity size={18} className="mr-2" />
                        <span>Treatment</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/support" className="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <HelpCircle size={18} className="mr-2" />
                        <span>Support</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms" className="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <FileQuestion size={18} className="mr-2" />
                        <span>Terms & Services</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
            
            {/* Sidebar (Desktop) */}
            <div className="hidden lg:block w-64 bg-white p-4 rounded-lg shadow-md h-fit sticky top-24">
              <nav>
                <ul className="space-y-2">
                  <li>
                    <Link to="/patient" className="flex items-center p-2 rounded-md bg-blue-50 text-blue-700">
                      <Users size={18} className="mr-2" />
                      <span>Find Clinics</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="flex items-center p-2 rounded-md hover:bg-gray-100">
                      <Package size={18} className="mr-2" />
                      <span>Buy Medicines</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="flex items-center p-2 rounded-md hover:bg-gray-100">
                      <Activity size={18} className="mr-2" />
                      <span>Treatment</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/support" className="flex items-center p-2 rounded-md hover:bg-gray-100">
                      <HelpCircle size={18} className="mr-2" />
                      <span>Support</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="flex items-center p-2 rounded-md hover:bg-gray-100">
                      <FileQuestion size={18} className="mr-2" />
                      <span>Terms & Services</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              {/* Search and Filter */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-4">Find Healthcare Services</h2>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <Input
                        placeholder="Search for city..."
                        value={selectedCity}
                        onChange={handleCityChange}
                        icon={<Search size={18} />}
                      />
                    </div>
                    <div className="flex-1">
                      <Input
                        placeholder="Enter symptoms..."
                        value={symptoms}
                        onChange={handleSymptomsChange}
                        icon={<Activity size={18} />}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Tabs */}
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8">
                    <button
                      onClick={() => setActiveTab('doctors')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'doctors'
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Doctors
                    </button>
                    <button
                      onClick={() => setActiveTab('panchakarma')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'panchakarma'
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Panchakarma Centers
                    </button>
                    <button
                      onClick={() => setActiveTab('yoga')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'yoga'
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Yoga Centers
                    </button>
                  </nav>
                </div>
              </div>
              
              {/* Listings */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">
                  {activeTab === 'doctors' ? 'Doctors' : 
                   activeTab === 'panchakarma' ? 'Panchakarma Centers' : 'Yoga Centers'}
                </h2>
                
                {activeTab === 'doctors' ? (
                  <div className="space-y-6">
                    {filteredDoctors.length > 0 ? (
                      filteredDoctors.map((doctor) => (
                        <div key={doctor.id} className="flex flex-col md:flex-row border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                          <div className="w-full md:w-1/4">
                            <img
                              src={doctor.image}
                              alt={`Dr. ${doctor.name}`}
                              className="w-full h-48 md:h-full object-cover"
                            />
                          </div>
                          <div className="p-4 flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="text-lg font-semibold">Dr. {doctor.name}</h3>
                                <p className="text-gray-600">{doctor.specialization}</p>
                              </div>
                              <div className="flex items-center">
                                <Star className="h-5 w-5 text-yellow-500" />
                                <span className="ml-1">{doctor.rating}/5</span>
                              </div>
                            </div>
                            
                            <div className="mt-2 flex flex-wrap gap-2">
                              {doctor.specialties.map((specialty, index) => (
                                <span 
                                  key={index} 
                                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                >
                                  <Tag size={12} className="mr-1" />
                                  {specialty}
                                </span>
                              ))}
                            </div>
                            
                            <div className="mt-4 space-y-1">
                              <div className="flex items-start">
                                <MapPin size={18} className="text-gray-500 mr-2 mt-0.5" />
                                <span>{doctor.address}, {doctor.city}</span>
                              </div>
                              <div className="flex items-center">
                                <Phone size={18} className="text-gray-500 mr-2" />
                                <span>{doctor.phone}</span>
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <Button variant="primary">Book Appointment</Button>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No doctors found matching your criteria.</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredCenters.length > 0 ? (
                      filteredCenters.map((center) => (
                        <div key={center.id} className="flex flex-col md:flex-row border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                          <div className="w-full md:w-1/4">
                            <img
                              src={center.image}
                              alt={center.name}
                              className="w-full h-48 md:h-full object-cover"
                            />
                          </div>
                          <div className="p-4 flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="text-lg font-semibold">{center.name}</h3>
                                <p className="text-gray-600">{activeTab === 'panchakarma' ? 'Panchakarma Center' : 'Yoga Center'}</p>
                              </div>
                              <div className="flex items-center">
                                <Star className="h-5 w-5 text-yellow-500" />
                                <span className="ml-1">{center.rating}/5</span>
                              </div>
                            </div>
                            
                            <div className="mt-2 flex flex-wrap gap-2">
                              {center.services.map((service, index) => (
                                <span 
                                  key={index} 
                                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                                >
                                  <Heart size={12} className="mr-1" />
                                  {service}
                                </span>
                              ))}
                            </div>
                            
                            <div className="mt-4 space-y-1">
                              <div className="flex items-start">
                                <MapPin size={18} className="text-gray-500 mr-2 mt-0.5" />
                                <span>{center.address}, {center.city}</span>
                              </div>
                              <div className="flex items-center">
                                <Phone size={18} className="text-gray-500 mr-2" />
                                <span>{center.phone}</span>
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <Button variant="secondary">Book Session</Button>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No centers found matching your criteria.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Consultancy Form */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Cannot Find Needed Doctor?</h2>
                <p className="mb-4 text-gray-600">
                  Fill out this form with your requirements, and our team will connect you with the right healthcare professional.
                </p>
                
                <form onSubmit={handleSubmitConsultancy}>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                      What kind of doctor are you looking for?
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      rows={4}
                      placeholder="Describe your medical needs, symptoms, or the type of specialist you're seeking..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Input
                      label="Your Name"
                      placeholder="Enter your full name"
                      required
                    />
                    
                    <Input
                      label="Phone Number"
                      placeholder="Enter your phone number"
                      type="tel"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <Input
                      label="Email Address"
                      placeholder="Enter your email address"
                      type="email"
                      required
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button variant="primary" type="submit">
                      Submit Request
                    </Button>
                  </div>
                </form>
              </div>
              
              {/* Health Blogs Preview */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Health Blogs</h2>
                  <Link to="/patient/blogs" className="text-blue-600 hover:text-blue-800">
                    View All
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
                    <img
                      src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg"
                      alt="Health blog"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">Understanding Ayurvedic Principles for Modern Health</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Learn how ancient Ayurvedic wisdom can be applied to modern health challenges and lifestyles.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Jun 12, 2025</span>
                        <button className="text-blue-600 hover:text-blue-800">Read More</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
                    <img
                      src="https://images.pexels.com/photos/3823086/pexels-photo-3823086.jpeg"
                      alt="Health blog"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">The Benefits of Regular Yoga Practice</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Discover how incorporating yoga into your daily routine can improve both physical and mental health.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Jun 5, 2025</span>
                        <button className="text-blue-600 hover:text-blue-800">Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PatientDashboard;