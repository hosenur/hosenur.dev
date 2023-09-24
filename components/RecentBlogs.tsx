import { allBlogs, Blog } from '@/.contentlayer/generated'
import { medium, regular } from '@/utils/fonts'
import Link from 'next/link'
import React from 'react'

export default function RecentBlogs() {
    return (
        <div className='flex flex-col gap-2.5'>
            {allBlogs.filter((blog) => !blog.draft).slice(0, 4).map((blog) => {
                return (
                    <Link href={blog.slug} key={blog._id}>
                        <h2 className={'text-lg ' + medium.className}>{blog.title}</h2>
                        <p className={'text-zinc-500 ' + regular.className}>{blog.description}</p>
                    </Link>
                )
            }
            )}
        </div>
    )
}
