import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';
import { Video, Clock, Calendar, User, Users } from 'lucide-react';

const StudentPortal = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Redirect to login if not authenticated
  if (!user || user.type !== 'student') {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Access Restricted</h2>
            <p className="mb-6">You need to log in as a student to access this area.</p>
            <Button
              variant="primary"
              onClick={() => navigate('/login/student')}
            >
              Student Login
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Mock data for Zoom meetings
  const zoomMeetings = [
    {
      id: 1,
      title: "Introduction to Ayurveda Principles",
      date: "June 15, 2025",
      time: "10:00 AM - 11:30 AM",
      instructor: "Dr. Raj Sharma",
      meetingId: "817 2090 3456",
      passcode: "ayurveda",
      meetingLink: "https://zoom.us/j/81720903456",
    },
    {
      id: 2,
      title: "Anatomy and Physiology",
      date: "June 16, 2025",
      time: "2:00 PM - 3:30 PM",
      instructor: "Dr. Priya Patel",
      meetingId: "895 6432 1098",
      passcode: "anatomy",
      meetingLink: "https://zoom.us/j/89564321098",
    },
    {
      id: 3,
      title: "Herbal Medicine Preparation",
      date: "June 18, 2025",
      time: "11:00 AM - 1:00 PM",
      instructor: "Dr. Anil Kumar",
      meetingId: "763 5421 9087",
      passcode: "herbs",
      meetingLink: "https://zoom.us/j/76354219087",
    },
    {
      id: 4,
      title: "Panchakarma Procedures Workshop",
      date: "June 20, 2025",
      time: "9:00 AM - 12:00 PM",
      instructor: "Dr. Meena Gupta",
      meetingId: "902 4567 1235",
      passcode: "workshop",
      meetingLink: "https://zoom.us/j/90245671235",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container-custom py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h1 className="text-2xl font-bold mb-2">Student Portal</h1>
            <p className="text-gray-600">
              Welcome to your student portal. Here you can access all your online classes and learning resources.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Upcoming Zoom Meetings</h2>
              <Button variant="outline" size="small">View All Classes</Button>
            </div>
            
            <div className="space-y-4">
              {zoomMeetings.map((meeting) => (
                <div 
                  key={meeting.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-semibold">{meeting.title}</h3>
                      <div className="flex items-center text-gray-600 mt-2">
                        <Calendar size={16} className="mr-1" />
                        <span className="mr-4">{meeting.date}</span>
                        <Clock size={16} className="mr-1" />
                        <span>{meeting.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mt-2">
                        <User size={16} className="mr-1" />
                        <span>Instructor: {meeting.instructor}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <a 
                        href={meeting.meetingLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium flex items-center justify-center mb-2"
                      >
                        <Video size={18} className="mr-2" />
                        Join Meeting
                      </a>
                      <div className="text-xs text-gray-500 text-center">
                        Meeting ID: {meeting.meetingId} | Passcode: {meeting.passcode}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-lg font-semibold">Course Schedule</h2>
              </div>
              <p className="text-gray-600 mb-4">
                View your complete course schedule with all upcoming classes and assignments.
              </p>
              <Button variant="outline" className="w-full">View Schedule</Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold">Learning Resources</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Access study materials, textbooks, and reference guides for all your courses.
              </p>
              <Button variant="outline" className="w-full">Access Resources</Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <Users className="h-6 w-6 text-yellow-600" />
                </div>
                <h2 className="text-lg font-semibold">Discussion Forums</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Participate in course discussions, ask questions, and collaborate with peers.
              </p>
              <Button variant="outline" className="w-full">Join Discussions</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudentPortal;