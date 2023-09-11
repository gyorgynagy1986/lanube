"use client";
import "aos/dist/aos.css"; // You can also use <link> for styles
import AOS from "aos";

import { useEffect } from "react";
import style from "./Contact.module.css";
import Button from "../UI/Buttons/Button";
import Image from "next/image";
import ContactItems from "./ContactItems";
import mapPhoto from "../../../public/assets/sections/map_contact.webp";
import { contactComponentsData, contactComponentsDataEn } from "@/data/data";
import { getOurcontact } from "@/data/language-handler";

const Contact = ({ reservation, lang }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const { title, btn, btn2 } = getOurcontact(
    lang,
    contactComponentsData,
    contactComponentsDataEn
  );

  return (
    <section
      data-aos="fade-up"
      data-aos-offset="100"
      id="opening"
      className={style.container}
    >
      <div className={style.imageContainer}>
        <div className={style.layer}></div>
        <Image placeholder="blur" alt="La Nube" src={mapPhoto} />
      </div>
      <div
        data-aos="fade"
        data-aos-offset="100"
        data-aos-delay="50"
        className={style.textContainer}
      >
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
