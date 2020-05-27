import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Title from "../components/Title"
// import newsLetters from "../data/news-letters.yaml"
import Newsletters from "../components/Newsletters/Newsletters"

const SponsorsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="News Letters" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}></StyledHero>
      <Title title="News" subtitle="Letters" />

      {/* {newsLetters.map(newsLetter => (
        <div key={newsLetter.title}>
          <ul>
            <li>
              <a href={newsLetter.url} target="_blank" rel="noopener">
                {newsLetter.title}
              </a>
            </li>
          </ul>
        </div>
      ))} */}
      <Newsletters />
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
export default SponsorsPage
