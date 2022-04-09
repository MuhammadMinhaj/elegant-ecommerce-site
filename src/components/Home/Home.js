import { Col, Container, Row } from 'react-bootstrap';
import TopCategory from '../Categories/TopCategory';
import FeaturedProduct from '../Product/FeaturedProduct/FeaturedProduct';
import Slider from '../Slider/Slider';
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

    </div>
  );
}

export default Home;
