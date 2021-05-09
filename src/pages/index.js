import React from "react"

import Layout from "../components/Layout"
import Intro from "../components/Intro"

export default function Home({ location }) {
  return (
    <Layout location={location}>
      <Intro />
    </Layout>
  )
}
