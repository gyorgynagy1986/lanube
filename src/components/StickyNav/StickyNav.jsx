import React from "react";
import style from "./StickyNav.module.css";
import Navbar from "../Navbar/Navbar";
import Logo from '@/components/UI/Logo/Logo';
import Image from "next/image";

const StickyNav = () => {
  return (
    <div className={`${style.stickynav} ${style.opacity}`}>
      <div className={style.stickynavContainer}>
        <Logo />
        <Navbar nav={true} />
      </div>
    </div>
  );
};

export default StickyNav;
