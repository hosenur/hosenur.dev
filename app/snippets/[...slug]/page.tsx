import { MDX } from "@/components/MDXComponents";
import { allSnippets } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
interface BlogProps {
    params: {
        slug: string[];
    };
}

async function getSnippetFromParams(params: BlogProps["params"]) {
    const slug = params?.slug?.join("/");
    const snippet = allSnippets.find((snippet) => snippet.slugAsParams === slug);

    if (!snippet) {
        null;
    }

    return snippet;
}

export async function generateMetadata({
    params,
}: BlogProps): Promise<Metadata> {
    const snippet = await getSnippetFromParams(params);

    if (!snippet) {
        return {};
    }

    const ogImage = "https://hosenur.dev/og?title=" + snippet.title;

    return {
        title: snippet.title,
        description: snippet.description,
        openGraph: {
            title: snippet.title,
            description: snippet.description,
            type: "article",
            url: `https://hosenur.com/blog/${snippet.slug}`,
            images: [
                {
                    url: ogImage,
                }
            ]
        },
        twitter: {
            title: snippet.title,
            description: snippet.description,
        },
    };
}

export async function generateStaticParams(): Promise<
    BlogProps["params"][]
> {
    return allSnippets.map((snippet) => ({
        slug: snippet.slugAsParams.split("/"),
    }));
}

export default async function ProjectPage({ params }: BlogProps) {
    const snippet = await getSnippetFromParams(params);

    if (!snippet) {
        notFound();
    }

    return (
        <article className={"prose prose-invert prose-emerald max-w-6xl prose-img:rounded"}>
            <h1 className={" font-bold text-6xl mb-5"}>{snippet.title}</h1>
            {/* <p className="text-xs">Hosenur published this article {moment(blog.publishedAt).format("MMMM Do, YYYY")}</p> */}
            <MDX code={snippet.body.code} />
        </article>
    );
}