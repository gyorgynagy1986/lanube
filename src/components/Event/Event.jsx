"use client"

import React from "react";
import style from "./Event.module.css";
import Button from "../UI/Buttons/Button";
import { Mukta } from "next/font/google";
import { ourEventData, ourEventDataEn } from "@/data/data";
import { getOurEventContent } from "@/data/language-handler";
import { usePathname } from "next/navigation";

const mukta = Mukta({ weight: "400", subsets: ["latin"] });

const Event = ({ lang }) => {
const path = usePathname()

  const { h2Logic, pLogic, buttonNameLogic, urlLogic } = getOurEventContent(
    lang,
    ourEventData,
    ourEventDataEn
  );

  return (
    <div data-aos="fade-up" data-aos-offset="100" className={style.container}>
      <div
        data-aos="fade"
        data-aos-offset="150"
        className={style.containerText}
      >
        { path.startsWith("/en") ? <h2>Interested in hosting an event at La Nube?</h2> : <h2>Szeretnél egy rendezvényt a <span style={{whiteSpace:"nowrap"}}> La Nube-ban? </span></h2>}
        <p className={mukta.className}>{pLogic}</p>
      </div>
      <div>
        <div className={style.btnContainer}>
          <Button
            engColorPrefixBlueContact={lang ? true : false}
            name={buttonNameLogic}
            url={urlLogic}
          />
        </div>
      </div>
    </div>
  );
};

export default Event;
