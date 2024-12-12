import css from "./HeroSection.module.css";

const HeroSection = ({ onButtonClick }) => {
  return (
    <section className={css.hero}>
      <div className={css.heroContent}>
        <h1>Dein aromatisches Refugium im Herzen der Stadt</h1>
        <p>
          Willkommen im Cafe Aroma – wo Kaffee zum Ritual wird und jeder Moment
          einzigartig schmeckt.
        </p>
        <button className={css.ctaButton} onClick={onButtonClick}>
          Entdecke unser Menü
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
