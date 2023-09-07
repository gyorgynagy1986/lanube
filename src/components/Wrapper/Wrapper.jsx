
"use client"

import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';
import React from 'react'
import style from '@/components/Wrapper/Wrapper.module.css'
import { useEffect } from 'react';

const Wrapper = ({children}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  return (
    <section className={style.container}>{children}</section>
  )
}

export default Wrapper