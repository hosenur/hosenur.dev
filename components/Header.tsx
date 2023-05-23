import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="space-x-5 flex items-center">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blogs">Blog</Link>
        <Link href="/snippets">Snippets</Link>
      </nav>
    </header>
  );
}
