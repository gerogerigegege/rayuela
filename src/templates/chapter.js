import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"

export default function Chapter({ pageContext, data }) {
  return (
    <Layout location={pageContext.frontmatter.capitulo}>
      {data.allMdx.nodes.map(node => {
        return (
          <React.Fragment key={node.slug}>
            <MDXRenderer>{node.body}</MDXRenderer>
          </React.Fragment>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query ChapterQuery($limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___capitulo, order: ASC }
      limit: $limit
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
