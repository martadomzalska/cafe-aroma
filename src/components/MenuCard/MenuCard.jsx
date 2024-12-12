import menuData from "../../data/menuData";
import css from "./MenuCard.module.css";
function MenuCard() {
  return (
    <div className={css.menuCategories}>
      {menuData.map((category, index) => (
        <div key={index} className={css.menuCategory}>
          <h2>{category.category}</h2>
          <div className={css.menuItems}>
            {category.items.map((item, idx) => (
              <div key={idx} className={css.menuItem}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={css.menuItemImage}
                />
                <div className={css.menuItemContent}>
                  <div className={css.menuItemHeader}>
                    <h3>{item.name}</h3>
                    <span className={css.menuItemPrice}>{item.price}</span>
                  </div>
                  <p className={css.menuItemDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuCard;
