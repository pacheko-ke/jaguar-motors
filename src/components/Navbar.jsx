import React from 'react'
import { useState } from 'react'
import '../App.css'

export default function Navbar() {
  const [mobileNavActive,activateMobileNav]= useState(false)
  return (
    <div className='flex justify-between px-2 py-1 top-0 fixed z-20 bg-black shadow-lg w-full h-10'>

      {/* miobile nav */}
      <div className={mobileNavActive?"flex justify-between  text-white text-5xl absolute bg-black left-0 fixed px-4 h-[100vh] w-full pt-10":"hidden"}>
        <div className="flex flex-col gap-2">
          <h1>Store</h1>
          <h1>Log In</h1>
          <h1>Sign Up</h1>
          <h1>Demo Ride</h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8" onClick={()=>activateMobileNav(!mobileNavActive)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

      </div>

      <h1 className=' italic text-2xl text-red-500 font-bold'>Jaguar.</h1>
      <div className="hidden md:flex text-white gap-6 text-lg ">
      <h1>Store</h1>
      <h1>Log In</h1>
      <h1>Sign Up</h1>
      <h1>Demo Ride</h1>
    </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 text-white flex md:invisible" onClick={()=>activateMobileNav(!mobileNavActive)}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      </svg>

    </div>
  )
}
