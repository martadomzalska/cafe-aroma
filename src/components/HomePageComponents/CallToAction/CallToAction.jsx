import React from "react";
import css from "./CallToAction.module.css";

const CallToAction = ({ onButtonClick }) => {
  return (
    <section className={css.cta}>
      <h2>Bereit für ein unvergessliches Kaffee-Erlebnis?</h2>
      <p>Besuche uns im Cafe Aroma und entdecke, was unsere Gäste so lieben.</p>
      <button className={css.ctaButton} onClick={onButtonClick}>
        Besuche uns
      </button>
    </section>
  );
};

export default CallToAction;
