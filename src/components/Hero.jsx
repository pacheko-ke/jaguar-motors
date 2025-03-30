import React from 'react'
import Jaguar from '../assets/jaguar-top.png'

export default function() {
  return (
    <div className='mt-24 flex justify-end'>
        <h1 className='text-white text-[140px] absolute mx-auto -mt-26'>Jaguar</h1>
        <img src={Jaguar} alt=" hero image" className='z-10 rotate-180 -mt-6' />
    </div>
  )
}
