import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Row,
  Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Navigation = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="AllCover">
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Navigation</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleSidebar} />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard">Overview</Nav.Link>
              <Nav.Link href="/company-info">Company Info</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Row>
          {/* Sidebar - takes 30% width */}
          <Col lg={2} className="SideBar">
            <Offcanvas show={showSidebar} onHide={toggleSidebar} responsive="lg" placement="start">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-column">
                  <Nav.Link href="/dashboard">Overview</Nav.Link>
                  <Nav.Link href="/company-info">Company Info</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>

          {/* Main Content - takes 70% width */}
          <Col lg={10} className="main-content">
            {children}
          </Col>
        </Row>
      </Container>

      {/* <Offcanvas show={showSidebar} onHide={toggleSidebar} responsive="lg" placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="SideBar">
          <Nav className="flex-column">
            <Nav.Link href="/dashboard">Overview</Nav.Link>
            <Nav.Link href="/company-info">Company Info</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      <Container>
        {children}
      </Container> */}
    </div>
  );
};

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navigation;
