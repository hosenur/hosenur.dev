import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { allBlogs } from "@/data"
import { ArrowSquareOut } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function RecentBlogs() {
    return (
        <div>
            <div className='flex items-center gap-2 bg-white uppercase w-fit px-2.5 py-1 text-sm mb-5'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4' width="200" height="200" viewBox="0 0 200 200" fill="none">
                    <path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z" fill="black" />
                </svg>
                <p>Recent Blog Posts</p>
            </div>
            <div className='grid grid-cols-1 gap-5'>
                {
                    allBlogs.all().sort((a, b) => b.frontMatter.date.getTime() - a.frontMatter.date.getTime()).slice(0, 2).map(blog => (
                        <Link href={`/blogs${blog.pathname}`} key={blog.pathname}>
                            <Card key={blog.pathname}>
                                <CardHeader className='justify-between items-center'>
                                    <CardTitle className='flex items-center gap-2'>
                                        {blog.frontMatter.title}
                                    </CardTitle>
                                    <Badge className='gap-1' variant={'outline'}>
                                        <ArrowSquareOut weight='duotone' size={16} />
                                        {/* <p className='text-sm upercase' >{blog.frontMatter.url}</p> */}
                                    </Badge>

                                </CardHeader>
                                <CardContent>
                                    <p>{blog.frontMatter.summary} </p>
                                </CardContent>
                            </Card>
                        </Link>

                    ))
                }


            </div>
        </div>
    )
}
