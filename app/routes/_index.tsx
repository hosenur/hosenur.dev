import type { MetaFunction } from "@remix-run/deno";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node"; // or cloudflare/deno
import { CONTENT } from "CONTENT";
import Header from "~/components/Header";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export const loader = async () => {
  const res = await fetch("https://counter.hosenur.workers.dev?domain=hosenurdev");
  const data = await res.json();
  return json({ count: data.result as number });
}


export default function Index() {
  const data: { count: number } = useLoaderData();
  return (
    <>
      <Header count={data.count} />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2.5">
          <p className="text-base">
            Hi there!, I am Hosenur Rahaman. Full Stack Web and Mobile Dev, Indie Developer, Linux Enthusiast and a CS Student. Below you can find the tech stack I work mainly with. Also checkout the products I am working on.

          </p>
          {/* <h1 className="font-bold text-2xl">Hosenur Rahaman</h1> */}
          <div className="text-sm flex gap-2">
            <p className="bg-zinc-100 w-fit px-2 py-1 rounded-md border border-zinc-200">Next.js</p>
            <p className="bg-zinc-100 w-fit px-2 py-1 rounded-md border border-zinc-200">Expo</p>
            <p className="bg-zinc-100 w-fit px-2 py-1 rounded-md border border-zinc-200 flex gap-2 items-center">
              <img className="w-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
              AWS</p>
            <p className="bg-zinc-100 w-fit px-2 py-1 rounded-md border border-zinc-200 flex gap-2 items-center">
            <img className="w-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" />
              Cloudflare</p>
            <p className="bg-zinc-100 w-fit px-2 py-1 rounded-md border border-zinc-200">Next.js</p>
            <p className="bg-zinc-100 w-fit px-2 py-1 rounded-md border border-zinc-200">Next.js</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CONTENT.map((item) => (
            <div key={item.id}>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
