import React from 'react'
import { allBlogs } from '@/.contentlayer/generated'
import moment from 'moment'
import Link from 'next/link'
export default function RecentBlogs() {
    return (
        <div>
            {allBlogs.map((blog,key) => (
                <Link href={blog.slug} key={blog._id}>
                    <h2>{blog.title}</h2>
                    <p></p>
                    <p className='text-zinc-500'>{blog.description}</p>
                </Link>
            ))}
        </div>
    )
}
