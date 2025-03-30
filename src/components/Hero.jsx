import React from 'react'
import Jaguar from '../assets/jaguar-top.png'
import { motion } from "motion/react"

export default function() {
  return (
    <div className='mt-24 flex flex-col justify-center items-center text-white'>
        <h1 className='text-white text-[130px] absolute mx-auto top-50 z-10'>Jaguar</h1>
        <motion.img src={Jaguar} alt=" hero image" className='rotate-180 -mt-50' initial={{y:1000}} animate={{y:0}} transition={{duration:2}}></motion.img>
        <div className='absolute top-92 text-md flex justify-center items-center align-center'>
            <h1>In a world full of conventions...,</h1> <h1> copy nothing</h1>
            </div>
    </div>
  )
}
