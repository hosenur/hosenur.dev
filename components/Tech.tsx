import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Tech() {
  return (
    <Marquee
    className="-z-50"
      gradient={true}
      gradientWidth={500}
      autoFill={true}
      gradientColor={[24, 24, 27]}
      pauseOnHover
    >
      <Image
        alt="next.js"
        width={1000}
        height={1000}
        className="w-20 mx-5 my-2.5"
        src={
          "https://ik.imagekit.io/hosenur/IO/Next.js_logotype.png?updatedAt=1686689708281"
        }
      />
      <Image
        alt="tw"
        width={1000}
        height={1000}
        className="w-20 mx-5 my-2.5 grayscale"
        src={
          "https://ik.imagekit.io/hosenur/IO/tailwindcss-logotype-white.svg"
        }
      />
      <Image
        alt="kotlin"
        width={1000}
        height={1000}
        className="w-20 mx-5 my-2.5"
        src={
          "https://ik.imagekit.io/hosenur/IO/Kotlin_Monochrome_Logo_White_RGB.png?updatedAt=1686690566566"
        }
      />
      <Image
        alt="kotlin"
        width={1000}
        height={1000}
        className="w-20 mx-5 my-2.5"
        src={"https://ik.imagekit.io/hosenur/IO/built-with-appwrite__1_.svg"}
      />
      <Image
        alt="firebase"
        width={1000}
        height={1000}
        className="w-20 mx-5 my-2.5"
        src={"https://ik.imagekit.io/hosenur/IO/Firebase_Logo_Knockout.svg"}
      />
      <Image
        alt="flutter"
        width={1000}
        height={1000}
        className="w-20 mx-5 my-2.5"
        src={
          "https://ik.imagekit.io/hosenur/IO/683514c5660dbe52f5ba.png?updatedAt=1686690566517"
        }
      />
      <Image
        alt="nuxt"
        width={1000}
        height={1000}
        className="w-20 mx-5 my-2.5"
        src={
          "https://ik.imagekit.io/hosenur/IO/full-logo-white.png?updatedAt=1686690728454"
        }
      />
      <Image
        alt="expo"
        width={1000}
        height={1000}
        className="w-20 mx-5 my-2.5"
        src={
          "https://ik.imagekit.io/hosenur/IO/logo-wordmark-light.png?updatedAt=1686690867305"
        }
      />
    </Marquee>
  );
}
