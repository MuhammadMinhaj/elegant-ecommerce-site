import Layout from '../components/Layout/Layout';
import AllCategories from '../components/Shop/AllCategories/AllCategories';
import Slider from '../components/Shop/Slider/Container';
import TodayDeals from '../components/Shop/TodayDeals/TodayDeals';

function ShopPage() {
  return (
    <Layout>
      <Slider />
      <AllCategories />
      <TodayDeals />
    </Layout>
  );
}
export default ShopPage;
