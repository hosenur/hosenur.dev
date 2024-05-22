import { createMdxtsPlugin } from 'mdxts/next'

const withMdxts = createMdxtsPlugin({
  theme: 'vitesse-light',
  gitSource: 'https://github.com/souporserious/mdxts',
})

export default withMdxts({
  output: "export"
})