import React from 'react'

export default function () {
  return (
    <div className='text-white bg-gray-900 flex flex-col items-center px-4 md:px-20 text-center gap-y-2 py-6 mt-6'>
        <h1 className='text-2xl md:text-4xl'>Newsletter</h1>
        <p className='text-md md:text-2xl'>Stay up to date with the latest news from the world of Jaguar</p>
        <button className='bg-red-500 px-30 py-3 md:w-2/3 cursor-pointer'>SUBSCRIBE</button>
    </div>
  )
}
