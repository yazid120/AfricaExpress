import React from 'react';
import { useState } from 'react';

const SubHeader = () => {
  const [activeTitle, setActiveTitle] = useState(null);
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      setActiveTitle(sectionId);
    }
  };

  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4 pl-8">
        <li className={`cursor-pointer hover:font-semibold ${activeTitle === 'description' ? 'font-semibold' : ''}`} onClick={() => scrollToSection('description')}>Description</li>
          <li className={`cursor-pointer hover:font-semibold ${activeTitle === 'specifications' ? 'font-semibold' : ''}`} onClick={() => scrollToSection('specifications')}>Specifications</li>
          <li className={`cursor-pointer hover:font-semibold ${activeTitle === 'ratingsReviews' ? 'font-semibold' : ''}`} onClick={() => scrollToSection('ratingsReviews')}>Ratings & Reviews</li>
          <li className={`cursor-pointer hover:font-semibold ${activeTitle === 'relatedproducts' ? 'font-semibold' : ''}`} onClick={() => scrollToSection('relatedproducts')}>Related products</li>
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;
