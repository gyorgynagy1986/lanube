"use client";

import { useState } from "react";
import style from "./page.module.css";
import CoverPhotoItems from "@/components/PhotoGallery/CoverPhotoItems";
import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";

const Gallery = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(null);

  const openGallery = (id) => {
    setSelectedImageId(id);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setSelectedImageId(null);
    setGalleryOpen(false);
  };

  return (
    <>
      {!galleryOpen && <h1 className={style.h1}>Galéria </h1>
      }       
      {!galleryOpen && (
        <div className={style.container}>
          {!galleryOpen && (
            <CoverPhotoItems photoGalleryHandler={openGallery} />
          )}
        </div>
      )}


      {galleryOpen && (
        <PhotoGallery
          imageId={selectedImageId}
          clickedItem={selectedImageId}
          galleryClose={closeGallery}
        />
      )}
    </>
  );
};

export default Gallery;
