import React from "react"
import SEO from "./seo"

const Layout = ({ children, location, ...SEOProps }) => {
  return (
    <div className="site">
      <SEO location={location} {...SEOProps} />
      <div className="site-content">{children}</div>
    </div>
  )
}

export default Layout
