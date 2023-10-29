'use client';
import React from 'react'
import { Highlight, themes, Prism } from "prism-react-renderer"
(typeof global !== "undefined" ? global : window).Prism = Prism
require("prismjs/components/prism-bash")
require("prismjs/components/prism-lua")
import { SiTypescript, SiGnubash, SiLua } from "@icons-pack/react-simple-icons"
import { CopyIcon } from 'lucide-react';
import { code } from '@/utils/fonts';
const iconMappings: any
  = {
  "tsx": <SiTypescript size={15} />,
  "bash": <SiGnubash size={15} />,
  "lua" : <SiLua size={15} />
}

export default function Snippet({ language, fileName, codeBlock }: any) {
  return (
    <div>
      <Highlight
        theme={themes.nightOwl}
        code={codeBlock.trim()}
        language={language}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className='border border-zinc-800 p-0 bg-zinc-900'>
            <div className='flex mx-0 gap-2.5 items-center  px-5 py-2.5  border-b border-zinc-800 bg-zinc-950 mb-2.5 text-zinc-400'>
              <>
                {
                  iconMappings[language]}
                <span>{
                  fileName ? fileName : language.charAt(0).toUpperCase() + language.slice(1)
                }</span>
              </>
              <CopyIcon size={20} className='ml-auto cursor-pointer' />

            </div>
            <div className={'px-5 py-2.5 ' + code.className}>

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

