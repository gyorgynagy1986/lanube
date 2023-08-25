import style from "./page.module.css";
import Image from "next/image";
import Button from "@/components/UI/Buttons/Button";
import ButtonGetInTouch from "@/components/UI/Buttons/ButtonGetInTouch";
import mapPhoto from "../../../public/assets/sections/map_contact.png";
import facebook from "../../../public/assets/social/facebook.svg";
import instagram from "../../../public/assets/social/instagram.svg";
import { Dosis } from "next/font/google";
const dosis = Dosis({ subsets: ["latin"] });

const textContent = {
  h3: "Restaurante lanube",
  btn: "asztalfoglalás",
  btn2: "kapcsolat",
  facebook: "https://www.facebook.com/lanubechicken/?locale=hu_HU",
  instagram: "https://www.instagram.com/lanubebp/?hl=hu",
  reservation: "https://reservours.com/lanube/tablereservation?s=website",
};

const Contact = () => {
  return (
    <>
      <section className={style.container}>
        <div className={style.imageContainer}>
          <div className={style.layer}></div>
          <Image placeholder="blur" priority alt="lanube" src={mapPhoto} />
        </div>
        <div className={style.itemsContainer}>
          <div className={style.textContainer}>
            <h1 className={dosis.className}>{textContent.h3}</h1>
            <p className={style.contactText}>
              1075 Budapest, Kazinczy utca 3b.
            </p>
            <p className={style.contactText}>+ 36 30 317 69 65</p>
            <p className={style.contactText}>hola@lanubebp.hu</p>
          </div>

          <div className={style.btnContainer}>
            <div className={style.socialContainerItem}>
              <Image alt="lanube étterem facebbok oldala" src={facebook} />
              <ButtonGetInTouch url={textContent.facebook} name={"facebook"} />
            </div>
            <div className={style.socialContainerItem}>
              <Image alt="lanube étterem isntagram oldala" src={instagram} />
              <ButtonGetInTouch
                url={textContent.instagram}
                name={"instagram"}
              />
            </div>
            <div className={style.btnContainerItem}>
              <Button url={textContent.reservation} name={textContent.btn} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
