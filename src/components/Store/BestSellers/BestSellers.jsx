import React from 'react';
import {
  Col, Container, Nav, Row, Tab
} from 'react-bootstrap';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';

function BestSellers() {
  return (
    <div className="featured-section tabs-section">
      <Container>
        <Row>
          <Col md={12} className="tabs-column">
            <Tab.Container id="left-tabs-example" defaultActiveKey="firstTab">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="firstTab">
                    <div className="tab-text">Best Sellers</div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="secondTab">
                    <div className="tab-text">New Arrivals</div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="thirdTab">
                    <div className="tab-text">Best Ratings</div>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="firstTab">
                  <div className="featured-column">

                    <FeaturedProduct title="Best Sellers" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="secondTab">
                  <div className="featured-column">
                    <FeaturedProduct title="New Arrivals" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="thirdTab">
                  <div className="featured-column">
                    <FeaturedProduct title="Best Ratings" />
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default BestSellers;
