import { defineDocumentType } from "contentlayer/source-files";
export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "content/blogs/**/*.mdx",
  contentType: "mdx",
}));
export const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: "content/snippets/**/*.mdx",
  contentType: "mdx",
}));
export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "content/projects/**/*.mdx",
}));
