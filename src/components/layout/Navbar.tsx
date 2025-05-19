import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface NavbarProps {
  transparent?: boolean;
} 

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const isActive = (path: string) => location.pathname === path;
  
  const getNavbarClass = () => {
    return transparent
      ? 'bg-transparent text-white'
      : 'bg-white text-gray-800 shadow-sm';
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${getNavbarClass()}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 select-none">
            {/* Leaf Icon */}
            <svg
              className="w-7 h-7 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21C12 21 4 13.5 4 8.5C4 5.46243 6.46243 3 9.5 3C11.1569 3 12.6569 3.84315 13.4645 5.12132C14.2721 3.84315 15.7721 3 17.4289 3C20.4665 3 22.9289 5.46243 22.9289 8.5C22.9289 13.5 15 21 15 21H12Z"
              />
            </svg>
            <span className="text-2xl font-bold tracking-wide text-green-700 font-serif drop-shadow-sm">
              AYURDHARA
            </span>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {user ? (
                <>
                  <span className="px-3 py-2">Welcome, {user.name}</span>
                  <button
                    onClick={logout}
                    className="px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login/patient" 
                    className={`px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white ${
                      isActive('/login/patient') ? 'font-bold' : ''
                    }`}
                  >
                    Patient Login
                  </Link>
                  <Link 
                    to="/login/doctor" 
                    className={`px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white ${
                      isActive('/login/doctor') ? 'font-bold' : ''
                    }`}
                  >
                    Doctor Login
                  </Link>
                  <Link 
                    to="/login/student" 
                    className={`px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white ${
                      isActive('/login/student') ? 'font-bold' : ''
                    }`}
                  >
                    Student Login
                  </Link>
                </>
              )}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-gray-800 shadow-lg pb-3 slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {user ? (
              <>
                <div className="px-3 py-2 font-medium">Welcome, {user.name}</div>
                <button
                  onClick={logout}
                  className="block px-3 py-2 w-full text-left rounded-md text-base font-medium hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login/patient"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  Patient Login
                </Link>
                <Link
                  to="/login/doctor"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  Doctor Login
                </Link>
                <Link
                  to="/login/student"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  Student Login
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;