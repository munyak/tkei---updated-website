import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '', color = '#F8E7FF' }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="
        M 20,50
        L 50,20
        L 80,50
        L 80,80
        L 20,80
        L 20,50
        L 50,20
        M 50,20
        L 65,35
        L 65,80
      " />
    </svg>
  );
};

export default Logo;