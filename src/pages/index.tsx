import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Links from "@/components/Links";
import Projects from "@/components/Projects";
import Recent from "@/components/Recent";
import Stats from "@/components/Stats";
import { sanityClient } from "@/utils/sanity.client";
import { groq } from "next-sanity";
import Head from "next/head";
export default function Home({
  data,
  latestProduct,
}: {
  data: any;
  latestProduct: any;
}) {
  return (
    <>
      <Header />
      <Links />
      <Head>
        <title>hosenur.io</title>
        <meta name="description" content="I build Cool Stuffs, with the latest and best technologies. Mern Dev. Full Stack Web + App Dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="divider">Ignite 🔥</div>
      <main className="max-w-5xl p-5 mx-auto font-bold space-y-10">
        <span>
          Hosenur - Full Stack Web Dev / Full Stack App Dev / Linux Enthusiast
        </span>
        <p className="text-4xl  md:text-6xl">
          I build <span className="gradient">super cool stuff</span> with the
          best and latest technologies
        </p>
        <div className="divider">Stats</div>
        <Stats />
        <div className="divider">Latest Product</div>
        <Recent data={latestProduct} />
        <div className="divider">Products</div>
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await sanityClient.fetch(`*[_type == "product"]`);
  const latestProduct = await sanityClient.fetch(
    `*[_type == "product"] | order(_createdAt desc) [0]`
  );
  return {
    props: {
      data,
      latestProduct,
    },
  };
};
