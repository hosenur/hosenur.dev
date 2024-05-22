import { allProjects } from '@/data'

export function generateStaticParams() {
    return allProjects.paths().map((pathname) => ({ slug: pathname }))
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { Content, frontMatter } = (await allProjects.get(params.slug))!
    if (!Content) return null
    return (
        <>
            <div className='bg-white w-full min-h-screen  p-5 rounded-lg shadow-lg border border-zinc-100 prose max-w-full prose-pre:mt-0 z-0'>
                <Content />
            </div>
        </>
    )
}