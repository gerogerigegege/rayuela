import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function ChapterView({ body }) {
  return <MDXRenderer>{body}</MDXRenderer>
}
