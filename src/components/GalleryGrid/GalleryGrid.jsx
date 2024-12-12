import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import galleryImages from "../../data/galleryData";
import css from "./GalleryGrid.module.css";

function GalleryGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className={css.galleryGrid}>
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className={css.galleryItem}
            onClick={() => openLightbox(index)}
          >
            <img src={image.src} className={css.galleryImg} alt={image.alt} />
          </div>
        ))}
      </div>
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={galleryImages.map((img) => ({ src: img.src }))}
          index={currentImageIndex}
        />
      )}{" "}
    </>
  );
}

export default GalleryGrid;
