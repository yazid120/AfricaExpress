import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CountryList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching country data:', error);
      });
  }, []);

  return (
    <>
    <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary">
    {countries.map(country => (
    <option key={country.name.common} value={country.cca2} className="flex items-center">
      <p
        className="w-5 h-5 mr-2"
        style={{ backgroundImage: `url(${country.flags.png})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <p>{country.name.common}</p>
    </option>
  ))}
  </select>
  </>
  );
}

export default CountryList;
