import React from "react";
import Image from "next/image";
import { bold } from "@/utils/fonts";
export default function Hero() {
  return (
    <div className="flex gap-5 flex-col ">
      <div className="flex gap-5 items-center">
        <Image
          width={1000}
          height={1000}
          alt="Hosenur"
          className="w-20 h-20 rounded-full"
          src={
            "https://ik.imagekit.io/kydj5j026nb/IMG20211015165413__3__1BD3B9ihM.jpg?updatedAt=1680814852099"
          }
        />
        <div className="flex flex-col">
          <h1 className={"text-2xl " + bold.className}>hosenur rahaman</h1>
          <p>Full Stack Web Developer& App Developer</p>
        </div>
      </div>
      <p>I craft websites with React,Next.js, Svelte and Sveltekit and also mobile apps with React Native or Kotlin, integrated with battle tested backend services like Firebase, AppWrite or sometimes a backend I build up from scratch.</p>
    </div>
  );
}
