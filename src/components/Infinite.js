/** @jsx jsx */
import { jsx, Spinner, Themed } from "theme-ui"
import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { globalHistory } from "@reach/router"
// import { useInView } from "react-intersection-observer"

export default function InfiniteScroll({ chapters, curPage }) {
  //   const [ref, inView, entry] = useInView()
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
          setTimeout(() => {
            navigate("/capitulo/" + (curPage + 1))
          }, 800)
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
      <div sx={{ height: "80px", width: "100%", display: "flex" }}>
        {loading && <Spinner sx={{ m: "auto" }} />}
      </div>
    </React.Fragment>
  )
}
