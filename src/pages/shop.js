// import Advertisement from '../components/Advertisement/Advertisement';
import Layout from '../components/Layout/Layout';
// import AllCategories from '../components/Shop/AllCategories/Categories';
import Brands from '../components/Shop/Brands/Brands';
// import Slider from '../components/Shop/Slider/Container';
// import TodayDeals from '../components/Shop/TodayDeals/TodayDeals';
import Products from '../components/Shop/Products/Products';
// import FeaturedProduct from '../components/Shop/FeaturedProduct';
// import ProductsList from '../components/Shop/Products/ProductsList';
// import BuildingTools from '../components/Shop/BuildingTools/BuildingTools';
// import DiscountOffer from '../components/Shop/DiscountOffer/DiscountOffer';
// import DiscountOnAllProduct from '../components/Shop/DiscountOffer/DiscountOnAllProduct';
// import ElectronicCategory from '../components/Shop/ElectronicCategory/ElectronicCategory';
// import PopularProduct from '../components/Shop/PopularProduct/PopularProduct';
import Slider from '../components/Shop/Slider/Slider';
import TrendingProduct from '../components/Shop/TrendingProducts/TrendingProduct';

function ShopPage() {
  return (
    <Layout>
      <Slider />
      <TrendingProduct />
      <Products />
      {/* <AllCategories />
      <FeaturedProduct title="Today deals" />
      <Advertisement />
      <ProductsList title="Fashion & Accessories" />
      <Advertisement />
      <ProductsList title="Electronics" /> */}
      <Brands />
      {/* <TodayDeals />
      <PopularProduct title="MOST POPULAR FOR MAN" leftBannerImgSrc="/MostPopularForMan/MostPopularForMan.jpg" bannerTxtTitle="All Product Discount - 30%" />
      <PopularProduct title="MOST POPULAR FOR WOMEN" leftBannerImgSrc="/MostPopularForMan/MostPopularForWomen.jpg" bannerTxtTitle="Discount On Summer Collection" />
      <ElectronicCategory />
      <DiscountOffer />
      <DiscountOnAllProduct />
      <DiscountOffer />
      <BuildingTools /> */}
    </Layout>
  );
}
export default ShopPage;
