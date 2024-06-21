import React from 'react';
import './style/index.css'; // Example CSS file for styling the spinner

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-overlay">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
