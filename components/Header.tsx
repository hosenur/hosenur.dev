import { medium } from '@/utils/fonts'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className={'w-full fixed text-lg top-0 z-50 bg-white glass '+medium.className}>
            <nav className='p-5 max-w-4xl mx-auto flex gap-5'>
                <Link href='/'>Home</Link>
                <Link href='/'>Blog</Link>
                <Link href='/'>Projects</Link>
                <Link href='/'>Snippets</Link>
            </nav>
        </header>
    )
}
