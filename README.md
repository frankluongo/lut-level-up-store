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

## 06: Adding Skus and Variants

- In Stripe, create variant SKU's for a product
- Use a select form to map sku's to product selection
- Move Product to its own component for reusability

## 07: Importing Products From Stripe

Add Stripe as a data source and Dot Env to use Variables

```bash
yarn add gatsby-source-stripe
yarn add dotenv
```

- Add Stripe as a Data Source
- Use DotEnv to hide Stripe's Secret Key
- Create a query of our products

```graphql
{
  allStripeSku {
    edges {
      node {
        id
        attributes {
          name
        }
        product {
          name
          id
        }
        price
      }
    }
  }
}
```

## 08: Multiple Products

- Using stripe as a data source, map over products and skus and pass that data into the product component
