import { allBlogs, Blog } from '@/.contentlayer/generated'
import { medium, regular } from '@/utils/fonts'
import React from 'react'

export default function RecentBlogs() {
    console.log(allBlogs)
    return (
        <div className='flex flex-col gap-2.5'>
            {allBlogs.map((blog: Blog) => {
                return (
                    <div key={blog._id}>
                        <h2 className={'text-lg ' + medium.className}>{blog.title}</h2>
                        <p className={'text-zinc-500 ' + regular.className}>{blog.description}</p>
                    </div>
                )
            }
            )}
        </div>
    )
}
