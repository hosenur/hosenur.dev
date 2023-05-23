import { allBlogs } from "@/.contentlayer/generated";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
export const metadata = {
  title: "Hosenur",
  description: "Personal blog of Hosenur Uzun",
};

export default function Home() {
  return (
    <div className="flex flex-col space-y-5">
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
      <div className="flex flex-col space-y-2.5">
        {allBlogs.map((blog) => (
          <article key={blog._id}>
            <Link href={blog.slug}>
              <h2 className="font-bold">{blog.title}</h2>
            </Link>
            <p>{blog.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
