import Product from '@components/product';
import useShopify from '@hooks/useShopify';
import { useEffect, useState } from 'react';

const Index = ({}) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const dataFetcher = async () => {
      const shopifyClient = useShopify();
      const product = await shopifyClient.product.fetchByHandle('logo-hoodie');
      setProduct(product);
    };
    dataFetcher();
  });

  return (
    <div className="grid grid-cols-1 place-items-center w-full min-h-screen">
      <header>
        <h1 className="text-xl text-gray-800 font-bold">Tinybox Merch</h1>
      </header>
      <main className="max-w-5xl">
        {product ? <Product product={product} /> : <p>Loading product...</p>}
      </main>
      <footer className="text-sm text-gray-400">
        Tinybox Software Development. 2020
      </footer>
    </div>
  );
};

export default Index;
