import Link from "next/link";
import React from "react";
import style from "./Button.module.css";
import { Mukta } from "next/font/google";
import { Bebas_Neue } from "next/font/google";

const mukta = Mukta({ subsets: ["latin"], weight: "700" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Button = ({ name, url, btEmpthy, btnFooter }) => {
  return (
    <Link href={url}>
      <button
        className={`${style.button}
           ${!btnFooter && mukta.className}
           ${btEmpthy && style.btEmpthy}
           ${btnFooter && style.btnFooter}
           ${btnFooter && bebas.className}
           `}
      >
        {name}
      </button>
    </Link>
  );
};

export default Button;
