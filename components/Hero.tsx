import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex gap-5 flex-col">

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
        <h1 className="font-bold text-2xl">hosenur rahaman</h1>
        <p>Full Stack Web Developer& App Developer</p>
      </div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nisi, ea laudantium soluta recusandae dolorum quidem. Nemo a enim sunt obcaecati alias. Suscipit, nisi! Libero nobis possimus eos dignissimos officiis deserunt incidunt neque autem at, fuga aut! Eveniet, alias iure!</p>
        </div>
  );
}
