"use client";

import React, { useRef, useEffect, useState } from "react";
import style from "./Hero.module.css";
import { Mukta } from "next/font/google";
import StickyNav from "../StickyNav/StickyNav";
import Button from "../UI/Buttons/Button";
import Image from "next/image";
import ButtonGetInTouch from "../UI/Buttons/ButtonGetInTouch";
import HeroCoverPhoto from "../../../public/assets/hero/hero.webp";
import { heroData, heroDataEn } from "@/data/data";

const mukta = Mukta({weight: "700", subsets: ["latin"] });

const Hero = ({ reservation, lang }) => {
  const [stickyNav, setStickyNav] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStickyNav(false);
        } else {
          setStickyNav(true);
        }
      },
      { rootMargin: "0px 20px 20px 20px" }
    );

    observer.observe(menuRef.current);
  }, []);

  return (
    <header ref={menuRef} className={style.container}>
      {stickyNav && <StickyNav />}
      <div className={style.imageContainer}>
        <Image placeholder="blur" alt="lanube" priority src={HeroCoverPhoto} />
      </div>
      <div className={style.textContainer}>
        <h1 >
          {!lang ? heroData.h1 : heroDataEn.h1}
        </h1>
        <p>{!lang ? heroData.p : heroDataEn.p}</p>
        <div className={style.btnContainer}>
          <Button
            className={mukta.style}
            engColorPrefix={lang ? true : false}
            url={reservation}
            name={!lang ? heroData.btn : heroDataEn.btn}
          />
          <ButtonGetInTouch
            url={!lang ? heroData.url : heroDataEn.url}
            name={!lang ? heroData.btn2 : heroDataEn.btn2}
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
