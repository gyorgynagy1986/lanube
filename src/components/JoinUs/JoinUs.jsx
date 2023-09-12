"use client";

import React from "react";
import style from "./JoinUs.module.css";
import Button from "../UI/Buttons/Button";
import { JoinUsData, JoinUsDataEn } from "@/data/data";
import { getJoinUsContent } from "@/data/language-handler";

const text = (
  <p className={style.h2}>
    Ha Te is szívesen csatlakoznál csapatunkhoz, küldd el önéletrajzod az{" "}
    <span className={style.email}>hola@lanubebp.hu</span> e-mail címre, és
    hamarosan felvesszük Veled a kapcsolatot!
  </p>
);

const textEn = (
  <p className={style.h2}>
    If you would also like to join our team, send your CV to{" "}
    <span className={style.email}>hola@lanubebp.hu</span> and we will contact
    you soon!
  </p>
);

const JoinUs = ({ lang }) => {
  const { btnLogic, btnUrl, h2Logic } = getJoinUsContent(
    lang,
    JoinUsData,
    JoinUsDataEn
  );

  return (
    <div data-aos="fade-up" data-aos-offset="100" className={style.container}>
      <div
        data-aos="fade"
        data-aos-offset="150"
        className={style.containerText}
      >
        <h2>{h2Logic}</h2>
        {!lang ? text : textEn}
      </div>
      <div className={style.btnContainer}>
        <Button
          engColorPrefixJoin={lang ? true : false}
          name={btnLogic}
          url={btnUrl}
        />
      </div>
    </div>
  );
};

export default JoinUs;
