import css from "./Gallery.module.css";
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";

const Gallery = () => {
  return (
    <div className={css.gallery}>
      <h1 className={css.galleryTitle}>Galerie</h1>
      <p className={css.galleryParagraph}>
        Einblicke in die Atmosphäre unseres Cafés
      </p>
      <GalleryGrid />
    </div>
  );
};

export default Gallery;
