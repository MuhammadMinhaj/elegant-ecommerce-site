import Layout from '../components/Layout/Layout';
import AllCategories from '../components/Shop/AllCategories/AllCategories';
import DiscountOffer from '../components/Shop/DiscountOffer/DiscountOffer';
import DiscountOnAllProduct from '../components/Shop/DiscountOffer/DiscountOnAllProduct';
import ElectronicCategory from '../components/Shop/ElectronicCategory/ElectronicCategory';
import PopularProduct from '../components/Shop/PopularProduct/PopularProduct';
import Slider from '../components/Shop/Slider/Container';
import TodayDeals from '../components/Shop/TodayDeals/TodayDeals';

function ShopPage() {
  return (
    <Layout>
      <Slider />
      <AllCategories />
      <TodayDeals />
      <PopularProduct title="MOST POPULAR FOR MAN" leftBannerImgSrc="/MostPopularForMan/MostPopularForMan.jpg" bannerTxtTitle="All Product Discount - 30%" />
      <PopularProduct title="MOST POPULAR FOR WOMEN" leftBannerImgSrc="/MostPopularForMan/MostPopularForWomen.jpg" bannerTxtTitle="Discount On Summer Collection" />
      <ElectronicCategory />
      <DiscountOffer />
      <DiscountOnAllProduct />
      <DiscountOffer />

    </Layout>
  );
}
export default ShopPage;
