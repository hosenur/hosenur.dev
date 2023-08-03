import { Blog } from "@/.contentlayer/generated";
import Link from "next/link";
import React from "react";
import moment from "moment";
export default function Blog(blog: Blog) {
  return (
    <article>
      <Link href={blog.slug}>
        <h2 className={"font-medium"}>{blog.title}</h2>
      </Link>
      <p className="text-zinc-400">{blog.description}</p>
      <p className="text-sm text-zinc-400">Published {moment(blog.publishedAt).fromNow()}</p>
    </article>
  );
}
