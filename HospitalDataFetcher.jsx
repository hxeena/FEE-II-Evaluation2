import React, { useState, useEffect } from 'react';

const HospitalDataFetcher = ({ onDataFetched }) => {
  useEffect(() => {
    fetch('http://localhost:3000/hospitals') // Update the URL to your json-server endpoint
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then((data) => {
        console.log('API Response:', data);
        onDataFetched(data); // Pass fetched data to the parent component
      })
      .catch((error) => {
        console.error('Error fetching hospital data:', error);
      });
  }, [onDataFetched]);

  return null; // No need to render anything in this component
};

export default HospitalDataFetcher;
