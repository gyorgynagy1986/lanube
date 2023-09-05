"use client";

import React from "react";
import Image from "next/image";
import style from "./PhotoGallery.module.css";

import photo from "../../../public/assets/gallery/covers/Gallery1.webp";
import photo1 from "../../../public/assets/gallery/covers/Gallery2.webp";
import photo2 from "../../../public/assets/gallery/covers/Gallery3.webp";
import photo3 from "../../../public/assets/gallery/covers/Gallery4.webp";
import photo4 from "../../../public/assets/gallery/covers/Gallery5.webp";
import photo5 from "../../../public/assets/gallery/covers/Gallery6.webp";
import photo6 from "../../../public/assets/gallery/covers/Gallery7.webp";
import photo7 from "../../../public/assets/gallery/covers/Gallery8.webp";

const photoGalleryCoverPhots = [
  {
    id: 1,
    alt: "La Nube geléria cover photos",
    url: photo,
  },
  {
    id: 2,
    alt: "La Nube geléria cover photos",
    url: photo1,
  },
  {
    id: 3,
    alt: "La Nube geléria cover photos",
    url: photo2,
  },
  {
    id: 4,
    alt: "La Nube geléria cover photos",
    url: photo3,
  },
  {
    id: 5,
    alt: "La Nube geléria cover photos",
    url: photo4,
  },
  {
    id: 6,
    alt: "La Nube geléria cover photos",
    url: photo5,
  },
  {
    id: 7,
    alt: "La Nube geléria cover photos",
    url: photo6,
  },
  {
    id: 8,
    alt: "La Nube geléria cover photos",
    url: photo7,
  },
];

const CoverPhotoItems = ({ photoGalleryHandler }) => {
  const handleClick = (id) => {
    photoGalleryHandler(id);
  };

  return (
    <>
      {photoGalleryCoverPhots.map((coverPhoto) => (
        <div
          onClick={() => handleClick(coverPhoto.id)}
          className={style.hoverProperty}
          key={coverPhoto.id}
        >
          <Image
            // priority
            className={style.photoCoverImg}
            placeholder="blur"
            onClick={() => handleClick(coverPhoto.id)}
            alt={coverPhoto.alt}
            src={coverPhoto.url}
          ></Image>
        </div>
      ))}
    </>
  );
};

export default CoverPhotoItems;
