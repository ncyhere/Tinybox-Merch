import Product from '@components/product';
import Cart from '@components/cart';
import useShopify from '@hooks/useShopify';
import { useEffect, useState } from 'react';

const Index = ({}) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const dataFetcher = async () => {
      const shopifyClient = useShopify();
      const products = await shopifyClient.product.fetchAll();
      setProducts(products);
    };
    dataFetcher();
  }, []);

  return (
    <div className="relative grid w-full min-h-screen grid-cols-1 place-items-center">
      <Cart />
      <header className="grid h-28 place-items-center">
        <h1 className="text-xl font-bold text-gray-800">Tinybox Merch</h1>
      </header>
      <main className="grid max-w-5xl gap-32 px-6 md:px-0">
        {products ? (
          products.map((product) => {
            return <Product key={product.id} product={product} />;
          })
        ) : (
          <p>loading products...</p>
        )}
      </main>
      <footer className="grid text-sm text-gray-400 h-28 place-items-center">
        Tinybox Software Development. 2020
      </footer>
    </div>
  );
};

export default Index;
