import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Title from "../components/Title"
import Videos from "../components/Videos/Videos"

const VideosPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Videos" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}></StyledHero>
      <Title title="Our" subtitle="Videos" />

      <Videos />
    </Layout>
  )
}

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "banner2.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default VideosPage
