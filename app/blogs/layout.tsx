import React from 'react'

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='max-w-4xl mx-auto p-5'>
      {children}
    </div>
  )
}
