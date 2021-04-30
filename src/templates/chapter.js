import React, { useState, useEffect } from "react"
import { graphql, navigate } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { globalHistory } from "@reach/router"

import Layout from "../components/Layout"

function InfiniteScroll({ chapters, curPage }) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    return globalHistory.listen(() => setLoading(false))
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const handleScroll = () => {
    const lastChapterLoaded = document.querySelector(
      ".chapter-list > .chapter:last-child"
    )
    if (lastChapterLoaded) {
      const lastChapterLoadedOffset =
        lastChapterLoaded.offsetTop + lastChapterLoaded.clientHeight
      const pageOffset = window.pageYOffset + window.innerHeight
      if (pageOffset > lastChapterLoadedOffset) {
        if (curPage < 56 && !loading) {
          setLoading(true)
          navigate("/capitulo/" + (curPage + 1))
        }
      }
    }
  }
  return (
    <React.Fragment>
      <div className="chapter-list">
        {chapters.map(node => {
          return (
            <div key={node.slug} className="chapter">
              <MDXRenderer>{node.body}</MDXRenderer>
            </div>
          )
        })}
      </div>
      {loading && <h1>Loading ...</h1>}
    </React.Fragment>
  )
}

export default function Chapter({ pageContext, data }) {
  return (
    <Layout location={pageContext.frontmatter.capitulo}>
      <InfiniteScroll
        chapters={data.allMdx.nodes}
        curPage={pageContext.frontmatter.capitulo}
      />
    </Layout>
  )
}

export const query = graphql`
  query ChapterQuery($current: Int!) {
    allMdx(
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
