import style from "./Story.module.css";
import Button from "../UI/Buttons/Button";
import Image from "next/image";
import { storyData, storyDataEn } from "@/data/data";
import { getStoryContent } from "@/data/language-handler";

import ourStoryCoverPhoto from "../../../public/assets/sections/Our_story.png";

const Story = ({ lang }) => {
  const { pText, pText2, h2Text, btnUrl, btnName } = getStoryContent(
    lang,
    storyData,
    storyDataEn
  );

  return (
    <section className={style.container}>
      <div className={style.imageContainer}>
        <div className={style.layer}></div>
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
