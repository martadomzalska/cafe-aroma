import React from "react";
import MenuCard from "../../components/MenuCard/MenuCard";
import css from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={css.menu}>
      <h2 className={css.menuTitle}>Unser Menü</h2>
      <p className={css.menuParagraph}>
        Entdecken Sie die köstlichen Spezialitäten von Cafe Aroma.
      </p>
      <MenuCard />
    </div>
  );
};

export default Menu;
