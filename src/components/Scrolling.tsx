"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Scrolling() {
  return (
    <Marquee gradientColor={[0,0,0]} gradient >
        <Image src={"/one.svg"} width={100} height={100} alt={"one"} />
        <Image src={"/one.svg"} width={100} height={100} alt={"one"}  />
        <Image src={"/one.svg"} width={100} height={100} alt={"one"}  />
        <Image src={"/one.svg"} width={100} height={100} alt={"one"}  />
    </Marquee>
  )
}
