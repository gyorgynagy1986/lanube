import React from 'react'
import style from '@/components/Wrapper/Wrapper.module.css'

const Wrapper = ({children}) => {
  return (
    <section className={style.container}>{children}</section>
  )
}

export default Wrapper