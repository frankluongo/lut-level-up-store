import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SuccessPage = () => {

  return (
    <Layout>
      <SEO title="Success" />
      <h1>Success!</h1>
      <section>
        <article>
          <h3>Congrats on your order!</h3>
          <p>Thanks for placing an order with us</p>
        </article>
      </section>
    </Layout>
  )
}

export default SuccessPage
