"use client";
import { Article, Code, Lightning, Rocket, User } from '@phosphor-icons/react';
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider } from '../ui/tooltip';

const tabs = [
    { title: 'Home', icon: <Lightning weight='duotone' size={20} />, href: "/" },
    { title: 'Projects', icon: <Rocket weight='duotone' size={20} />, href: "/projects" },
    { title: 'Blogs', icon: <Article weight='duotone' size={20} />, href: "/blogs" },
    { title: 'Snippets', icon: <Code weight='duotone' size={20} />, href: "/snippets" },
    { title: 'About', icon: <User weight='duotone' size={20} />, href: "/about" },
]

const buttonVariants = {
    initial: {
        gap: 0,
        paddingLeft: '.5rem',
        paddingRight: '.5rem',
    },
    animate: (selected: boolean) => ({
        gap: selected ? '.5rem' : 0,
        paddingLeft: selected ? '1rem' : '.5rem',
        paddingRight: selected ? '1rem' : '.5rem',
    }),
}

const spanVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { width: 'auto', opacity: 1 },
    exit: { width: 0, opacity: 0 },
}

const transition = { delay: 0.1, type: 'spring', bounce: 0, duration: 0.35 }

interface TabProps {
    text: string
    selected: boolean
    setSelected: (tab: Object) => void
    children: ReactNode
    index: number,
    href: string,
    router: any
}

const Tab = ({ text, selected, setSelected, index, children, href, router }: TabProps) => {
    return (
        <Tooltip>
            <TooltipContent>{text}</TooltipContent>
            <TooltipTrigger>
                <Link href={href} passHref>



                    <motion.div
                        variants={buttonVariants}
                        initial="initial"
                        animate="animate"
                        custom={selected}
                        onClick={() => {
                            setSelected(tabs[index])
                        }}
                        transition={transition}
                        className={`${selected ? 'bg-zinc-200/90 text-zinc-800 ' : ' hover:text-gray-900'
                            } relative flex items-center rounded-full px-4 py-2 text-sm font-medium text-zinc-500  transition-colors duration-300 focus-within:outline-zinc-200`}
                    >
                        {children}
                        <AnimatePresence>
                            {selected && (
                                <motion.span
                                    variants={spanVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={transition}
                                    className="overflow-hidden"
                                >
                                    {text}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </Link>
            </TooltipTrigger>
        </Tooltip>
    )
}

// IconTabs component
const Header = ({ center }: { center?: boolean }) => {
    // State to manage selected tab
    const pathname = "/" + usePathname().split('/')[1].trim()
    const [selected, setSelected] = useState<Object>(tabs[0])
    // const [selected, setSelected] = useState<Object>(
    //     tabs.find((tab) => tab.href === pathname) || tabs[0]
    // )
    useEffect(() => {
        setSelected(tabs.find((tab) => tab.href === pathname) || tabs[0])
    }, [pathname])

    const router = useRouter()

    return (
        <header className='fixed top-0 w-full glass p-5 z-50'>
            <TooltipProvider>


                <div
                    className={` ${center ? 'justify-center ' : ''
                        }  flex flex-wrap items-center gap-2  mx-auto w-fit`}
                >
                    {tabs.map((tab, index) => (
                        <Tab
                            router={router}
                            href={tab.href}
                            text={tab.title}
                            selected={selected === tab}
                            setSelected={setSelected}
                            index={index}
                            key={tab.title}
                        >
                            {tab.icon}
                        </Tab>
                    ))}
                </div>
            </TooltipProvider>
        </header>
    )
}

export default Header