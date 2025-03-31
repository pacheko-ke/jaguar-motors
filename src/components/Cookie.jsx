import React from 'react'
import { useEffect,useState } from 'react'

export default function () {
    const [cookieAlreadyShown, showCookie] = useState(false)
    // useEffect(()=>{
    //     // showCookie(!cookieAlreadyShown)
    //     return 0
    // },[])
  return (
    <div className={cookieAlreadyShown?'hidden':'bg-gray-900 flex flex-col items-center text-white py-6 gap-2 px-2 absolute fixed bottom-10 z-20 shadow-2xl mr-4'}>
        <p className='text-black text-sm md:text-lg w-full md:w-1/2 text-center'>This website uses cookies to improve your experience across the site. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, eum. </p>
        <div className="flex gap-x-2 w-full items-center justify-center">
        <button className='bg-black w-1/2 md:w-1/4 py-2'>Accept</button><button className='bg-transparent border-1 text-black border border-red-500 w-1/2 md:w-1/4 py-2'>Decline</button>
        </div>
    </div>
  )
}
