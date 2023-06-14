import { silkscreen } from "@/utils/fonts";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-between lowercase max-w-4xl p-5 mx-auto">
      <Link href="/stack">Stack</Link>
      <h1 className={silkscreen.className + " text-center text-lg"}>
        hosenur
      </h1>
      <Link href="/stack">Links</Link>
    </div>
  );
}
