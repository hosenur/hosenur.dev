import Link from "next/link";
import React from "react";
import IonIcon from "@reacticons/ionicons";
import { silkscreen } from "@/utils/fonts";

export default function Header() {
  return (
    <header className="fixed w-full z-10">
      <div className="px-5">
        <div className="grid grid-cols-3   items-center max-w-4xl mx-auto header px-5 py-2.5 rounded-full">
          <div className="text-xl hidden md:flex gap-2.5 ">
            <Link href="https://github.com/hosenur" className=" flex">
              <IonIcon name="logo-github" />
            </Link>
            <Link href="https://twitter.com/hosenurdev" className=" flex">
              <IonIcon name="logo-twitter" />
            </Link>
            <Link href="https://instagram.com/hosenur.io" className=" flex">
              <IonIcon name="logo-instagram" />
            </Link>
          </div>
          <h1 className={silkscreen.className + " text-center text-lg"}>
            <span className="text-emerald-500">H</span>
            <span className="text-rose-500">o</span>
            <span className="text-purple-500">s</span>
            <span className="text-fuchsia-500">e</span>
            <span className="text-red-500">n</span>
            <span className="text-blue-500">u</span>
            <span className="text-yellow-500">r</span>
          </h1>
          <nav className="hidden  md:flex gap-5 justify-end">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blogs">Blog</Link>
            <Link href="/snippets">Snippets</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
