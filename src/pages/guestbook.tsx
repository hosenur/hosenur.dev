import Header from "@/components/Header";
import Head from "next/head";
import { useEffect, useState } from "react";
import moment from "moment";
import { db } from "../utils/firebase";
import {
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import Links from "@/components/Links";
type Signature = {
  text: string;
  name: string;
  created: Date;
};
export default function Guestbook() {
  const [signatures, setSignatures] = useState([]);
  const [signature, setSignature] = useState("");
  const handlePostSignature = async () => {
    const docRef = collection(db, "signatures");
    const payload = {
      text: signature,
      name: currentUser.displayName,
      timestamp: Timestamp.now(),
      created: moment().format(),
    };
    await addDoc(docRef, payload);
    setSignature("");
  };
  const { currentUser, authGitHub, authGoogle }: any = useAuth();
  useEffect(() => {
    const collectionRef = collection(db, "signatures");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot: any) => {
      setSignatures(snapshot.docs.map((doc: any) => doc.data()));
    });
  }, []);
  return (
    <>
      <Header />
      <Links/>
      <Head>
        <title>Guestbook</title>
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
              "https://ik.imagekit.io/kydj5j026nb/heart-pixel_hs3ac3RvK.svg"
            }
            width={200}
            height={200}
            alt="bolt"
          />
          <h1 className="text-9xl font-bold">GuestBook</h1>
        </div>
        {!currentUser ? (
          <div className="flex space-y-5 flex-col">
            <p>
              Leave a message for the future visitors of my website, maybe a
              suggestion, review or even humor.Continue with GitHub or Google to
              post
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-x-5 md:space-y-0">
              <button onClick={authGitHub} className="btn btn-wide uppercase">
                Auth with GitHub
              </button>
              <button onClick={authGoogle} className="btn btn-wide uppercase">
                Auth With Google
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col space-y-5">
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
            />
            <button
              disabled={!signature}
              onClick={handlePostSignature}
              className="btn w-full"
            >
              post Signature ✨
            </button>
          </div>
        )}
        {signatures.map((signature: Signature) => (
          <div key={signature.text + signature.name}>
            <p>{signature.text}</p>
            <div className="text-sm">
              By {signature.name} {moment(signature.created).fromNow()}
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
