import { sanityClient } from "@/utils/sanity.client";
import { PortableText } from "@portabletext/react";
import Head from "next/head";
import urlFor from "@/utils/urlFor";
import Header from "@/components/Header";
import Image from "next/image";

export default function Product({ data }: { data: any }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={urlFor(data.mainImage).url()} />
      </Head>
      <div>
        <Header />

        <main className="max-w-5xl p-5 mx-auto flex flex-col space-y-5">
          <h1 className="text-6xl font-bold">{data.title}</h1>
          <Image
            src={urlFor(data.mainImage).url()}
            width={1616}
            height={848}
            alt="banner"
          />
          <PortableText value={data.body} />
          <div className="relative w-full h-full"></div>
        </main>
      </div>
    </>
  );
}
export const getStaticPaths = async () => {
  const data = await sanityClient.fetch(`*[_type == "product"]{
        _id,
        slug {
            current
        }
    }`);
  const paths = data.map((product: any) => ({
    params: { slug: product.slug.current },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async ({ params }: any) => {
  const data = await sanityClient.fetch(
    `*[_type == "product" && slug.current == $slug][0]`,
    { slug: params.slug }
  );
  return {
    props: {
      data,
    },
  };
};
