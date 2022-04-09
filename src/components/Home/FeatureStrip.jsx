import {
  ContactMail as VendorIcon,
  Headset as SupportIcon,
  LocalShipping as ShippingIcon,
  Security as SecurityIcon
} from '@mui/icons-material';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function FeatureStrip() {
  return (
    <div className="feature-strip">
      <Container>
        <Row>
          <Col lg={3} md={6} sm={2}>
            <div className="feature-column py-2">
              <div className="feature-icon">
                <ShippingIcon />
              </div>
              <div className="feature-text">
                <h3>Free Shipping</h3>
                <p>For over orders 50$</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="feature-column py-2">
              <div className="feature-icon">
                <SupportIcon />
              </div>
              <div className="feature-text">
                <h3>Support 24/7</h3>
                <p>Contact us anytime</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="feature-column ">
              <div className="feature-icon">
                <SecurityIcon />
              </div>
              <div className="feature-text">
                <h3>100% Safety</h3>
                <p>Only secure payments</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="feature-column py-2">
              <div className="feature-icon">
                <VendorIcon />
              </div>
              <div className="feature-text">
                <h3>Vendor</h3>
                <p>Become Dropship</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default FeatureStrip;
