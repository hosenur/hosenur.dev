import { notFound } from "next/navigation";
import { allSnippets } from "contentlayer/generated";
import Head from "next/head";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getSnippetFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const snippet = allSnippets.find((snippet) => snippet.slugAsParams === slug);

  if (!snippet) {
    null;
  }

  return snippet;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const snippet = await getSnippetFromParams(params);

  if (!snippet) {
    return {};
  }

  return {
    title: snippet.title,
    description: snippet.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allSnippets.map((snippet) => ({
    slug: snippet.slugAsParams.split("/"),
  }));
}

export default async function SnippetPage({ params }: PostProps) {
  const snippet = await getSnippetFromParams(params);

  if (!snippet) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{snippet.title}</title>
        <meta name="og:description" content={snippet.description} />
        <meta name="og:title" content={snippet.title} />
        <meta name="description" content={snippet.description} />
        <meta name="og:image" content={snippet.banner} />
      </Head>
      <article className="py-6 prose dark:prose-invert">
        <h1 className="mb-2">{snippet.title}</h1>
        {snippet.description && (
          <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
            {snippet.description}
          </p>
        )}
        <hr className="my-4" />
        <Mdx code={snippet.body.code} />
      </article>
    </>
  );
}