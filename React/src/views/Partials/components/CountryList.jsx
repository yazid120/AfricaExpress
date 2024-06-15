import React, { useEffect, useState } from 'react';
import CustomSelect from './CustomSelect';
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Country Selector</h1>
      <CustomSelect countries={countries} />
    </div>
  </>
  );
}

export default CountryList;
