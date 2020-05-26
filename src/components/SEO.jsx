import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
      }
    }
  }
`

const SEO = props => {
  const data = useStaticQuery(getData)
  const { siteTitle, siteDesc } = data.site.siteMetadata

  return (
    <Helmet>
      <title>{`${props.title} | ${siteTitle}`}</title>
      <meta name="description" content={props.description || siteDesc} />
    </Helmet>
  )
}

export default SEO
