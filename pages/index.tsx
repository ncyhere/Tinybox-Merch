import Product from '@components/product';
import Cart from '@components/cart';
import useShopify from '@hooks/useShopify';
import { useEffect, useState } from 'react';

const Index = () => {
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
      <nav className="fixed z-10 flex items-center justify-between w-full grid-cols-3 px-2 py-4 bg-white shadow">
        <a href="#" className="text-xl font-bold justify-self-center">
          Tinybox Merch
        </a>
        <Cart />
      </nav>
      <main className="grid max-w-5xl gap-32 px-6 mt-24 md:px-0">
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
