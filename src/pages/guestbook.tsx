import Header from "@/components/Header";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import db from "../utils/firebase";
import { collection,onSnapshot } from "firebase/firestore";

export default function Guestbook() {
  const [signatures, setSignatures] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "signatures"), (snapshot) => {
        setSignatures(snapshot.docs.map((doc) => doc.data()));
        console.log(snapshot.docs.map((doc) => doc.data()));
    })
    return () => unsub();
  }, []);
  return (
    <>
      <Header />
      <Head>
        <title>Guestbook</title>
        <meta
          name="description"
          content="Leave a message for the future visitors of my website, maybe a suggestion, review or even humor"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-5xl p-5 mx-auto font-bold space-y-10">
        <div>guestbook</div>
        {signatures.map((signature) => (
            <div key={signature.id}>
                <div>{signature.text}</div>
                <div>{signature.name}</div>
            </div>
        ))}
      </main>
    </>
  );
}
