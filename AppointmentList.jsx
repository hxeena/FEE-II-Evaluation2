import React, { useState, useEffect } from "react";
import './home.css';
const AppointmentList = ({ addAppointment }) => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
        setAppointments(savedAppointments);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic goes here
    };

    return (
        <div>
            <h2>Appointment List</h2>
            <form onSubmit={handleSubmit}>
                {/* Your form fields go here */}
            </form>
            <ul>
                {appointments.map((appointment, index) => (
                    <li key={index}>
                        <p>Name: {appointment.name}</p>
                        <p>Date: {appointment.date}</p>
                        <p>Time Slot: {appointment.timeSlot}</p>
                        <p>Doctor: {appointment.doctor}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentList;
