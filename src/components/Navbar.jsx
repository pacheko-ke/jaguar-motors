import React from 'react'
import '../App.css'

export default function Navbar() {
  return (
    <div className='flex justify-between px-2 py-1 top-0 fixed z-20 bg-black shadow-lg w-full h-10'>
        <h1 className=' italic text-2xl text-red-500 font-bold'>Jaguar.</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>

    </div>
  )
}
