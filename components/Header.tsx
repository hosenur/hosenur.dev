import Link from "next/link";
import React from "react";
import IonIcon from '@reacticons/ionicons';
import { silkscreen } from "@/utils/fonts";

export default function Header() {
  return (
    <header className="header  grid grid-cols-3  items-center px-5 py-2.5 rounded-full fixed max-w-4xl w-full">
      <div className="text-xl flex items-center gap-2.5">
        <IonIcon name="logo-github" />
        <IonIcon name="logo-twitter" />
        <IonIcon name="logo-instagram" />
      </div>
      <h1 className={silkscreen.className +" text-center text-lg"}>Hosenur</h1>
      <nav className="space-x-5 flex items-center">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blogs">Blog</Link>
        <Link href="/snippets">Snippets</Link>
      </nav>
    </header>
  );
}
