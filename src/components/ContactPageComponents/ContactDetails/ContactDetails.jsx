import React from "react";
import "./ContactDetails.css";

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <h2>Adresse</h2>
      <p>Cafe Aroma</p>
      <p>Bergstraße 12, 10115 Berlin, Deutschland</p>
      <iframe
        title="Cafe Aroma Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.220684523592!2d13.390676815678555!3d52.53167734376588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e3f4b68915%3A0xb5b80729cb4760f2!2sBergstra%C3%9Fe%2012%2C%2010115%20Berlin%2C%20Germany!5e0!3m2!1sen!2spl!4v1697310325875!5m2!1sen!2spl"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactDetails;
