import { notFound } from "next/navigation";
import { Blog, allBlogs } from "contentlayer/generated";
import { Metadata } from "next";
import { MDX } from "@/components/MDXComponents";
import moment from "moment"
interface BlogProps {
    params: {
        slug: string[];
    };
}

async function getBlogFromParams(params: BlogProps["params"]) {
    const slug = params?.slug?.join("/");
    const blog = allBlogs.find((blog) => blog.slugAsParams === slug);

    if (!blog) {
        null;
    }

    return blog;
}

export async function generateMetadata({
    params,
}: BlogProps): Promise<Metadata> {
    const blog = await getBlogFromParams(params);

    if (!blog) {
        return {};
    }

    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
        },
        twitter: {
            title: blog.title,
            description: blog.description,
        },
    };
}

export async function generateStaticParams(): Promise<
    BlogProps["params"][]
> {
    return allBlogs.map((blog) => ({
        slug: blog.slugAsParams.split("/"),
    }));
}

export default async function ProjectPage({ params }: BlogProps) {
    const blog = await getBlogFromParams(params);

    if (!blog) {
        notFound();
    }

    return (
        <article className={"prose prose-invert prose-emerald max-w-6xl prose-img:rounded"}>
            <h1>{blog.title}</h1>
            <p>Published {moment(blog.publishedAt).calendar()}</p>
            <MDX code={blog.body.code} />
        </article>
    );
}