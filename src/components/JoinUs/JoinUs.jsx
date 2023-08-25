"use client";

import React from "react";
import style from "./JoinUs.module.css";
import Button from "../UI/Buttons/Button";
import { Dosis } from "next/font/google";

const dosis = Dosis({ subsets: ["latin"] });

const textContent = {
  h2: "Dolgozz velünk!",
  btn: "Jelentkezem",
  url: "/kapcsolat",
};

const textContentEn = {
  h2: "Join our team! ",
  btn: "I want to join",
  url: "/en/contact",
};

const text = (
  <p className={style.h2}>
    Írj nekünk az <span>hola@lanubebp.hu</span> e-mail címre és küldd el
    önéletrajzod a pozíció megjelölésével. Amint tudunk, visszajelzünk!
  </p>
);
const textEn = (
  <p className={style.h2}>
    Send us an e-mail to <span>hola@lanubebp.hu</span> with your CV and position
    you’d be interested in. We’ll get back to you as soon as possible!
  </p>
);

const JoinUs = ({ lang }) => {

  const btnLogic = !lang ? textContent.btn : textContentEn.btn;
  const btnUrl = !lang ? textContent.url : textContentEn.url;
  const h2Logic = !lang ? textContent.h2 : textContentEn.h2;

  return (
    <section className={style.container}>
      <div className={style.containerText}>
        <h2 className={dosis.className}>{h2Logic}</h2>
        {!lang ? text : textEn}
        <Button
          engColorPrefixJoin={lang ? true : false}
          differentTexMainColor={true}
          name={btnLogic}
          url={btnUrl}
        />
      </div>
    </section>
  );
};

export default JoinUs;
