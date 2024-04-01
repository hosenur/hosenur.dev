import React from 'react'
import { allBlogs } from '@/.contentlayer/generated'
import moment from 'moment'
import Link from 'next/link'
import { medium } from '@/utils/fonts'
export default function RecentBlogs() {
    return (
        <div>
            {allBlogs.map((blog,key) => (
                <Link href={blog.slug} key={blog._id}>
                    <h2 className={medium.className}>{blog.title}</h2>
                    <p className='text-zinc-500 text-base'>{blog.description}</p>
                </Link>
            ))}
        </div>
    )
}
