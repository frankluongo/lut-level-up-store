import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CancelPage = () => {

  return (
    <Layout>
      <SEO title="Cancel" />
      <h1>Bummer!</h1>
      <section>
        <article>
          <h3>Oh no! Something went wrong</h3>
          <p>Please contact our customer service team for more details</p>
        </article>
      </section>
    </Layout>
  )
}

export default CancelPage
