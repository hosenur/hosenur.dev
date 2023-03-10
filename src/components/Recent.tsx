import urlFor from "@/utils/urlFor";
import Link from "next/link";
import React from "react";

export default function Recent({ data }: { data: any }) {
  console.log(data);
  return (
    <div className="flex space-y-5 flex-col">
      <Link className="text-4xl" href="https://hosenur.io">
        CheckOut <span className="gradient">{data.title}</span>{" "}
      </Link>
      <img src={urlFor(data.mainImage).url()} alt="" />
    </div>
  );
}
