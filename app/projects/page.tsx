import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { allProjects } from '@/data'
import { ArrowSquareOut } from '@phosphor-icons/react/dist/ssr'

export default function Projects() {
    return (

        <div className='bg-white w-full min-h-screen border p-5 rounded-lg shadow-md'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    allProjects.all().map(project => (
                        <Card key={project.pathname}>
                            <CardHeader className='justify-between items-center'>
                                <CardTitle className='flex items-center gap-2'>
                                    <div className='w-1 h-1 animate-ping delay-500 rounded-full bg-green-400' />
                                    {project.frontMatter.title}
                                </CardTitle>
                                <Badge className='gap-1' variant={'outline'}>
                                    <ArrowSquareOut weight='duotone' size={16} />
                                    <p className='text-sm upercase' >{project.frontMatter.url}</p>
                                </Badge>

                            </CardHeader>
                            <CardContent className='flex flex-col gap-2'>
                                <img src="https://uploads-ssl.webflow.com/5ea7fd4e3d52ef73804bc877/6295a63ad54eea27a9f00577_Screenshot5-min.png" alt="" />
                                <p>{project.frontMatter.summary} </p>
                            </CardContent>
                            <CardFooter className='gap-2 flex-wrap'>
                                {
                                    project.frontMatter.stack.map(item => (
                                        <Badge key={item} className='gap-1' variant={'outline'}>
                                            <p>{item}</p>
                                        </Badge>

                                    ))
                                }
                            </CardFooter>
                        </Card>

                    ))
                }


            </div>
        </div>

    )
}
