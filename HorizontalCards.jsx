import React from 'react';
import './HorizontalCards.css';
import HospitalDataFetcher from './HospitalDataFetcher';


const HorizontalCards = ({ hospitals }) => {
  // Extract the first two hospitals for demonstration
  const firstTwoHospitals = hospitals.slice(0, 5);

  return (
    <div className='whole'>
      <div className="head">
        <h2>Top Hospitals in India</h2>
      </div>
      <div className="scrollable-container">
        <div className="card-container">
         
        {firstTwoHospitals.map((hospital, index) => (
            <div key={index} className="card">
              <h2>{hospital.name}</h2>
              <img className="img" src={hospital.location} alt={hospital.name} />
              {/* Assuming you want to display a button for each hospital */}
              <button><a href='http://www.apollohospitals.com/' style={{textDecoration:'none',color:"white"}}>visit site</a></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCards;
