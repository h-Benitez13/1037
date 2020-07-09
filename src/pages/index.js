import React from "react"
import Layout from "../components/Layout"
import Homepage from "../components/Homepage"

const SEOProps = {
  title: null, // Use default
  description: null, // Use default
}
const IndexPage = ({ location }) => (
  <Layout location={location} {...SEOProps}>
    <Homepage />
  </Layout>
)

export default IndexPage
