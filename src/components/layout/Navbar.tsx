import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
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
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo variant={transparent ? 'light' : 'dark'} />
            </Link>
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