import React from "react";
import PromotionCard from "../PromotionCard/PromotionCard";
import css from "./Promotions.module.css";

const Promotions = ({ promotions }) => {
  return (
    <section className={css.promotions}>
      <h2>Unsere Highlights der Woche</h2>
      <div className={css.promotionCards}>
        {promotions.map((promo, index) => (
          <PromotionCard
            key={index}
            image={promo.image}
            title={promo.title}
            description={promo.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Promotions;
