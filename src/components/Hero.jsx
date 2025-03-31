import React from 'react'
import Jaguar from '../assets/jaguar-top.png'
import { motion } from "motion/react"

export default function() {
  return (
    <div className='mt-24 flex flex-col justify-center items-center text-white'>
        <h1 className='text-white text-[130px] md:text-[200px] absolute mx-auto top-50 md:top-30 z-10'>Jaguar</h1>
        <motion.img src={Jaguar} alt=" hero image" className='rotate-180 -mt-50' initial={{y:1000}} animate={{y:0}} transition={{duration:2,delay:1}}></motion.img>
        <div className='absolute top-92 text-md md:text-lg flex justify-center items-center align-center'>
            <motion.h1 initial={{x:-500}} animate={{x:0}} transition={{duration:1,delay:1}}>In a world full of conventions...,</motion.h1> <motion.h1 initial={{x:500}} animate={{x:0}} transition={{duration:1,delay:1}}> copy nothing</motion.h1>
            </div>
    </div>
  )
}
