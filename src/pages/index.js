import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const stripe = window.Stripe(process.env.GATSBY_STRIPE_PUBLIC_API);

  const placeOrder = (sku) => {
    stripe.redirectToCheckout({
      items: [
        {
          sku: sku,
          quantity: 1
        }
      ],
      successUrl: 'http://localhost:8000/success',
      cancelUrl: 'http://localhost:8000/cancel'
    });
  }


  return (
    <Layout>
      <SEO title="Home" />
      <h1>Level Up Store</h1>
      <section>
        <article>
          <img src="https://picsum.photos/340/340" alt="Level Up T-Shirt"/>
          <h3>Level Up T-Shirt</h3>
          <button
            onClick={() => {placeOrder('sku_Fa0wTOCb6mIHdB'); }}
          >Buy Now</button>
        </article>
      </section>
    </Layout>
  )
}

export default IndexPage
