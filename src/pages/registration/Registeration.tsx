import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';
import { doctors } from '../../data/mockData';

// Define the Doctor interface based on the provided data structure
interface Doctor {
  id: number;
  name: string;
  specialization: string;
  specialties: string[];
  address: string;
  city: string;
  phone: string;
  rating?: number;
  image?: string;
}

const DoctorRegistration: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState<Omit<Doctor, 'id' | 'rating'>>({
    name: '',
    specialization: '',
    specialties: [],
    address: '',
    city: '',
    phone: '',
    image: '',
  });
  
  // Specialty input state
  const [specialty, setSpecialty] = useState<string>('');
  
  // Form errors state
  const [errors, setErrors] = useState<Partial<Record<keyof Doctor, string>>>({});
  
  // Loading state for form submission
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is updated
    if (errors[name as keyof Doctor]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Handle specialty input
  const handleSpecialtyAdd = () => {
    if (specialty.trim() && !formData.specialties.includes(specialty.trim())) {
      setFormData(prev => ({
        ...prev,
        specialties: [...prev.specialties, specialty.trim()]
      }));
      setSpecialty('');
    }
  };
  
  const handleSpecialtyRemove = (specialtyToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      specialties: prev.specialties.filter(s => s !== specialtyToRemove)
    }));
  };
  
  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you would upload to a server and get a URL back
      // For this example, we'll use a placeholder
      setFormData(prev => ({
        ...prev,
        image: URL.createObjectURL(file)
      }));
    }
  };
  
  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof Doctor, string>> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.specialization.trim()) newErrors.specialization = 'Specialization is required';
    if (formData.specialties.length === 0) newErrors.specialties = 'At least one specialty is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    
    // Validate phone number format (Indian format)
    const phoneRegex = /^\+91\s\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone must be in format: +91 XXXXXXXXXX';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Generate a new ID (find max id + 1)
      const newId = doctors.length > 0 ? Math.max(...doctors.map(d => d.id)) + 1 : 1;

      // Prepare new doctor object
      const newDoctor = {
        id: newId,
        ...formData,
      };

      // Add to mockData doctors array
      doctors.push(newDoctor);

      // Optionally log for debug
      console.log('Doctor added to mockData:', newDoctor);

      // Show success message and redirect
      alert('Registration successful!');
      navigate('/doctor/dashboard');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">Doctor Registration</h1>
            <p className="text-blue-100">Join our network of healthcare professionals</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Dr. Rajesh Sharma"
                />
                {errors.name && <p className="mt-1 text-red-600 text-sm">{errors.name}</p>}
              </div>
              
              {/* Specialization */}
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">
                  Primary Specialization
                </label>
                <input
                  type="text"
                  id="specialization"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ayurvedic Physician"
                />
                {errors.specialization && <p className="mt-1 text-red-600 text-sm">{errors.specialization}</p>}
              </div>
              
              {/* Specialties */}
              <div className="col-span-2">
                <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
                  Areas of Expertise
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="specialty"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="flex-grow px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Digestive Disorders"
                  />
                  <button
                    type="button"
                    onClick={handleSpecialtyAdd}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Add
                  </button>
                </div>
                
                {formData.specialties.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {formData.specialties.map((item, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
                      >
                        {item}
                        <button 
                          type="button"
                          onClick={() => handleSpecialtyRemove(item)}
                          className="ml-2 text-blue-600 hover:text-blue-800"
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>
                )}
                
                {errors.specialties && <p className="mt-1 text-red-600 text-sm">{errors.specialties}</p>}
              </div>
              
              {/* Address */}
              <div className="col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Clinic/Hospital Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="123 Health Street, Sector 15"
                />
                {errors.address && <p className="mt-1 text-red-600 text-sm">{errors.address}</p>}
              </div>
              
              {/* City */}
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Delhi"
                />
                {errors.city && <p className="mt-1 text-red-600 text-sm">{errors.city}</p>}
              </div>
              
              {/* Phone */}
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+91 9876543210"
                />
                {errors.phone && <p className="mt-1 text-red-600 text-sm">{errors.phone}</p>}
              </div>
              
              {/* Profile Image */}
              <div className="col-span-2">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Image
                </label>
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    {formData.image ? (
                      <img 
                        src={formData.image} 
                        alt="Profile preview" 
                        className="h-24 w-24 object-cover rounded-full border-2 border-gray-200"
                      />
                    ) : (
                      <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No image</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="image"
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md cursor-pointer hover:bg-gray-300 transition-colors inline-block"
                    >
                      Choose file
                    </label>
                    <p className="mt-1 text-sm text-gray-500">
                      JPG, PNG or GIF up to 2MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t pt-6">
              <div className="flex justify-end space-x-4">
                <Button
                  variant="secondary"
                  onClick={() => navigate('/')}
                  disabled={isSubmitting}
                  type="button"
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Registering...' : 'Register as Doctor'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DoctorRegistration;