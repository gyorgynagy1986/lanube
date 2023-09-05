"use client";

import Image from "next/image";
import etlap from "../../../../public/assets/menu/1.webp";
import itallap from "../../../../public/assets/menu/2.webp";
import style from "./page.module.css";


const Menu = () => {
  const handleClickFood = () => {
    window.location.href = "/etlap.pdf";
  };

  const handleClickDrinks = () => {
    window.location.href = "/itallap.pdf";
  };

  return (
    <>
      <h1 className={style.h1}>Menu</h1>
      <div className={style.container}>
        <Image
          style={{ cursor: "pointer" }}
          onClick={handleClickFood}
          placeholder="blur"
          priority
          alt="La Nube étterem itallapja"
          src={itallap}
        />
        <Image
          style={{ cursor: "pointer" }}
          onClick={handleClickDrinks}
          placeholder="blur"
          priority
          alt="La Nube étterem Étlapja"
          src={etlap}
        />
      </div>
    </>
  );
};

export default Menu;
