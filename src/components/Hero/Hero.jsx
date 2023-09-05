"use client";

import React, { useRef, useEffect, useState } from "react";
import style from "./Hero.module.css";
import { Mukta } from "next/font/google";
import StickyNav from "../StickyNav/StickyNav";
import Button from "../UI/Buttons/Button";
import Image from "next/image";
import HeroCoverPhoto from "../../../public/assets/hero/hero.webp";
import { heroData, heroDataEn } from "@/data/data";
import { getHeroContent } from "@/data/language-handler";

const mukta = Mukta({ weight: "700", subsets: ["latin"] });

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

  const { h1Data, pData, btnNameName, btnNameSec, btnNameSecUrl } =
    getHeroContent(lang, heroData, heroDataEn);

  return (
    <header ref={menuRef} className={style.container}>
      {stickyNav && <StickyNav />}
      <div className={style.imageContainer}>
        <Image placeholder="blur" alt="lanube" priority src={HeroCoverPhoto} />
      </div>
      <div className={style.textContainer}>
        <h1>{h1Data}</h1>
        <p>{pData}</p>
        <div className={style.btnContainer}>
          <Button
            className={mukta.className}
            url={reservation}
            name={btnNameName}
          />
          <Button btEmpthy={true} url={btnNameSecUrl} name={btnNameSec} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
