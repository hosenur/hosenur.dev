import { satoshi } from "@/utils/fonts";
import IonIcon from "@reacticons/ionicons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div
      className={
        "max-w-3xl mx-auto flex  text-lg font-light  justify-between " +
        satoshi.className
      }
    >
      <span className="flex gap-5 items-center">
        <Link href={""}>home</Link>
        <Link href={""}>projects</Link>
        <Link href={""}>blogs</Link>
        <Link href={""}>about</Link>
      </span>
      
      <span className="flex gap-2.5 items-center text-xl">
        <IonIcon name="logo-twitter" />
        <IonIcon name="logo-github" />
        <IonIcon name="logo-instagram" />
      </span>
    </div>
  );
}
