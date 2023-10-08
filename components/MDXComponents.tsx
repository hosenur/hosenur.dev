import Image from "next/image"
import ProjectInfo from "./ProjectInfo"
import { useMDXComponent } from "next-contentlayer/hooks"

const components = {
  Image,
  ProjectInfo
}

interface MdxProps {
  code: string
}

export function MDX({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}