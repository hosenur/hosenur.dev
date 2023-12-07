import { medium } from '@/utils/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Project({ project }: any) {
    return (
        <Link
            href={project.slug}
            className="flex flex-col gap-2"
        >
            <Image
                src={project.banner}
                alt="banner"
                width={1920}
                height={1440}
                className="group-hover:opacity-40 transition-opacity duration-300 hover:!opacity-100 rounded"
            />
            <div className="flex justify-between text-lg">

                <h1 className={medium.className}>{project.title}</h1>
                <p className="text-zinc-500">{project.category}</p>
            </div>
            <p className="text-zinc-500">{project.description}</p>
        </Link>)
}
