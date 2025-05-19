import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PatientPortal from './pages/patient/PatientPortal';
import DoctorPortal from './pages/doctor/DoctorPortal';
import StudentPortal from './pages/student/StudentPortal';
import LoginPage from './pages/LoginPage';
import HealthBlogs from './pages/patient/HealthBlogs';
import Support from './pages/Support';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import { AuthProvider } from './contexts/AuthContext';
import DoctorRegistration from './pages/registration/Registeration';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login/:userType" element={<LoginPage />} />
        <Route path="/patient/*" element={<PatientPortal />} />
        <Route path="/doctor/*" element={<DoctorPortal />} />
        <Route path="/student/*" element={<StudentPortal />} />
        <Route path="/blogs" element={<HealthBlogs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/registration" element={<DoctorRegistration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;