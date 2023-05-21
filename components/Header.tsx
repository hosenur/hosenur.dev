import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between">
        <nav className="space-x-5">
          <Link href="/">Home</Link>
          <Link href="/about">Projects</Link>
          <Link href="/about">Blog</Link>
          <Link href="/about">Snippets</Link>
        </nav>
      </div>
    </header>
  );
}
