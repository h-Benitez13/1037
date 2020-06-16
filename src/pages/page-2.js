import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/test.module.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Link className={styles.link} to="/">
      /home
    </Link>
  </Layout>
)

export default SecondPage
