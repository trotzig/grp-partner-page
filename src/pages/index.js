import React from "react"
import { Link } from "gatsby"

// Data
import Data from "../data/partners.json"

// Components
import Button from "../components/Button/index"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  // Destructuring JSON data
  const { partners } = Data

  // Start of a filter function.
  const filter = (data, query1) => {
    const queryTrue = []
    const queryFalse = []

    data.map(item => {
      item.workingRegion.includes(`${query1}`)
        ? queryTrue.push(item)
        : queryFalse.push(item)
    })
    console.log(queryTrue, queryFalse)
  }

  // handeClick now prints all partner to console
  const handleClick = () => {
    filter(partners, "Europe")
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h2>Hey, made a pull request from the command line! </h2>
      <h2>
        Try putting something here just for git practice if you need it! And if
        i think you have behaved well i will merge it!
      </h2>
    </Layout>
  )
}

export default IndexPage
