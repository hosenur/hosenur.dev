'use client';
import React from 'react'
import { Highlight, themes, Prism } from "prism-react-renderer"
(typeof global !== "undefined" ? global : window).Prism = Prism
require("prismjs/components/prism-bash")
require("prismjs/components/prism-lua")
import { CopyIcon, Check, Clipboard } from 'lucide-react';
import { code } from '@/utils/fonts';
const iconMappings: any
    = {
    "bash": <img className='w-5' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" />,
    "tsx": <i className="devicon-typescript-plain"></i>
}

export default function Snippet({ language, fileName, codeBlock }: any) {
    const [copied, setCopied] = React.useState(false)
    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeBlock)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }
    return (
        <div>
            <Highlight
                theme={themes.vsLight}
                code={codeBlock.trim()}
                language={language}
            >
                {({ style, tokens, getLineProps, getTokenProps }) => (
                    <pre className='border border-zinc-300  p-0 rounded '>
                        <div className='flex mx-0 gap-2.5 items-center border-zinc-300 bg-zinc-100  px-5 py-2.5  border-b  mb-2.5 text-zinc-800'>
                            <>
                                {
                                    iconMappings[language]}
                                <span>{
                                    fileName ? fileName : language.charAt(0).toUpperCase() + language.slice(1)
                                }</span>
                            </>
                            {
                                copied ? <Check size={18} className='ml-auto cursor-pointer' /> :

                                    <Clipboard onClick={copyToClipboard}
                                        size={18} className='ml-auto cursor-pointer' />
                            }

                        </div>
                        <div className={'px-5 py-2.5 text-wrap ' + code.className}>

                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })}>
                                    <span style={{ marginRight: 20 }}>{i + 1}</span>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token })} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </pre>
                )}
            </Highlight>

        </div >
    )
}

