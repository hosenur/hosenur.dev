import { allBlogs } from '@/.contentlayer/generated'
import { medium, regular } from '@/utils/fonts'
import Link from 'next/link'
import React from 'react'
import Blog from './Blog'

export default function RecentBlogs() {
    return (
        <div className='flex flex-col gap-2.5'>
            {allBlogs.filter((blog) => !blog.draft).slice(0, 4).map((blog) => {
                return (
                    <Blog key={blog._id} blog={blog} />
                )
            }
            )}
        </div>
    )
}
