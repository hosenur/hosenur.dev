import { allProjects } from "@/.contentlayer/generated";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { medium } from "@/utils/fonts";
import Project from "./Project";
export default function RecentProjects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 group z-0">
            {allProjects.filter((project) => !project.draft).slice(0, 6).map((project) => (
                <Project key={project._id}
                    project={project} />
            ))}
        </div>
    );
}