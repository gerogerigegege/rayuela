/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <Themed.h1>Hello world!</Themed.h1>
      Go to{" "}
      <Themed.a as={Link} to="/page-2">
        page 2
      </Themed.a>
    </Layout>
  )
}
