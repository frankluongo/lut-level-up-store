import React from "react"

import Layout from "../components/layout"
import Product from "../components/product"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <Product />
        <Product />
        <Product />
      </section>
    </Layout>
  )
}

export default IndexPage
