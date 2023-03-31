import urlFor from "@/utils/urlFor";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Recent({ data }: { data: any }) {
  return (
    <div className="flex space-y-5 flex-col">
      <span className="text-3xl md:text-4xl">
        Check Out&nbsp;
        <Link href={data.url} className="gradient">
          {data.title}
        </Link>
        ✨
      </span>
      <Image
        src={urlFor(data.mainImage).url()}
        width={1616}
        height={848}
        alt="banner"
      />
      <p>{data.description}</p>
      <Link className="text-info" href={`/product/${data.slug.current}`}>
        Read More ↗️
      </Link>
    </div>
  );
}
