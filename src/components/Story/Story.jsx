"use client"

import style from "./Story.module.css";
import Button from "../UI/Buttons/Button";
import Image from "next/image";
import { storyData, storyDataEn } from "@/data/data";
import { getStoryContent } from "@/data/language-handler";
import { useParallax } from "react-scroll-parallax";

import ourStoryCoverPhoto from "../../../public/assets/sections/Our_story.webp";

const Story = ({ lang }) => {
  const { pText, pText2, h2Text, btnUrl, btnName } = getStoryContent(
    lang,
    storyData,
    storyDataEn
  );

  const parallax = useParallax({
    opacity	: [-1, 7],
    speed:-3

  });


  return (
    <section ref={parallax.ref} className={style.container}>
      <div  className={style.imageContainer}>
        <Image
          placeholder="blur"
          priority
          alt="Fuego"
          src={ourStoryCoverPhoto}
        />
      </div>

      <div className={style.textContainer}>
        <h2>{h2Text}</h2>
        <p>
          {pText}
          <br />
          <br />
          {pText2}
        </p>
        <Button
          engColorPrefixBlue={lang ? true : false}
          url={btnUrl}
          name={btnName}
        />
      </div>
    </section>
  );
};

export default Story;
