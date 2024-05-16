import { Button } from '@/components/ui/button'
import { Envelope, RocketLaunch } from '@phosphor-icons/react/dist/ssr'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col gap-5'>
      <p>
        I build stuffs for the web and mobile with React, NextJS, React Native, Expo and NodeJS. Currently hacking on rebox.dev (Open Source Deployment Platofrm with heavy focus on DX) and haystack.page (Self hosted RAG for personal knowledge management)
        CS Undergrad. Linux Enthusiast. I enjoy travelling and photography.
      </p>
      <div className='font-mono border border-zinc-100 bg-white rounded w-fit flex items-center gap-2 px-2 py-1 '>
        <Envelope weight='duotone' size={18} />
        <p>mail@hosenur.dev</p>
      </div>

      <div className='flex items-center gap-2 bg-white uppercase w-fit px-2.5 py-1 text-sm'>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4' width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z" fill="black" />
        </svg>
        <p>Currently Working On</p>
      </div>
      <div>
        <img src='/rebox.png' className='w-full rounded' alt='rebox.dev' />
      </div>
      <div className='flex gap-5'>
        <Button variant={'outline'} className='flex gap-2 items-center shadow-lg shadow-purple-100/90'>
          <RocketLaunch weight='duotone' size={18} />
          View All Projects</Button>
      </div>
    </div>
  )
}
