import React from "react";
import ContactDetails from "../../components/ContactPageComponents/ContactDetails/ContactDetails";
import ReservationForm from "../../components/ContactPageComponents/ReservationForm/ReservationForm";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Kontaktieren Sie uns</h1>
      <div className="contact-container">
        <ContactDetails />
        <ReservationForm />
      </div>
    </div>
  );
};

export default Contact;
