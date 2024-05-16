import CurrentProjects from '@/components/CurrentProjects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowSquareOut, Envelope, RocketLaunch } from '@phosphor-icons/react/dist/ssr'

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
      <CurrentProjects/>





      <div className='flex gap-5'>
        <Button variant={'outline'} className='flex gap-2 items-center shadow-lg shadow-purple-100/90'>
          <RocketLaunch weight='duotone' size={18} />
          View All Projects</Button>
      </div>
    </div>
  )
}
