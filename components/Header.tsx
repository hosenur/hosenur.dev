"use client";

import { regular } from '@/utils/fonts';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { RoughNotation } from 'react-rough-notation';


type INavLink = {
    href: string;
    text: string;
}

const navLinks: INavLink[] = [
    {
        href: '/',
        text: 'Home'
    },
    {
        href: '/projects',
        text: 'Projects'
    },
    {
        href: '/blogs',
        text: 'Blogs'
    },
    {
        href: '/stack',
        text: 'Stack'
    },
    {
        href: '/guestbook',
        text: 'Guest Book'
    },
]

export default function Header() {
    const pathname = usePathname();
    if (pathname === '/auth') return null;
    return (
        <header className='text-white mb-5 pb-5 lg:pb-10 flex gap-10 border-b border-zinc-800'>
            <nav className={'flex  justify-between md:justify-start gap-5 w-full ' + regular.className}>
                {navLinks.map((navLink, index) => (
                    <RoughNotation key={index} type='highlight' color='#52525b'  show={pathname === navLink.href} strokeWidth={1} 
                    >

                        <Link href={navLink.href}
                            className={`text-sm md:text-base ${pathname !== navLink.href ? 'text-zinc-500' : 'text-zinc-100'}`}
                        >
                            {navLink.text}
                        </Link>
                    </RoughNotation>
                ))}
            </nav>
        </header>
    )
}
