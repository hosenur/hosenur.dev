import Header from '@/components/Header'
import Hero from '@/components/Hero'
import RecentBlogs from '@/components/RecentBlogs'
import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col p-5 max-w-4xl mx-auto'>
      <main className='flex flex-col gap-10'>
        <Hero/>
        <RecentBlogs/>  
      </main>
    </div>
  )
}
