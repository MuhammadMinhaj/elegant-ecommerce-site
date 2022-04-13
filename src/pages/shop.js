import Advertisement from '../components/Advertisement/Advertisement';
import BestSellers from '../components/Home/BestSeller/BestSeller';
import FeaturedProduct from '../components/Home/FeaturedProduct';
import Layout from '../components/Layout/Layout';
import AllCategories from '../components/Shop/AllCategories/Categories';
// import BuildingTools from '../components/Shop/BuildingTools/BuildingTools';
// import DiscountOffer from '../components/Shop/DiscountOffer/DiscountOffer';
// import DiscountOnAllProduct from '../components/Shop/DiscountOffer/DiscountOnAllProduct';
// import ElectronicCategory from '../components/Shop/ElectronicCategory/ElectronicCategory';
// import PopularProduct from '../components/Shop/PopularProduct/PopularProduct';
import Slider from '../components/Shop/Slider/Slider';
// import Slider from '../components/Shop/Slider/Container';
// import TodayDeals from '../components/Shop/TodayDeals/TodayDeals';
import TrendingProduct from '../components/Shop/TrendingProducts/TrendingProduct';

function ShopPage() {
  return (
    <Layout>
      <Slider />
      <TrendingProduct />
      <AllCategories />
      <FeaturedProduct />
      <Advertisement />
      <BestSellers />

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
