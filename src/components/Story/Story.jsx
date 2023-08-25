import style from './Story.module.css'
import { Mukta } from 'next/font/google'
import Button from '../UI/Buttons/Button'
import Image from 'next/image'
import { storyData, storyDataEn } from '@/data/data'

import ourStoryCoverPhoto from '../../../public/assets/sections/Our_story.png'

const dosis = Mukta({ weight: "700",  subsets: ['latin'] })


const Story = ({lang}) => {

  const pText = `${!lang ? storyData.p : storyDataEn.p }`
  const pText2 = `${!lang ? storyData.p1 : storyDataEn.p1 }`
  const h2Text = `${!lang ? storyData.h4 : storyDataEn.h4}`
  const btnUrl = `${!lang ? storyData.url : storyDataEn.url}`
  const btnName = `${!lang ? storyData.btn : storyDataEn.btn}`

  return (
  <section className={style.container}>
    
     <div className={style.imageContainer}>
        <div className={style.layer}></div>
        <Image  placeholder="blur" priority alt='Fuego' src={ourStoryCoverPhoto}/>   
     </div>

    <div  className={style.textContainer}>
      <h2 className={dosis.className}>{h2Text}</h2>
      <p>{pText}<br/><br/>{pText2}</p>
      <Button engColorPrefixBlue={lang ? true : false} btnBlue={true} url={btnUrl} name={btnName}/>
    </div>
  </section>
  )
}

export default Story