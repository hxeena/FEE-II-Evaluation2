import React, { useState, useEffect } from "react";


const AppointmentForm = ({ addAppointment }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [timeSlot, setTimeSlot] = useState("");
    const [doctor, setDoctor] = useState("");

    useEffect(() => {
        const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
        if (savedAppointments.length > 0) {
            const lastAppointment = savedAppointments[savedAppointments.length - 1];
            setName(lastAppointment.name);
            setDate(lastAppointment.date);
            setTimeSlot(lastAppointment.timeSlot);
            setDoctor(lastAppointment.doctor);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() !== "" && date.trim() !== "" && timeSlot.trim() !== "" && doctor.trim() !== "") {
            const appointment = { name, date, timeSlot, doctor };
            addAppointment(appointment);
            const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
            localStorage.setItem("appointments", JSON.stringify([...appointments, appointment]));
            setName("");
            setDate("");
            setTimeSlot("");
            setDoctor("");
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div>
            <h2>Appointment Form</h2>
            <form onSubmit={handleSubmit}>
                {/* Input fields */}
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="timeSlot">Time Slot:</label>
                    <select
                        id="timeSlot"
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                    >
                        <option value="">Select Time Slot</option>
                        <option value="9:00 AM to 10:00 AM">9:00 AM to 10:00 AM</option>
                        <option value="10:00 AM to 11:00 AM">10:00 AM to 11:00 AM</option>
                        {/* Add more time slots here as needed */}
                    </select>
                </div>
                <div>
                    <label htmlFor="doctor">Doctor:</label>
                    <select
                        id="doctor"
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                    >
                        <option value="">Select Doctor</option>
                        <option value="Dr. Smith">Dr. Smith</option>
                        <option value="Dr. Johnson">Dr. Johnson</option>
                        <option value="Dr. Brown">Dr. Brown</option>
                        {/* Add more doctors here as needed */}
                    </select>
                </div>
                <button type="submit">Add Appointment</button>
            </form>
        </div>
    );
};

export default AppointmentForm;
