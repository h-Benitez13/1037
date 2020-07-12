import React from "react"
import Layout from "../components/Layout"

const SEOProps = {
  title: "Not Found",
  description: "Not Found",
}

const NotFoundPage = ({ location }) => (
  <Layout location={location} {...SEOProps}>
    Not Found
  </Layout>
)

export default NotFoundPage
