"use client";

import style from "./Services.module.css";
import { DM_Mono } from "next/font/google";
import { servicesData, servicesDataEn } from "@/data/data";
import {getServiceContent} from '@/data/language-handler'
import Image from "next/image";
import HeroCoverPhoto from "../../../public/assets/sections/Our_services2.png";

const dMMono = DM_Mono({ weight: "500", subsets: ["latin"] });

const Services = ({ lang }) => {
  const { titleLogic, liLogic, liLogic2, liLogic3, pLgoic } =
    getServiceContent(lang, servicesData, servicesDataEn);

  const ulStyle = `${dMMono.className} ${style.ulContainer}`
  return (
    <section className={style.container}>
      <div className={style.imageContainer}>
        <div className={style.layer}></div>
        <div className={style.layerTop}></div>
        <Image placeholder="blur" alt="lanube" src={HeroCoverPhoto} />
      </div>
      <div className={style.textContainer}>
        <h2>{titleLogic}</h2>
        <span className={style.h1Span}></span>

        <ul className={ulStyle}>
          <li>{liLogic}</li>
          <li>{liLogic2}</li>
          <li>{liLogic3}</li>
        </ul>
        <p>{pLgoic}</p>
      </div>
    </section>
  );
};

export default Services;
