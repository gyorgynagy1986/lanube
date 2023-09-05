import React from "react";
import Link from "next/link";
import style from "./Button.module.css";
import { Mukta } from "next/font/google";

const bebas = Mukta({ subsets: ["latin"], weight: "700" });

const ButtonGetInTouch = ({ url, name, underline, yellow }) => {
  return (
    <Link href={url}>
      <button
        className={`${style.buttonGetInTouch} ${yellow && style.buttonGetInTouchYellow} ${underline && style.underline} ${
          bebas.className
        }`}
      >
        {name}
      </button>
    </Link>
  );
};

export default ButtonGetInTouch;
