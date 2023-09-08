"use client";

import React from "react";
import Image from "next/image";
import style from "./PhotoGallery.module.css";

import photo from "../../../public/assets/gallery/covers/Gallery1.jpg";
import photo1 from "../../../public/assets/gallery/covers/Gallery2.jpg";
import photo2 from "../../../public/assets/gallery/covers/Gallery3.jpg";
import photo3 from "../../../public/assets/gallery/covers/Gallery4.jpg";
import photo4 from "../../../public/assets/gallery/covers/Gallery5.jpg";
import photo5 from "../../../public/assets/gallery/covers/Gallery6.jpg";
import photo6 from "../../../public/assets/gallery/covers/Gallery7.jpg";
import photo7 from "../../../public/assets/gallery/covers/Gallery8.jpg";
import photo8 from "../../../public/assets/gallery/covers/Gallery9.jpg";
import photo9 from "../../../public/assets/gallery/covers/Gallery10.jpg";
import photo10 from "../../../public/assets/gallery/covers/Gallery11.jpg";
import photo11 from "../../../public/assets/gallery/covers/Gallery12.jpg";
import photo12 from "../../../public/assets/gallery/covers/Gallery13.jpg";

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
  {
    id: 9,
    alt: "La Nube geléria cover photos",
    url: photo8,
  },
  {
    id: 10,
    alt: "La Nube geléria cover photos",
    url: photo9,
  },
  {
    id: 11,
    alt: "La Nube geléria cover photos",
    url: photo10,
  },
  {
    id: 12,
    alt: "La Nube geléria cover photos",
    url: photo11,
  },
  {
    id: 13,
    alt: "La Nube geléria cover photos",
    url: photo12,
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
