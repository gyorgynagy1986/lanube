import React from 'react'
import { DM_Mono } from "next/font/google";


const mukta =  DM_Mono({ weight: "400", subsets: ["latin"] });


const textContent = {
  day: 'Hétfő - Vasárnap',
  time: '12:00 - 23:30'
}

const textContentEn = {
  day: 'Monday - Sunday',
  time: '12:00 - 23:30'
}

const ContactItems = ({lang}) => {

  const textLangLogic = !lang ? textContent.day : textContentEn.day;
  const textLangLogic2 = !lang ? textContent.time : textContentEn.time;


  return (
    <>
         <div>
            <p >{textLangLogic}</p>
            <p className={mukta.className} >{textLangLogic2}</p>
         </div>
         
    </>
  )
}

export default ContactItems