import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowSquareOut } from '@phosphor-icons/react/dist/ssr'
import { allProjects } from "@/data"

export default function CurrentProjects() {
    return (
        <div>
            <div className='flex items-center gap-2 bg-white uppercase w-fit px-2.5 py-1 text-sm mb-5'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4' width="200" height="200" viewBox="0 0 200 200" fill="none">
                    <path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z" fill="black" />
                </svg>
                <p>Currently Working On</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    allProjects.all().filter(project => !project.frontMatter.completed).map(project => (
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
                            <CardContent>
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
                                {/* <Badge className='gap-1' variant={'outline'}>
                                    <p>Golang</p>
                                </Badge>
                                <Badge className='gap-1' variant={'outline'}>
                                    <p>Docker</p>
                                </Badge> */}

                            </CardFooter>
                        </Card>

                    ))
                }


            </div>
        </div>
    )
}
