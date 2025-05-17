import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  icon,
  iconPosition = 'left',
  className,
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-light focus:ring-2 focus:ring-primary/50',
    secondary: 'bg-secondary text-white hover:bg-secondary-light focus:ring-2 focus:ring-secondary/50',
    outline: 'border border-primary text-primary hover:bg-primary/5 focus:ring-2 focus:ring-primary/30',
    ghost: 'text-primary hover:bg-primary/5 focus:ring-2 focus:ring-primary/30',
  };

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };

  const baseClasses = 'rounded-md font-medium transition-all duration-200 inline-flex items-center justify-center focus:outline-none';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;