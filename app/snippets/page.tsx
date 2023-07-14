import React from "react";
import { allSnippets } from "@/.contentlayer/generated";
export const metadata = {
  title: "Snippets",
  description: "Short code snippets, tips and tricks I use in my projects",
};

export default function Snippets() {
  return (
    <div>
      {allSnippets.map((snippet) => (
        <div key={snippet._id}>
          <h1>{snippet.title}</h1>
          <p>{snippet.description}</p>
        </div>
      ))}
    </div>
  );
}
