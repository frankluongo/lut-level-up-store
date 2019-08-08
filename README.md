# Gatsby eCommerce

## 02: Setting Up Stripe

- Created an account on the [Stripe Website](https://stripe.com/)
- Created a "Level Up Store" sub-account
- Went to Settings > Stripe Apps > Checkout
- Enabled "Checkout Client Integration"
- Created a test product

## 03: Connecting Stripe to Gatsby

```bash
yarn add gatsby-plugin-stripe
```

## 04: Stripe Checkout

Stripe Test Credit Card: 4242424242424242

## 05: Redirects After a Completed Order

- Move Purchasing action into it's own function
- Create a button to handle purchase
- Create success and cancellation pages for redirects
