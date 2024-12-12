import React from "react";
import css from "./PromotionCard.module.css";

const PromotionCard = ({ image, title, description }) => {
  return (
    <div className={css.card}>
      <img src={image} alt={title} />
      <div className={css.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PromotionCard;
