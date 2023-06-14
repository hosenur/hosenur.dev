import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import IonIcon from "@reacticons/ionicons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDev,
  faHashnode,
  faUnsplash,
} from "@fortawesome/free-brands-svg-icons";

export default function Links() {
  return (
    <div className="min-h-screen">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex gap-2.5 items-center border  border-zinc-800 p-2.5 rounded-lg">
        <IonIcon name="logo-instagram" className="text-2xl" />
        Instagram
        <ArrowUpRightIcon className="w-6 h-6 ml-auto" />
      </div>

      <div className="flex gap-2.5 items-center border border-zinc-800 p-2.5 rounded-lg">
        <IonIcon name="logo-twitter" className="text-2xl" />
        Twitter
        <ArrowUpRightIcon className="w-6 h-6 ml-auto" />
      </div>

      <div className="flex gap-2.5 items-center border border-zinc-800 p-2.5 rounded-lg">
        <IonIcon name="logo-facebook" className="text-2xl" />
        Facebook
        <ArrowUpRightIcon className="w-6 h-6 ml-auto" />
      </div>

      <div className="flex gap-2.5 items-center border border-zinc-800 p-2.5 rounded-lg">
        <IonIcon name="logo-reddit" className="text-2xl" />
        Facebook
        <ArrowUpRightIcon className="w-6 h-6 ml-auto" />
      </div>
      <div className="flex gap-2.5 items-center border  border-zinc-800 p-2.5 rounded-lg">
        <IonIcon name="logo-github" className="text-2xl" />
        GitHub
        <ArrowUpRightIcon className="w-6 h-6 ml-auto" />
      </div>
      <div className="flex gap-2.5 items-center border border-zinc-800 p-2.5 rounded-lg">
        <IonIcon name="logo-linkedin" className="text-2xl" />
        LinkedIn
        <ArrowUpRightIcon className="w-6 h-6 ml-auto" />
      </div>
      <div className="flex gap-2.5 items-center border border-zinc-800 p-2.5 rounded-lg">
        <FontAwesomeIcon icon={faHashnode} className="w-5" />
        Hashnode
        <ArrowUpRightIcon className="w-6 h-6 ml-auto" />
      </div>
      <div className="flex gap-2.5 items-center border border-zinc-800 p-2.5 rounded-lg">
        <FontAwesomeIcon icon={faDev} className="w-5" />
        Dev.to
        <ArrowUpRightIcon className="w-6 h-6 ml-auto" />
      </div>
      <div className="flex gap-2.5 items-center border border-zinc-800 p-2.5 rounded-lg">
        <FontAwesomeIcon icon={faUnsplash} className="w-5" />
        Unsplash
        <ArrowUpRightIcon className="w-6 h-6 ml-auto" />
      </div>
    </div>
    </div>
  );
}
