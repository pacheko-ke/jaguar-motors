import React from 'react'
import Jaguar from '../assets/jaguar-top.png'

export default function() {
  return (
    <div className='mt-24 flex justify-end'>
        <h1 className='text-white text-[130px] absolute mx-auto top-50 z-10'>Jaguar</h1>
        <img src={Jaguar} alt=" hero image" className=' rotate-180 -mt-50' />
    </div>
  )
}
