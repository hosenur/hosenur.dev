import { allProjects } from "@/.contentlayer/generated";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { medium } from "@/utils/fonts";
export default function RecentProjects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 group z-0">
            {allProjects.filter((project) => !project.draft).slice(0, 4).map((project) => (
                <Link
                    href={project.slug}
                    className="flex flex-col gap-2"
                    key={project._id}
                >
                    <Image
                        src={project.banner}
                        alt="banner"
                        width={1920}
                        height={1440}
                        className="group-hover:opacity-40 transition-opacity duration-300 hover:!opacity-100 rounded"
                    />
                    <div className="flex justify-between text-lg">

                        <h1 className={medium.className}>{project.title}</h1>
                        <p className="text-zinc-500">{project.category}</p>
                    </div>
                    <p className="text-zinc-500">{project.description}</p>
                </Link>
            ))}
        </div>
    );
}