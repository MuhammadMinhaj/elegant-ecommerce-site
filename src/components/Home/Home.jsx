import Partners from '../Partners/Partners';
import Slider from '../Slider/Slider';
// import BestSellers from '../Store/BestSellers/BestSellers';
// import MostRecentProduct from '../Store/MostRecentProduct/MostRecentProduct';
import TopCategory from '../TopCategory/TopCategory';
import BecomeASeller from './BecomeASeller/BecomeASeller';
// import BestSeller from './BestSeller/BestSeller';
// import BussinessToBussiness from './BussinessToBussiness/BussinessToBussiness';
import ClientTestimonials from './ClientTestimonials/ClientTestimonials';
import DropShippingWork from './DropshippingWork/DropshippingWork';
// import FeaturedProduct from './FeaturedProduct';
import FeatureStrip from './FeatureStrip/FeatureStrip';
import ProductsLavel from './ProductsLavel/ProductsLavel';

function Home() {
  return (
    <div className="homepage-main">
      <Slider />
      <FeatureStrip />

      <TopCategory />
      <ProductsLavel />
      <DropShippingWork />
      <BecomeASeller />
      <ClientTestimonials />
      <Partners />

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
      {/* <FeaturedProduct title="Featured Products" /> */}

      {/* <BestSeller /> */}
      {/* <BussinessToBussiness /> */}
      {/* <BestSellers /> */}

      {/* <MostRecentProduct /> */}
    </div>
  );
}

export default Home;
