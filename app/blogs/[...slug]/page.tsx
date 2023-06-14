import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const blog = allBlogs.find((blog) => blog.slugAsParams === slug);

  if (!blog) {
    null;
  }

  return blog;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const blog = await getPostFromParams(params);

  if (!blog) {
    return {};
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph :{
      title: blog.title,
      description: blog.description,
      images: [blog.banner]
    }
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allBlogs.map((blog) => ({
    slug: blog.slugAsParams.split("/"),
  }));
}

export default async function BlogPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className={"py-5 prose prose-invert prose-emerald max-w-4xl px-0"}>
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-xl mt-0">
          {post.description}
        </p>
      )}
      <hr className="my-2.5" />
      <Mdx code={post.body.code} />
    </article>
  );
}
