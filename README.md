# Tinybox Merch Store

the Tinybox merch store- built with Tailwindcss, Next.js and Shopify!
Would also be great for getting a 1-product store up and running on Shopify quickly

## Setup Your Own Store

If you want to use this to setup your own headless Shopify store feel free:

1. Create a custom app in your Shopify store with the following settings:
   - Admin API: Products Read
   - Storefront API: Read Products, variants, and collections
   - Storefront API: Read and modify customer details
   - Storefront API: Read and modify checkouts
2. Fork or download this repo
3. Fill in the `sample.env` file in the repo's root folder with info from your Shopify store, and rename it to `.env.local`
4. Run `npm install` and then `npm run dev` to make sure the site's working on your machine
5. Make changes as you see fit across the site (i.e in the header, footer, etc)
6. Deploy anywhere! I use netlify, but you should be able to deploy this on any VPS / hosting site that supports next.js

## Feature List

- **Server Side Rendering + Client Side Rehydration**: The Shopify Admin API is used serverside to pull in general product info, then more time-sensitive info, like product availability, is pulled in client side. This allows you to utilize CDN-level caching, and still ensure data is up-to-date.
- **One-page Layout**: A simple one-page layout that lists all products you make available to the custom app that you got your credentials from.
- **Extnsibility**: Next.js + the Shopify API's make extending this site super easy. You could connect the site to a CMS for custom content / marketing pages, add collection's, add product pages, integrate Shopify's blog posts? etc, etc.
