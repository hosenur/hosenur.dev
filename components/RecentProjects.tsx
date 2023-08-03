import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { allProjects } from "@/.contentlayer/generated";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function RecentProjects() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <span>LATEST PROJECTS</span>
        <Link
          href={"/projects"}
          className="flex items-center space-x-1 text-slate-500"
        >
          <span>VIEW ALL</span>
          <ArrowUpRightIcon className="w-6 h-6" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            />
            {/* <div className="flex justify-between">
              <span>{project.title}</span>
            </div> */}
          </Link>
        ))}
      </div>
    </div>
  );
}
