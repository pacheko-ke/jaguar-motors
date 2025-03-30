import React from 'react'
import Engine from "../assets/engine.png"

export default function () {
  return (
    <div className='flex flex-col items-center text-white px-4 mt-2 gap-2'>
        <img src={Engine} alt="enginwimage" className='size-3/4'/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem optio aliquam nobis totam neque aliquid accusamus nesciunt quis cupiditate eveniet, praesentium, dolores a recusandae quasi, architecto dolore similique nostrum! Pariatur.</p>
        <button className='bg-red-500 w-full py-2 text-black font-bold'>BOOK A DEMO RIDE</button>
    </div>
  )
}
