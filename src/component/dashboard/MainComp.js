import React from 'react';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from './SideBar';
import DashContent from './DashContent';

const MainComp = () => (
  <div>
    <Row>
      <Col md={3} lg={2}>
        <SideBar />
      </Col>
      <Col md={9} lg={10}>
        <DashContent />
      </Col>
    </Row>
  </div>
);

export default MainComp;
