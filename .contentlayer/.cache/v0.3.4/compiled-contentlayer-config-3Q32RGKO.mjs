// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

// utils/codeTheme.ts
var rehypePrettyCodeOptions = {
  theme: "github-light"
};

// contentlayer.config.js
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    publishedAt: {
      type: "date",
      required: true
    }
  },
  computedFields
}));
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    reposiroty: {
      type: "string"
    },
    url: {
      type: "string"
    },
    banner: {
      type: "string",
      required: true
    },
    category: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "date",
      required: true
    }
  },
  computedFields
}));
var Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: `snippets/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    language: {
      type: "string"
    },
    date: {
      type: "date",
      required: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Blog, Snippet, Project],
  mdx: {
    rehypePlugins: [
      rehypePrettyCode,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypeSlug,
      rehypeCodeTitles
    ]
  }
});
export {
  Blog,
  Project,
  Snippet,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-3Q32RGKO.mjs.map
