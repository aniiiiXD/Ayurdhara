import React from 'react';
import { Heart } from 'lucide-react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', variant = 'dark' }) => {
  const sizeClasses = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-4xl',
  };
  
  const colorClasses = {
    light: 'text-white',
    dark: 'text-primary',
  };

  return (
    <div className={`font-heading font-bold flex items-center ${sizeClasses[size]} ${colorClasses[variant]}`}>
      <Heart className="mr-1.5 text-secondary" />
      <span>mr</span>
    </div>
  );
};

export default Logo;