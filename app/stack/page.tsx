import { regular } from '@/utils/fonts'
import React from 'react'

export default function Stack() {
  return (
    <div className={'flex flex-col gap-10 '+regular.className }>
      <p>The following is my on the go app stack for organising my life, coding and all</p>
      <div className='flex flex-wrap gap-5'>
        <img src="/assets/obsidian.svg" className='w-10' alt="" />
        <img src="/assets/brave.svg" className='w-10' alt="" />
        <img src="/assets/wez.svg" className='w-10' alt="" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg" className='w-10' alt="" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg" className='w-10' alt="" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className='w-10' alt="" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" className='w-10' alt="" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" className='w-10' alt="" />
        <img src="/assets/insomnia.svg" className='w-10' alt="" />

      </div>
    </div>
  )
}