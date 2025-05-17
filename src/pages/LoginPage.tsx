import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';
import { Mail, Lock, User } from 'lucide-react';

type UserTypeParam = {
  userType: string;
};

const LoginPage = () => {
  const { userType } = useParams<UserTypeParam>();
  const navigate = useNavigate();
  const { login, user } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate(`/${user.type}`);
    }
  }, [user, navigate]);
  
  // Validate userType
  useEffect(() => {
    if (!['patient', 'doctor', 'student'].includes(userType || '')) {
      navigate('/');
    }
  }, [userType, navigate]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await login(
        email, 
        password, 
        userType as 'patient' | 'doctor' | 'student'
      );
      
      if (success) {
        navigate(`/${userType}`);
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const getUserTypeIcon = () => {
    switch (userType) {
      case 'patient':
        return <User className="h-12 w-12 text-blue-500" />;
      case 'doctor':
        return <User className="h-12 w-12 text-green-500" />;
      case 'student':
        return <User className="h-12 w-12 text-yellow-500" />;
      default:
        return <User className="h-12 w-12 text-gray-500" />;
    }
  };
  
  const getUserTypeTitle = () => {
    return userType ? userType.charAt(0).toUpperCase() + userType.slice(1) : '';
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container-custom">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-50 px-6 py-8 text-center">
              <div className="flex justify-center mb-4">
                {getUserTypeIcon()}
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {getUserTypeTitle()} Login
              </h2>
              <p className="text-gray-600 mt-1">
                Enter your credentials to access your account
              </p>
            </div>
            
            <div className="p-6">
              {error && (
                <div className="bg-red-50 text-red-700 p-3 rounded mb-4 text-sm">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <Input 
                  type="email"
                  label="Email Address"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={<Mail size={18} />}
                  required
                />
                
                <Input 
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  icon={<Lock size={18} />}
                  required
                />
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                    Forgot password?
                  </a>
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
                
                <p className="mt-4 text-sm text-center text-gray-600">
                  Don't have an account?{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoginPage;