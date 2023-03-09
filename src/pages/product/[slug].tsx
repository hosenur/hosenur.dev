import { sanityClient } from "@/utils/sanity.client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import urlFor from "@/utils/urlFor";
import Header from "@/components/Header";

export default function Product({ data }: { data: any }) {
  return (
    <div>
      <Header />

      <main className="max-w-5xl p-5 mx-auto flex flex-col space-y-5">
        <h1 className="text-6xl font-bold">{data.title}</h1>
        <img
          src={urlFor(data.mainImage).url()}
          className="w-full rounded-sm"
          alt=""
        />
        <PortableText value={data.body}/>
        <div className="relative w-full h-full">
          {/* <Image src={urlFor(data.mainImage).url()} alt="cover" width={1000} height={200} /> */}
        </div>
      </main>
    </div>
  );
}
// fetch the data from sanity using the slug
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
    fallback: true,
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
    revalidate: 10 * 60 * 60,
  };
};
