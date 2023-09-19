import { allBlogs } from '@/.contentlayer/generated'
import Hero from '@/components/Hero'
import RecentBlogs from '@/components/RecentBlogs'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col gap-20'>
      <Hero />
      <RecentBlogs />
    </div>

  )
}
