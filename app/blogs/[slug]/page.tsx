import { allBlogs } from '@/data'

export function generateStaticParams() {
    return allBlogs.paths().map((pathname) => ({ slug: pathname }))
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { Content, frontMatter } = (await allBlogs.get(params.slug))!
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'UTC',
    }).format(frontMatter.date)
    if (!Content) return null

    return (
        <>
            <div className='bg-white w-full min-h-screen  p-5 rounded-lg shadow-lg border border-zinc-100'>
                <Content />
            </div>
        </>
    )
}