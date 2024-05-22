import CurrentProjects from '@/components/CurrentProjects'
import Hero from '@/components/Hero'
import RecentBlogs from '@/components/RecentBlogs'
import { Button } from '@/components/ui/button'
import { RocketLaunch } from '@phosphor-icons/react/dist/ssr'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Hosenur Rahaman",
  description: "Crafting digital experiences with precision and creativity, utilizing the power of React, Next.js, Node.js, Express.js, MongoDB, and Android. Dedicated to delivering seamless and engaging user journeys through innovative full-stack development.",
};


export default function Home() {
  return (
    <div className='min-h-screen flex flex-col gap-10'>
      <Hero />
      <CurrentProjects />
      <RecentBlogs />
      <div className='flex gap-5'>
        <Button variant={'outline'} className='flex gap-2 items-center shadow-lg shadow-purple-100/90'>
          <RocketLaunch weight='duotone' size={18} />
          View All Projects</Button>
      </div>
    </div>
  )
}
