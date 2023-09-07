import React from 'react'
import { DM_Mono } from "next/font/google";


const mukta =  DM_Mono({ weight: "400", subsets: ["latin"] });


const textContent = {
  day: 'Hétfő - Péntek',
  time: '17:00 - 23:30',
  day2: 'Szombat',
  time2: '12:00 - 23:00',
  day3: 'Vasárnap',
  time3: 'ZÁRVA'
}

const textContentEn = {
  day: 'Monday - Friday',
  time: '12:00 - 23:30',
  day2: 'Saturday',
  time2: '12:00 - 23:30',
  day3: 'Sunday',
  time3: 'CLOSED'
}

const ContactItems = ({lang}) => {

  const weekdays = !lang ? textContent.day : textContentEn.day;
  const weekdays2 = !lang ? textContent.time : textContentEn.time;

  const weekend = !lang ? textContent.day2 : textContentEn.day2;
  const weekend2 = !lang ? textContent.time2 : textContentEn.time2;

  const dayOff = !lang ? textContent.day3 : textContentEn.day3;
  const dayOff2 = !lang ? textContent.time3 : textContentEn.time3;


  return (
    <>
         <div>
            <p >{weekdays}</p>
            <p className={mukta.className} >{weekdays2}</p>
         </div>
         <div>
            <p >{weekend}</p>
            <p className={mukta.className} >{weekend2}</p>
         </div>
         <div>
            <p >{dayOff}</p>
            <p className={mukta.className} >{dayOff2}</p>
         </div>
    </>
  )
}

export default ContactItems