import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import RecentBlogs from "@/components/RecentBlogs";
export const metadata = {
  title: "Hosenur",
  description: "Personal blog of Hosenur Uzun",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <RecentBlogs />
    </div>
  );
}
