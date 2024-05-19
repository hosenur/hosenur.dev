import { createSource } from 'mdxts'

type BlogFrontMatter = {
    title: string
    date: Date
    summary: string
    tags: string[]
}
type ProjectFrontMatter = {
    title: string
    date: Date
    summary: string
    url: string
    stack: string[]
    oss: boolean
    repo?: string
    completed: boolean
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