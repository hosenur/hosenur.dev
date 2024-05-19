import CurrentProjects from '@/components/CurrentProjects'
import Hero from '@/components/Hero'
import RecentBlogs from '@/components/RecentBlogs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowSquareOut, Envelope, RocketLaunch } from '@phosphor-icons/react/dist/ssr'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col gap-10'>
      <Hero/>
      <CurrentProjects/>
      <RecentBlogs/>





      <div className='flex gap-5'>
        <Button variant={'outline'} className='flex gap-2 items-center shadow-lg shadow-purple-100/90'>
          <RocketLaunch weight='duotone' size={18} />
          View All Projects</Button>
      </div>
    </div>
  )
}
