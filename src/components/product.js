import React, { useState } from "react"

const Product = () => {
  const stripe = window.Stripe(process.env.GATSBY_STRIPE_PUBLIC_API);
  const [sku, setSku] = useState('sku_FaO3p0TGu4gMNN')

  const placeOrder = () => {
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
    <article>
      <img src="https://picsum.photos/340/340" alt="Level Up T-Shirt"/>
      <h3>Level Up T-Shirt</h3>
      <select name="Shirt Size" id="shirt-size" value={sku} onChange={(e) => {setSku(e.target.value)}}>
        <option value="sku_FaO3p0TGu4gMNN">Small</option>
        <option value="sku_FaO34nona2LOYy">Medium</option>
        <option value="sku_FaO3oiULGlRdCD">Large</option>
      </select>
      <button
        onClick={placeOrder}
      >Buy Now</button>
    </article>
  )
}

export default Product
