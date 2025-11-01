import React from 'react';

const FancyLoader = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8 h-screen">
      {/* Gradient Rotating Ring */}
      <div
        className={`${sizeClasses[size]} relative`}
        style={{
          animation: 'spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
        }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-transparent bg-linear-to-r from-primary via-purple-500 to-pink-500 opacity-75 blur-sm"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-ful"></div>
      </div>

      {/* Pulsating Text */}
      <p
        className="text-lg font-medium text-primary animate-pulse"
        style={{
          animation: 'pulse 2s ease-in-out infinite',
        }}
      >
        {text}
      </p>

      
    </div>
  );
};

export default FancyLoader;