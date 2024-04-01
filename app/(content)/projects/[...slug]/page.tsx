import { MDX } from "@/components/MDXComponents";
import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
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

    const ogImage = "https://hosenur.dev/og?title=" + blog.title;

    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
            type: "article",
            publishedTime: blog.publishedAt,
            url: `https://hosenur.com/blog/${blog.slug}`,
            images: [
                {
                    url: ogImage,
                }
            ]
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

export default async function Blog({ params }: BlogProps) {
    const blog = await getBlogFromParams(params);

    if (!blog) {
        notFound();
    }

    return (
        <article className={"prose prose-invert max-w-6xl prose-img:rounded"}>
            <h1 className={" font-bold text-6xl mb-5"}>{blog.title}</h1>
            {/* <p className="text-xs">Hosenur published this article {moment(blog.publishedAt).format("MMMM Do, YYYY")}</p> */}
            <MDX code={blog.body.code} />
        </article>
    );
}