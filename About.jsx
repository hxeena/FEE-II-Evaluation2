import React from 'react'
import './about.css'

function About() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>Welcome to <span className="highlight">HealthCare Hub</span>, your trusted source for healthcare information and appointments.</p>
        <p>At <span className="highlight">HealthCare Hub</span>, we are dedicated to providing you with access to quality healthcare services at your fingertips.</p>
        <p>Explore nearby hospitals, schedule appointments with doctors, and take control of your health journey with us.</p>
      </div>
      <div className="about-us-image">
        <img src="https://i.pinimg.com/564x/79/94/6d/79946d3d6f7812daf428bc51fe4e6322.jpg" alt="About Us" />
      </div>
    </div>
  )
}

export default About