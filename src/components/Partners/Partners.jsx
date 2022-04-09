import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PartnerItem from './PartnerItem';

function Partners() {
  return (
    <div className="partners-section">
      <Container>
        <Row>
          <PartnerItem imgSrc="/images/partner-one.png" link="/" />
          <PartnerItem imgSrc="/images/partner-one.png" link="/" />
          <PartnerItem imgSrc="/images/partner-two.png" link="/" />
          <PartnerItem imgSrc="/images/partner-three.png" link="/" />
          <PartnerItem imgSrc="/images/partner-four.png" link="/" />
          <PartnerItem imgSrc="/images/partner-five.png" link="/" />
        </Row>
      </Container>
    </div>
  );
}

export default Partners;
