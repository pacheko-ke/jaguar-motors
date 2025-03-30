import React from 'react'
import Jaguar from '../assets/jaguar.png'

export default function() {
  return (
    <div className='mt-10 flex justify-end'>
        <h1 className='text-white text-[150px] absolute mx-auto -mt-26'>Jaguar</h1>
        <img src={Jaguar} alt=" hero image" className='z-10 mt-10' />
    </div>
  )
}
