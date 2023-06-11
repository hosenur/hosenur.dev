import Image from "next/image";
import React from "react";
export const metadata = {
  title: "Tech Stack",
  description:
    "Here is my preferred tech stack for all things coding, designing and all other stuff",
};
const urls = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
  "https://resources.jetbrains.com/storage/products/company/brand/logos/IntelliJ_IDEA_icon.png",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
];
export default function stack() {
  return (
    <div className="min-h-screen flex flex-col gap-5">
      <h1>
        Here is my preferred tech stack for all things coding, designing and all
        other stuff
      </h1>
      <span className="uppercase text-center text-lg">APPS AND TOOLS</span>
      <div className="flex flex-wrap gap-10">
        {urls.map((url) => (
          <div key={url} className="">
            <Image
              width={100}
              height={100}
              className="w-14 h-14"
              alt="nextjs"
              src={url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
