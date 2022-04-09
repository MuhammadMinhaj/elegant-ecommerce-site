import { Col, Container, Row } from 'react-bootstrap';
import TopCategory from '../Categories/TopCategory';
import DropShippingWork from '../DropShippingWork/DropShippingWork';
import Slider from '../Slider/Slider';
import BestSellers from '../Store/BestSellers/BestSellers';
import FeaturedProduct from '../Store/FeaturedProduct/FeaturedProduct';
import FeatureStrip from './FeatureStrip';

function Home() {
  return (
    <div className="homepage-main">
      <Slider />
      <FeatureStrip />
      <TopCategory />

      <div className="featured-section">
        <Container>
          <Row>
            <Col md={12}>
              <div className="featured-column">
                <FeaturedProduct title="Featured Products" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <DropShippingWork />
      <BestSellers />
    </div>
  );
}

export default Home;
