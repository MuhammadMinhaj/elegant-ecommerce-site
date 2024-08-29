import products from '@/data/products.json';
import dynamic from 'next/dynamic';
import Advertisement from './_components/advertisement';
import Brands from './_components/brands';
import ProductLayout from './_components/products/product-layout';
import Products from './_components/products/products';
import Slider from './_components/slider';

const TrendingProduct = dynamic(
  () => import('./_components/trending-products').then((mod) => mod.default),
  {
    ssr: false
  }
);

function ShopPage() {
  return (
    <>
      <Slider />
      <TrendingProduct />
      <Products />
      <Advertisement />
      <ProductLayout title="Fashion & Accessories" products={products} />
      <Advertisement isFull />
      <ProductLayout title="Best Selling Electronics" products={products} />
      <Advertisement />
      <Brands />
    </>
  );
}
export default ShopPage;
