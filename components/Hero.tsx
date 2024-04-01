import { Mail } from "lucide-react";

export default function Hero() {
    return (
        <div className='flex flex-col gap-5'>
            <p className="leading-8" >Hola 👋, I am Hosenur Rahaman, I craft web and mobile experiences with bleeding edge tech like
                <span className="bg-zinc-100 mx-1 px-1 inline-flex items-center border rounded-md gap-1 max-h-7">
                    <i className="devicon-react-original colored" />
                    React
                </span> ,
                <span className="bg-zinc-100 mx-1 px-1 inline-flex items-center border rounded-md gap-1 max-h-7">
                    <i className="devicon-nextjs-plain colored" />
                    NextJS
                </span>and
                <span className="bg-zinc-100 mx-1 px-1 inline-flex items-center border rounded-md gap-1 max-h-7">
                    <img src="/expo.svg" className="w-4" alt="" />
                    Expo
                </span> combining them with stuffs like 
                <span className="bg-zinc-100 mx-1 px-1 inline-flex items-center border rounded-md gap-1 max-h-7">
                    <i className="devicon-amazonwebservices-plain-wordmark colored" />
                    AWS
                </span> ,
                <span className="bg-zinc-100 mx-1 px-1 inline-flex items-center border rounded-md gap-1 max-h-7">
                    <i className="devicon-cloudflare-plain colored" />
                    Cloudflare
                </span> ,
                <span className="bg-zinc-100 mx-1 px-1 inline-flex items-center border rounded-md gap-1 max-h-7">
                    <i className="devicon-nodejs-plain colored" />
                    NodeJS
                </span> ,
                <span className="bg-zinc-100 mx-    1 px-1 inline-flex items-center border rounded-md gap-1 max-h-7">
                    <i className="devicon-express-original colored" />
                    ExpressJS
                </span> ,
                <span className="bg-zinc-100 mx-1 px-1 inline-flex items-center border rounded-md gap-1 max-h-7">
                    <i className="devicon-prisma-original colored" />
                    Prisma
                </span> ,
                <span className="bg-zinc-100 mx-1 px-1 inline-flex items-center border rounded-md gap-1 max-h-7">
                    <i className="devicon-vercel-original colored" />
                    Vercel
                </span>.
            </p>
            <div className="flex items-center gap-2 bg-zinc-100 text-zinc-700  border max-w-min py-1 px-4 rounded-full">
                <Mail className='w-4 h-4 -mb-1' />
                <p>mail@hosenur.dev</p>
            </div>
        </div>
    );
}
