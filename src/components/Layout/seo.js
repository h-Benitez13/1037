import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const getPageUrl = ({ siteUrl, path }) => {
  return path ? `${siteUrl}${path}` : siteUrl
}

const getPageTitle = ({ title, shortTitle, siteTitle }) => {
  return title && shortTitle ? `${title} | ${shortTitle}` : siteTitle
}

const getPageDescription = ({ description, siteDescription }) => {
  return description || siteDescription
}

const getPageImage = ({
  siteUrl,
  defaultShareImage,
  defaultShareImageWidth,
  defaultShareImageHeight,
}) => {
  return {
    image: `${siteUrl}/${defaultShareImage}`,
    imgWidth: defaultShareImageWidth,
    imgHeight: defaultShareImageHeight,
  }
}

const getStructuredDataSchema = ({
  title,
  pageUrl,
  siteUrl,
  siteTitle,
  siteTitleAlt,
}) => {
  const schema = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: siteUrl,
      name: siteTitle,
      alternateName: siteTitleAlt,
    },
    {
      "@context": "http://schema.org",
      "@type": "WebPage",
      url: pageUrl,
      name: title,
    },
  ]

  return schema
}

const SEO = ({
  title: pageTitle,
  description: pageDescription,
  location: { pathname: path },
}) => {
  return (
    <StaticQuery
      query={graphql`
        query SEO {
          site {
            siteMetadata {
              siteUrl
              siteTitle
              siteTitleAlt
              siteDescription
              shareImage
              shareImageWidth
              shareImageHeight
              shortTitle
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: {
            siteUrl,
            siteTitle,
            siteTitleAlt,
            siteDescription,
            shareImage: defaultShareImage,
            shareImageWidth: defaultShareImageWidth,
            shareImageHeight: defaultShareImageHeight,
            shortTitle,
          },
        },
      }) => {
        const pageUrl = getPageUrl({ path, siteUrl })
        const title = getPageTitle({ title: pageTitle, shortTitle, siteTitle })
        const description = getPageDescription({
          description: pageDescription,
          siteDescription,
        })
        const { image, imgWidth, imgHeight } = getPageImage({
          siteUrl,
          defaultShareImage,
          defaultShareImageWidth,
          defaultShareImageHeight,
        })
        const schemaOrgJSONLD = getStructuredDataSchema({
          title,
          pageUrl,
          siteUrl,
          siteTitle,
          siteTitleAlt,
        })
        const ogType = "website"

        return (
          <Helmet>
            {/* General tags */}
            <title>{title}</title>
            <link rel="canonical" href={pageUrl} />
            <meta name="image" content={image} />
            <meta name="description" content={description} />

            {/* Schema.org tags */}
            <script type="application/ld+json">
              {JSON.stringify(schemaOrgJSONLD)}
            </script>

            {/* OpenGraph tags */}
            <meta property="og:title" content={title} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content={imgWidth} />
            <meta property="og:image:height" content={imgHeight} />
            <meta property="og:description" content={description} />

            {/* Twitter Card tags */}
            {/* <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={userTwitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:description" content={description} /> */}
          </Helmet>
        )
      }}
    />
  )
}

export default SEO
