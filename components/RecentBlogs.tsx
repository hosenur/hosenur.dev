import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { allBlogs } from "@/.contentlayer/generated";
import React from "react";
import Link from "next/link";
import Blog from "./Blog";

export default function RecentBlogs() {
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
        {allBlogs.map((blog) => (
          <Blog key={blog._id} {...blog} />
        ))}
      </div>
    </div>
  );
}
