import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Metadata } from "next";
import { MDX } from "@/components/MDXComponents";

interface ProjectProps {
    params: {
        slug: string[];
    };
}

async function getProjectFromParams(params: ProjectProps["params"]) {
    const slug = params?.slug?.join("/");
    const project = allProjects.find((project) => project.slugAsParams === slug);

    if (!project) {
        null;
    }

    return project;
}

export async function generateMetadata({
    params,
}: ProjectProps): Promise<Metadata> {
    const project = await getProjectFromParams(params);

    if (!project) {
        return {};
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [project.banner],
        },
        twitter: {
            title: project.title,
            description: project.description,
            images: [project.banner],
        },
    };
}

export async function generateStaticParams(): Promise<
    ProjectProps["params"][]
> {
    return allProjects.map((project) => ({
        slug: project.slugAsParams.split("/"),
    }));
}

export default async function ProjectPage({ params }: ProjectProps) {
    const project = await getProjectFromParams(params);

    if (!project) {
        notFound();
    }

    return (
        <article className={"py-5 prose prose-invert prose-emerald max-w-4xl px-0"}>
            <h1 className={"mb-2"}>{project.title}</h1>
            <p className="text-xl mt-0">{project.description}</p>
            <hr className="my-4" />
            <MDX code={project.body.code} />
        </article>
    );
}