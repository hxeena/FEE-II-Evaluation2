import { Link } from 'react-router-dom';
import React from 'react';

import './TextAndPicture.css'

const TextAndPicture = () => {
  return (
    <div class="container">
  <div class="text-container">
    <h2>Find Nearby Hospitals and Schedule Appointments Hassle-Free!</h2>
    <p>Easily book appointments at top-rated hospitals near you, ensuring timely access to healthcare when you need it most</p>
    
    <Link to="/Home"><button>Book your appointment now</button></Link>
   
  </div>
  <div class="image-container"></div>
</div>
  );
};

export default TextAndPicture;


