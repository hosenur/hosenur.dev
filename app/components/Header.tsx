import { Eye } from 'lucide-react'
import React from 'react'

export default function Header({ count }: { count: number }) {

  return (
    <div className='max-w-4xl mx-auto py-10 flex justify-between items-center'>
      <p>hosenur.dev</p>
      <span className='flex gap-1 items-center'>
        <Eye size={18} />
        {count}
      </span>
    </div>
  )
}
