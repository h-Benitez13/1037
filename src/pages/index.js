import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import styles from "../components/test.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    <Link className={styles.link} to="/page-2/">
      /page2
    </Link>{" "}
    <br />
  </Layout>
)

export default IndexPage
