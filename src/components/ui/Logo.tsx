
import React from 'react';

type LogoProps = {
  size?: 'small' | 'medium' | 'large';
};

const Logo = ({ size = 'medium' }: LogoProps) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };
  
  return (
    <div className={`relative ${sizeClasses[size]}`}>
      <div className="absolute inset-0 bg-primary rounded-md rotate-45 transform -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute inset-0 bg-secondary rounded-md -rotate-12 transform translate-x-1/4 -translate-y-1/4 opacity-90"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
        <span className={size === 'small' ? 'text-sm' : size === 'medium' ? 'text-base' : 'text-lg'}>CC</span>
      </div>
    </div>
  );
};

export default Logo;
