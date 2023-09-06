import React from "react";
import style from "./Contact.module.css";
import Button from "../UI/Buttons/Button";
import Image from "next/image";
import ContactItems from "./ContactItems";
import mapPhoto from "../../../public/assets/sections/map_contact.png";
import { contactComponentsData, contactComponentsDataEn } from "@/data/data";
import { getOurcontact } from "@/data/language-handler";

const Contact = ({ reservation, lang }) => {
  const { title, btn, btn2 } = getOurcontact(
    lang,
    contactComponentsData,
    contactComponentsDataEn
  );

  return (
    <section id="opening" className={style.container}>
      <div className={style.imageContainer}>
        <div className={style.layer}></div>
        <Image placeholder="blur" alt="La Nube" src={mapPhoto} />
      </div>
      <div className={style.textContainer}>
        <h2>{title}</h2>
        <div className={style.textBoxContainer}>
          <ContactItems lang={lang} />
        </div>
        <div className={style.btnContainer}>
          <Button
            engColorPreReserv={lang ? true : false}
            url={reservation}
            name={btn}
          />
          <Button
            btEmpthy={true}
            url={
              !lang ? contactComponentsData.url : contactComponentsDataEn.url
            }
            name={btn2}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
