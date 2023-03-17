This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Feature

[Error Handel]()
[NotiFication Panel]()
[Redux Toolkit]()

## Learn More

- Browse the catalog on a product listing page
- Each card should have the image, name and price.
- Search using free text which is a combination of one or more of the below attributes
  Name
  Colour
  Type
  Eg. green polo
- Filter for t-shirts using specific attributes
  Gender
  Colour
  Price range
  Type
- Add one or more t-shirts to the shopping cart
- View the shopping cart by clicking the shopping cart icon
- Increase quantity or delete items from the shopping cart
- Display the total amount in the shopping cart

[Rules]

- Every t-shirt type has a limited quantity. If the customer tries to order more than the available quantity, an error message should appear.

- Filter can be applied by itself or on top of the search results.

- Filters and Search need not be retained on navigation between pages, But the items in the cart should be retained.

- The mockup provided is only a sample so that you have an indication of what is expected from you. You could choose to go with a completely different user experience. But you will need to ensure that all requirements mentioned in the problem are covered & there should be navigation between screens.

- All features (search, filter, add to cart etc) should be handled on the client side.

- There are no API's provided for these features.

- There is no need to handle pagination.

- There is no need to implement user registration / login.

## Deploy on github

[ProjectLink👉]

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
