import Client from 'shopify-buy';

const useShopify = () => {
  return Client.buildClient({
    domain: process.env.NEXT_PUBLIC_STROREFRONT_URL,
    storefrontAccessToken: process.env.NEXT_PUBLIC_STOREFRONT_TOKEN,
  });
};

export default useShopify;
