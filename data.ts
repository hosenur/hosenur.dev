import { createSource } from 'mdxts'

type BlogFrontMatter = {
    title: string
    date: Date
    summary?: string
    tags?: any
}
type ProjectFrontMatter = {
    title: string
    date: Date
    summary?: string
    tags?: any
}

export const allBlogs = createSource<{
    frontMatter: BlogFrontMatter
}>('blogs/*.mdx', {
    baseDirectory: 'blogs',
    sort: (a, b) => b.frontMatter.date.getTime() - a.frontMatter.date.getTime(),
})

export const allProjects = createSource<{
    frontMatter: ProjectFrontMatter
}>('projects/*.mdx', {
    baseDirectory: 'projects',
    sort: (a, b) => b.frontMatter.date.getTime() - a.frontMatter.date.getTime(),
})