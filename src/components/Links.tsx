import Link from 'next/link'
import React from 'react'

export default function Links() {
  return (
    
    <div className='max-w-5xl mx-auto px-5 flex justify-between'>
        <Link href={"/guestbook"}>GuestBook</Link>
        <div>Projects</div>
        <div>Contact</div>
    </div>
  )
}
