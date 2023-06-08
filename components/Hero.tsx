import React from 'react'
import Image from "next/image"
export default function Hero() {
  return (
    <div className='flex gap-5 items-center'>
      <Image
        width={1000}
        height={1000}
        alt='Hosenur'
        className='w-20 h-20 rounded-full'
       src={"https://ik.imagekit.io/kydj5j026nb/IMG20211015165413__3__1BD3B9ihM.jpg?updatedAt=1680814852099"} />
       <div className='flex flex-col'>

       <h1 className='font-bold text-2xl'>Hosenur Rahaman</h1>
       <p>Web Developer, App Developer</p>
       </div>
    </div>
  )
}
