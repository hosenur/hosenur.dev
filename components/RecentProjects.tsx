import { allProjects } from "@/.contentlayer/generated";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function RecentProjects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 group z-0">
            {allProjects.slice(0, 4).map((project) => (
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
                </Link>
            ))}
        </div>
    );
}