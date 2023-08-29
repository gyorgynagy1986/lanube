import Link from 'next/link'
import React from 'react'
import style from './Button.module.css'
import {Mukta } from 'next/font/google'

const bebas = Mukta({ subsets: ['latin'], weight: "700" })

const Button = ({name, url, btEmpthy}) => {

  return (
    <Link href={url}>
      <button 
        className={
          `${style.button}
           ${bebas.className}
           ${btEmpthy && style.btEmpthy}
           `}>
          {name}
      </button>
    </Link>
  )
}

export default Button