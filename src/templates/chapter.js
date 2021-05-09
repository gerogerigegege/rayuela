import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Infinite from "../components/Infinite"
import Intro from "../components/Intro"

export default function ChapterTemplate({ data }) {
  return (
    <Layout location={data.current.frontmatter.capitulo}>
      <Intro />
      <Infinite
        chapters={data.all.nodes}
        curPage={data.current.frontmatter.capitulo}
      />
    </Layout>
  )
}

export const query = graphql`
  query ChapterQuery($current: Int!) {
    current: mdx(frontmatter: { capitulo: { eq: $current } }) {
      slug
      frontmatter {
        capitulo
        siguiente
      }
      body
    }
    all: allMdx(
      sort: { fields: frontmatter___capitulo, order: ASC }
      limit: $current
    ) {
      nodes {
        slug
        frontmatter {
          capitulo
          siguiente
        }
        body
      }
    }
  }
`
