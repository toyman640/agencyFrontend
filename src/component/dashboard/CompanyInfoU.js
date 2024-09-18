import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from './Navigation';

const CompanyInfoU = () => (
  <Navigation>
    <h3 className="text-center">Agency Details</h3>
    <div className="CompanyInfo mt-5">
      <h3 className="text-center">Shore Line Indeustries</h3>
      <p className="Detail">
        <Row>
          <Col lg={3} xs={12} className="text-center text-lg-end">
            <span className="DetailTitle text-end">Registered By</span>
          </Col>
          <Col lg={9} xs={12} className="text-center text-lg-start">
            <span className="DetailInfo col-12 col-md-6">
              John Doe
              <hr className="Underline" />
            </span>
          </Col>
        </Row>
      </p>
      <p className="Detail">
        <Row>
          <Col lg={3} xs={12} className="text-center text-lg-end">
            <span className="DetailTitle text-end">Address</span>
          </Col>
          <Col lg={9} xs={12} className="text-center text-lg-start">
            <span className="DetailInfo">
              1, boulerverd way allen ikeja Lagos State.
              <hr className="Underline" />
            </span>
          </Col>
        </Row>
      </p>
      <p className="Detail">
        <Row>
          <Col lg={3} xs={12} className="text-center text-lg-end">
            <span className="DetailTitle text-end">Phone Number</span>
          </Col>
          <Col lg={9} xs={12} className="text-center text-lg-start">
            <span className="DetailInfo">
              08020927422
              <hr className="Underline" />
            </span>
          </Col>
        </Row>
      </p>
      <p className="Detail">
        <Row>
          <Col lg={3} xs={12} className="text-center text-lg-end">
            <span className="DetailTitle text-right text-end">Email</span>
          </Col>
          <Col lg={9} xs={12} className="text-center text-lg-start">
            <span className="DetailInfo">
              info@shoreline.com
              <hr className="Underline" />
            </span>
          </Col>
        </Row>
      </p>
      <p className="Detail">
        <Row>
          <Col lg={3} xs={12} className="text-center text-lg-end">
            <span className="DetailTitle text-end">Onbording date</span>
          </Col>
          <Col lg={9} xs={12} className="text-center text-lg-start">
            <span className="DetailInfo">
              22-05-2001
              <hr className="Underline" />
            </span>
          </Col>
        </Row>
      </p>
    </div>
  </Navigation>
);

export default CompanyInfoU;
