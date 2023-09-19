import { medium } from '@/utils/fonts'
import { GithubIcon, LinkIcon, Loader2Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
type ProjectInfoProps = {
    status: number,
    github: string
    url: string
}
export default function ProjectInfo({ status, github, url }: ProjectInfoProps) {
    return (
        <div className={'border border-zinc-800 rounded flex text-lg justify-center my-2.5 '+medium.className}>
            <div className='flex-grow justify-center h-10 flex items-center p-5 gap-2.5 '>
                <Loader2Icon size={20} className='animate-spin'/>
                <span>Under Development</span>
            </div>
            <Link href={github} className='flex-grow text-zinc-100 no-underline justify-center border-r border-l border-zinc-800 h-10 flex items-center p-5 gap-2.5'>
                <GithubIcon size={20}/>
                <span>Git Repository</span>
            </Link>
            <Link href={url||"https://hosenur.dev"} className={'flex-grow text-zinc-100 no-underline justify-center border-zinc-800 h-10 flex items-center p-5 gap-2.5'}>
                <LinkIcon size={20}/>
                <span>Live Link</span>
            </Link>

        </div>
    )
}
