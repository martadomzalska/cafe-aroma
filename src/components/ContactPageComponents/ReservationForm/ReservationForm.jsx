import React, { useState } from "react";
import "./ReservationForm.css";

const ReservationForm = () => {
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (e) => {
    setReservationData({
      ...reservationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservierungsdaten: ${JSON.stringify(reservationData, null, 2)}`);
    setReservationData({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: "",
    });
  };

  return (
    <div className="reservation-form">
      <h2>Reservieren Sie einen Tisch</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={reservationData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          E-Mail:
          <input
            type="email"
            name="email"
            value={reservationData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Datum:
          <input
            type="date"
            name="date"
            value={reservationData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Uhrzeit:
          <input
            type="time"
            name="time"
            value={reservationData.time}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Anzahl der Gäste:
          <input
            type="number"
            name="guests"
            value={reservationData.guests}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Reservieren</button>
      </form>
    </div>
  );
};

export default ReservationForm;
