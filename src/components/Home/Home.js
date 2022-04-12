import Partners from '../Partners/Partners';
import Slider from '../Slider/Slider';
// import BestSellers from '../Store/BestSellers/BestSellers';
import MostRecentProduct from '../Store/MostRecentProduct/MostRecentProduct';
import TopCategory from '../TopCategory/TopCategory';
import BestSeller from './BestSeller/BestSeller';
import DropShippingWork from './DropShippingWork';
import FeaturedProduct from './FeaturedProduct';
import FeatureStrip from './FeatureStrip/FeatureStrip';

function Home() {
  return (
    <div className="homepage-main">
      <Slider />
      <FeatureStrip />

      <TopCategory />
      {/* <div className="featured-section">
        <Container>
          <Row>
            <Col md={12}>
              <div className="featured-column">
                <PrevFeaturedProduct />
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
      <FeaturedProduct title="Featured Products" />

      <DropShippingWork />
      <BestSeller />
      {/* <BestSellers /> */}
      <Partners />
      <MostRecentProduct />
    </div>
  );
}

export default Home;
