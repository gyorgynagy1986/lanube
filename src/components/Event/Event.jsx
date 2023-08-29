import React from "react";
import style from "./Event.module.css";
import Button from "../UI/Buttons/Button";
import { Mukta } from "next/font/google";
import { ourEventData, ourEventDataEn } from "@/data/data";
import { getOurEventContent } from "@/data/language-handler";

const mukta = Mukta({ weight: "400", subsets: ["latin"] });

const Event = ({ lang }) => {
  const { h2Logic, pLogic, buttonNameLogic, urlLogic } = getOurEventContent(
    lang,
    ourEventData,
    ourEventDataEn
  );

  return (
    <div className={style.container}>
      <div className={style.containerText}>
        <h2>{h2Logic}</h2>
        <span className={style.h1Span}></span>
        <p className={mukta.className}>{pLogic}</p>
        </div>
        <div>
          <Button
            engColorPrefixBlueContact={lang ? true : false}
            btEmpthy={true}
            name={buttonNameLogic}
            url={urlLogic}
          />
      
      </div>
    </div>
  );
};

export default Event;
