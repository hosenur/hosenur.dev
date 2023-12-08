import { medium, regular } from '@/utils/fonts'
import Link from 'next/link'
import React from 'react'

export default function Blog({ blog }: any) {
    return (
        <Link href={blog.slug} key={blog._id}>
            <h2 className={'text-lg ' + medium.className}>{blog.title}</h2>
            <p className={'text-zinc-500 ' + regular.className}>{blog.description}</p>
        </Link>)
}
