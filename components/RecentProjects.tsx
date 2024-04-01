import React from 'react'
import { allProjects } from '@/.contentlayer/generated'
import moment from 'moment'
import Link from 'next/link'
import { medium } from '@/utils/fonts'
export default function RecentProjects() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {allProjects.map((project,key) => (
                <Link href={project.slug} key={project._id}>
                    <img className='rounded mb-2' src={project.banner} alt="" />
                    <h2 className={medium.className}>{project.title}</h2>
                    <p className='text-zinc-600'>{project.description}</p>
                </Link>
            ))}
        </div>
    )
}
