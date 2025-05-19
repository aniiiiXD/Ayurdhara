import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';

const DoctorPortal = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Mock appointments data with Indian names and Ayurvedic treatments
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "Arjun Sharma",
      date: "2023-11-15",
      time: "10:00 AM",
      status: "upcoming",
      zoomLink: "https://zoom.us/j/123456789",
      reason: "Panchakarma consultation"
    },
    {
      id: 2,
      patientName: "Deepika Patel",
      date: "2023-11-15",
      time: "11:30 AM",
      status: "upcoming",
      zoomLink: "https://zoom.us/j/987654321",
      reason: "Shirodhara therapy follow-up"
    },
    {
      id: 3,
      patientName: "Rajesh Malhotra",
      date: "2023-11-16",
      time: "09:15 AM",
      status: "upcoming",
      zoomLink: "https://zoom.us/j/567891234",
      reason: "Dosha assessment and balancing"
    },
    {
      id: 4,
      patientName: "Ananya Gupta",
      date: "2023-11-16",
      time: "02:30 PM",
      status: "upcoming",
      zoomLink: "https://zoom.us/j/345678912",
      reason: "Rasayana therapy discussion"
    }
  ]);

  // State for confirmation dialog
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [appointmentToDelete, setAppointmentToDelete] = useState(null);

  // Redirect to login if not authenticated
  if (!user || user.type !== 'doctor') {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Access Restricted</h2>
            <p className="mb-6">You need to log in as an Ayurvedic practitioner to access this area.</p>
            <Button
              variant="primary"
              onClick={() => navigate('/login/doctor')}
            >
              Vaidya Login
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleStartMeeting = (zoomLink) => {
    window.open(zoomLink, '_blank');
  };
  
  const handleDeleteConfirmation = (appointmentId) => {
    setAppointmentToDelete(appointmentId);
    setShowConfirmation(true);
  };
  
  const handleDeleteAppointment = () => {
    if (appointmentToDelete) {
      setAppointments(appointments.filter(appointment => appointment.id !== appointmentToDelete));
      setShowConfirmation(false);
      setAppointmentToDelete(null);
    }
  };
  
  const handleCancelDelete = () => {
    setShowConfirmation(false);
    setAppointmentToDelete(null);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container-custom py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h1 className="text-2xl font-bold mb-2">Vaidya Portal</h1>
            <p className="text-gray-600 mb-4">
              Namaste, Vaidya {user?.name || 'Acharya'}. Manage your virtual consultations and Ayurvedic treatment sessions below.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <Button 
                variant="primary"
                onClick={() => navigate('/doctor/appointments')}
                className="bg-green-600 hover:bg-green-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                All Consultations
              </Button>
            </div>
          </div>
          
          {/* Upcoming Appointments with Zoom Links */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Today's Consultations
            </h2>
            
            {appointments.length > 0 ? (
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="border border-green-100 rounded-lg p-4 hover:bg-green-50 transition duration-150">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <div>
                        <h3 className="text-lg font-medium">{appointment.patientName}</h3>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">{appointment.time}</span> • {appointment.date}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          Treatment: {appointment.reason}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="success" 
                          onClick={() => handleStartMeeting(appointment.zoomLink)}
                          className="flex items-center bg-green-600 hover:bg-green-700"
                        >
                          <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Start Consultation
                        </Button>
                        
                        <Button 
                          variant="danger"
                          onClick={() => handleDeleteConfirmation(appointment.id)}
                          className="flex items-center bg-red-500 hover:bg-red-600 text-white"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p>No consultations scheduled for today.</p>
              </div>
            )}
          </div>
          
          {/* Upcoming Schedule */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Upcoming Schedule
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Time</th>
                    <th className="py-3 px-4">Patient</th>
                    <th className="py-3 px-4">Treatment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">16 Nov 2023</td>
                    <td className="py-3 px-4">09:15 AM</td>
                    <td className="py-3 px-4">Rajesh Malhotra</td>
                    <td className="py-3 px-4">Dosha assessment and balancing</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">16 Nov 2023</td>
                    <td className="py-3 px-4">02:30 PM</td>
                    <td className="py-3 px-4">Ananya Gupta</td>
                    <td className="py-3 px-4">Rasayana therapy discussion</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">17 Nov 2023</td>
                    <td className="py-3 px-4">11:00 AM</td>
                    <td className="py-3 px-4">Vikram Singhania</td>
                    <td className="py-3 px-4">Abhyanga massage follow-up</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">17 Nov 2023</td>
                    <td className="py-3 px-4">03:45 PM</td>
                    <td className="py-3 px-4">Meera Iyer</td>
                    <td className="py-3 px-4">Vata dosha imbalance treatment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      
      {/* Confirmation Dialog */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Cancel Consultation</h3>
            <p className="mb-6">Are you sure you want to cancel this consultation? This action cannot be undone.</p>
            <div className="flex justify-end gap-3">
              <Button 
                variant="secondary" 
                onClick={handleCancelDelete}
              >
                No, Keep It
              </Button>
              <Button 
                variant="danger" 
                className="bg-red-500 hover:bg-red-600 text-white"
                onClick={handleDeleteAppointment}
              >
                Yes, Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default DoctorPortal;