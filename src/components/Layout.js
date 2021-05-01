/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({ location, children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div
        sx={{
          p: 3,
          maxWidth: "container",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Themed.p sx={{ my: 0 }}>
          <strong>{data.site.siteMetadata.title}</strong>
        </Themed.p>
      </div>
      <div
        sx={{
          flex: "1 1 auto",
          p: 3,
          width: "100%",
          maxWidth: "container",
          mx: "auto",
        }}
      >
        {children}
      </div>
      <div
        sx={{
          p: 3,
          maxWidth: "container",
          mx: "auto",
        }}
      >
        <Themed.p>
          <small>{data.site.siteMetadata.title}</small>
        </Themed.p>
      </div>
    </div>
  )
}
