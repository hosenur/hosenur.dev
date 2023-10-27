'use client';
import React from 'react'
import { Highlight, themes } from "prism-react-renderer"
import { SiTypescript } from "@icons-pack/react-simple-icons"
import { CopyIcon } from 'lucide-react';
import { code } from '@/utils/fonts';
export default function Snippet(props: {}) {
  const codeBlock = `const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}`
  return (
    <div>
      <Highlight
        theme={themes.shadesOfPurple}
        code={codeBlock}
        language="tsx"
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className='border border-zinc-800 p-0 bg-zinc-900'>
            <div className='flex mx-0 gap-2.5 items-center  px-5 py-2.5  border-b border-zinc-800 bg-zinc-950 mb-2.5 text-zinc-400'>
              <>
                <SiTypescript size={15} />
                <span>pages/index.tsx</span>
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

