
import React, { useState } from 'react';
import HospitalDataFetcher from './HospitalDataFetcher';
import HorizontalCards from './HorizontalCards';


const Fetch = () => {
  const [hospitalData, setHospitalData] = useState([]);

  const handleHospitalData = (data) => {
    setHospitalData(data);
  };

  return (
    <div className="Fetch">

      <HospitalDataFetcher onDataFetched={handleHospitalData} />
      <HorizontalCards hospitals={hospitalData} />
    </div>
  );
};

export default Fetch;
