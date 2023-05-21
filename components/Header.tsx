import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="space-x-5 flex items-center">
        <Link href="/">Home</Link>
        <Link href="/about">Projects</Link>
        <Link href="/about">Blog</Link>
        <Link href="/about">Snippets</Link>
      </nav>
    </header>
  );
}
