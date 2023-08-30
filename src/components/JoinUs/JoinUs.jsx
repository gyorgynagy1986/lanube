"use client";

import React from "react";
import style from "./JoinUs.module.css";
import Button from "../UI/Buttons/Button";
import { Dosis } from "next/font/google";
import { JoinUsData, JoinUsDataEn } from "@/data/data";
import { getJoinUsContent } from "@/data/language-handler";
const dosis = Dosis({ subsets: ["latin"] });

const text = (
  <p className={style.h2}>
    Ha Te is szívesen csatlakoznál csapatunkhoz, küldd el önéletrajzod az{" "}
    <span>hola@lanubebp.hu</span> e-mail címre, és mi hamarosan felvesszük Veled
    a kapcsolatot!
  </p>
);

const textEn = (
  <p className={style.h2}>
    If you would like to join to our team, please send your CV to{" "}
    <span>hola@lanubebp.hu</span> and we will contact you soon!
  </p>
);

const JoinUs = ({ lang }) => {
  const { btnLogic, btnUrl, h2Logic } = getJoinUsContent(
    lang,
    JoinUsData,
    JoinUsDataEn
  );

  return (
    <div className={style.container}>
      <div className={style.containerText}>
        <h2 className={dosis.className}>{h2Logic}</h2>
        <span className={style.h1Span}></span>
        {!lang ? text : textEn}
      </div>
      <div className={style.btnContainer}>
        <Button
          engColorPrefixJoin={lang ? true : false}
          btEmpthy={true}
          name={btnLogic}
          url={btnUrl}
        />
      </div>
    </div>
  );
};

export default JoinUs;
