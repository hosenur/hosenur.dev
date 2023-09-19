import { black, regular } from '@/utils/fonts'
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import React from 'react'

export default function Hero() {
    return (
        <div className='flex flex-col gap-2.5'>
            <p className={'text-lg text-zinc-500 ' + regular.className}>Hi there, I am Hosenur Rahaman</p>
            <p className={'text-5xl ' + black.className}>Fullstack Developer, CS Student,<br /> and Linux Enthusiast.</p>
            <p className={'text-lg text-zinc-500 ' + regular.className}>I build cool stuffs for the mobile and the web, with the best technologies, a Linux Enthusiast, and sometimes I take time off full stack and love learning about Low Level Programming and Embedded Systems. I write blogs and articles, feel free to chek them out, and my socials too.</p>
            <div className='flex items-center gap-2.5 text-zinc-500'>
                <GithubIcon className='hover:text-zinc-100 transition-all cursor-pointer duration-300 ease-in-out' />
                <LinkedinIcon className='hover:text-zinc-100 transition-all cursor-pointer duration-300 ease-in-out' />
                <TwitterIcon className='hover:text-zinc-100 transition-all cursor-pointer duration-300 ease-in-out' />
            </div>
        </div>
    )
}
