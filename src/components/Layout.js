/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Layout({ location, children }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
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
      {!isRootPath && (
        <div
          sx={{
            p: 3,
            width: "100%",
            maxWidth: "container",
            mx: "auto",
            position: "sticky",
            top: 0,
            bg: "#fffffff8",
            boxShadow: theme => `inset 0 -1px 0 ${theme.colors.text}`,
          }}
        >
          <Themed.a as={Link} to="/">
            <Themed.h6 sx={{ m: 0 }}>{data.site.siteMetadata.title}</Themed.h6>
          </Themed.a>
        </div>
      )}
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
    </div>
  )
}
