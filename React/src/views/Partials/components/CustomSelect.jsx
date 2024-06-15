import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function CustomSelect({ countries }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const dropdownRef = useRef(null);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCountry ? (
          <div className="flex items-center">
            <div
              className="w-5 h-5 mr-2"
              style={{
                backgroundImage: `url(${selectedCountry.flags.png})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <span>{selectedCountry.name.common}</span>
          </div>
        ) : (
          <span>Select a country</span>
        )}
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto">
          {countries.map((country) => (
            <li
              key={country.name.common}
              className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(country)}
            >
              <div
                className="w-5 h-5 mr-2"
                style={{
                  backgroundImage: `url(${country.flags.png})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <span>{country.name.common}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect; 
