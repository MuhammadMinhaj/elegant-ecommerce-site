import React from 'react';
import {
  Col
} from 'react-bootstrap';

function PartnerItem({ imgSrc, link }) {
  return (
    <Col sm={6} md={2}>
      <a className="partner-item" href={link || '#'}>
        <img
          src={imgSrc}
          className="img-fluid"
          alt="partner-item"
        />
      </a>
    </Col>

  );
}

export default PartnerItem;
