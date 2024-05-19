import { Envelope } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export default function Hero() {
    return (
        <div className='flex flex-col gap-5'>
            <p>
                I build stuffs for the web and mobile with React, NextJS, React Native, Expo and NodeJS. Currently hacking on rebox.dev (Open Source Deployment Platofrm with heavy focus on DX) and haystack.page (Self hosted RAG for personal knowledge management)
                CS Undergrad. Linux Enthusiast. I enjoy travelling and photography.
            </p>
            <div className='font-mono border border-zinc-100 bg-white rounded w-fit flex items-center gap-2 px-2 py-1 '>
                <Envelope weight='duotone' size={18} />
                <p>mail@hosenur.dev</p>
            </div>
        </div>
    )
}
