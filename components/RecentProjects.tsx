import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { allProjects } from "@/.contentlayer/generated";
import React from "react";
import Link from "next/link";

export default function RecentProjects() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <span>RECENT BLOGS</span>
        <Link
          href={"/blogs"}
          className="flex items-center space-x-1 text-slate-500"
        >
          <span>VIEW ALL</span>
          <ArrowUpRightIcon className="w-6 h-6" />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {allProjects.map((project) => (
          <article key={project._id}>
            <Link href={project.slug}>
              <h2 className="font-bold">{project.title}</h2>
            </Link>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
