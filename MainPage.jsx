import React from 'react'
import Navbar from './Navbar'
import TextAndPicture from './TextAndPicture'
import HorizontalCards from './HorizontalCards'
import NearbyHospitals from './NearbyHospitals'
import Fetch from './Fetch'

function MainPage() {
  return (
    <div>
        <Navbar/>
        <TextAndPicture/>
        <Fetch/>
        <NearbyHospitals/>
    </div>
  )
}

export default MainPage