import Header from "@/components/Header";
import Links from "@/components/Links";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Projects() {
  return (
    <>
      <Header />
      <Links/>
      <Head>
        <title>Project</title>
        <meta
          name="description"
          content="Leave a message for the future visitors of my website, maybe a suggestion, review or even humor"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-5xl p-5 mx-auto font-bold space-y-5">
        <div className="flex items-center">
          <Image
            src={
              "https://ik.imagekit.io/kydj5j026nb/lightning-bolt_nzUMQMbT4.svg"
            }
            width={200}
            height={200}
            alt="bolt"
          />
          <h1 className="text-9xl font-bold">Projects</h1>
        </div>
      </main>
    </>
  );
}
