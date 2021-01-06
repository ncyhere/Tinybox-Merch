import Head from 'next/head';
import Product from '@components/product';
import { ShopifyAdmin } from '@utils/shopifyAdmin';

const Index = ({ products }) => {
  return (
    <>
      <Head>
        <title>Home - Tinybox Merch</title>
        <meta property="og:title" content="Home - Tinybox Merch" />
        <meta
          name="description"
          content="Welcome to the Tinybox Merch Store! Support Tinybox by picking up a hoodie or something!."
        ></meta>
        <meta
          property="og:description"
          content="Welcome to the Tinybox Merch Store! Support Tinybox by picking up a hoodie or something!"
        ></meta>
      </Head>
      <main className="grid max-w-5xl gap-32 px-6 mt-48 md:px-0">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </main>
    </>
  );
};

export async function getStaticProps() {
  const shopify = ShopifyAdmin();
  const data = await shopify.product.list({ status: 'active' });
  return {
    props: {
      products: data,
    },
  };
}

export default Index;
