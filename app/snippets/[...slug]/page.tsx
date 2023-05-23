import { notFound } from "next/navigation";
import { allSnippets } from "contentlayer/generated";
import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

interface SnippetProps {
  params: {
    slug: string[];
  };
}

async function getSnippetFromParams(params: SnippetProps["params"]) {
  const slug = params?.slug?.join("/");
  const snippet = allSnippets.find((snippet) => snippet.slugAsParams === slug);

  if (!snippet) {
    null;
  }

  return snippet;
}

export async function generateMetadata({
  params,
}: SnippetProps): Promise<Metadata> {
  const snippet = await getSnippetFromParams(params);

  if (!snippet) {
    return {};
  }

  return {
    title: snippet.title,
    description: snippet.description,
    openGraph: {
      title: snippet.title,
      description: snippet.description,
      images: [snippet.banner],
    },
    twitter: {
      title: snippet.title,
      description: snippet.description,
      images: [snippet.banner],
    },
  };
}

export async function generateStaticParams(): Promise<SnippetProps["params"][]> {
  return allSnippets.map((snippet) => ({
    slug: snippet.slugAsParams.split("/"),
  }));
}

export default async function SnippetPage({ params }: SnippetProps) {
  const snippet = await getSnippetFromParams(params);

  if (!snippet) {
    notFound();
  }

  return (
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
  );
}
