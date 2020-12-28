import Shopify from 'shopify-api-node';

export const ShopifyAdmin = (): Shopify => {
  return new Shopify({
    shopName: 'tinybox-merch.myshopify.com',
    apiKey: process.env.SHOPIFY_ADMIN_KEY,
    password: process.env.SHOPIFY_ADMIN_PASSWORD,
  });
};
