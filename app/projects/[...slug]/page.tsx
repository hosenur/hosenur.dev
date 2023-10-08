import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Metadata } from "next";
import { MDX } from "@/components/MDXComponents";
import moment from "moment";
import Image from "next/image";
import { regular } from "@/utils/fonts";
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
        <article className={"prose prose-invert prose-emerald max-w-6xl prose-img:rounded " + regular.className}>
            <h1>{project.title}</h1>
            <Image src={project.banner} alt="banner" width={1920} height={1440} className="rounded w-full max-w-full" />
            <MDX code={project.body.code} />
        </article>
    );
}