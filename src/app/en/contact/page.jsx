import style from "./page.module.css";
import Image from "next/image";
import Button from "@/components/UI/Buttons/Button";
import ButtonGetInTouch from "@/components/UI/Buttons/ButtonGetInTouch";
import mapPhoto from "../../../../public/assets/sections/map_contact.png";
import facebook from "../../../../public/assets/social/facebook.svg";
import instagram from "../../../../public/assets/social/instagram.svg";
import {links} from '@/data/data'
import {contactDataEn} from '@/data/data'



const Contact = () => {
  return (
    <>
      <section className={style.container}>
        <div className={style.imageContainer}>
          <Image placeholder="blur" priority alt="La Nube" src={mapPhoto} />
        </div>
        <div className={style.itemsContainer}>
          <div className={style.textContainer}>
            <h1>{contactDataEn.h3}</h1>
            <p className={style.contactText}>
             {contactDataEn.address}
            </p>
            <p className={style.contactText}>{contactDataEn.tel}</p>
            <p className={style.contactText}>{contactDataEn.email}</p>
          </div>

          <div className={style.btnContainer}>
            <div className={style.socialContainerItem}>
              <Image alt="La Nube étterem facebbok oldala" src={facebook} />
              <ButtonGetInTouch
                yellow={true}
                url={links.facebook}
                name={"facebook"}
              />
            </div>
            <div className={style.socialContainerItem}>
              <Image alt="La Nube étterem isntagram oldala" src={instagram} />
              <ButtonGetInTouch
                yellow={true}
                url={links.instagram}
                name={"instagram"}
              />
            </div>
            <div className={style.btnContainerItem}>
              <Button url={links.reservation} name={contactDataEn.btn} />
              <Button btEmpthy={true} url={links.reservation} name={contactDataEn.btn2} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
