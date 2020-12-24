import Client from 'shopify-buy';

const useShopify = () => {
  return Client.buildClient({
    domain: 'tinybox-merch.myshopify.com',
    storefrontAccessToken: process.env.NEXT_PUBLIC_STOREFRONT_TOKEN,
  });
};

export default useShopify;
