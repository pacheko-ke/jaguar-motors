import React from 'react'
import Engine from "../assets/engine.png"
import { motion } from "motion/react"

export default function () {
    return (
        <motion.div initial={{opacity:0,x:-200}} whileInView={{opacity:1,x:0}} transition={{duration:1}} viewport={{once:false}} className='flex flex-col items-center text-white px-4 mt-6 gap-2'>
            {/* <img src={Engine} alt="enginwimage" className='absolute'/> */}
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem optio aliquam nobis totam neque aliquid accusamus nesciunt quis cupiditate eveniet, praesentium, dolores a recusandae quasi, architecto dolore similique nostrum! Pariatur.
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-red-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </p>

        </motion.div>
    )
}
