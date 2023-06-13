import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Tech() {
  return (
    <Marquee gradient={true} gradientWidth={500} autoFill={true} gradientColor={[24, 24, 27]}>

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
        alt="kotlin"
        width={1000}
        height={1000}
        className="w-20 mx-5 my-2.5"
        src={
          "https://ik.imagekit.io/hosenur/IO/Kotlin_Full_Color_Logo_on_Black_RGB.png?updatedAt=1686689050448"
        }
      />
      <Image
        alt="kotlin"
        width={1000}
        height={1000}
        className="w-20 mx-5 my-2.5"
        src={
          "https://ik.imagekit.io/hosenur/IO/built-with-appwrite__1_.svg"
        }
      />
      <Image
        alt="kotlin"
        width={1000}
        height={1000}
        className="w-20 mx-5 my-2.5"
        src={
          "https://ik.imagekit.io/hosenur/IO/Firebase_Logo_Knockout.svg"
        }
      />
    </Marquee>
  );
}
