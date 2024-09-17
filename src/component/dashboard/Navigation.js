import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Navigation = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
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
      <Container>
        {children}
      </Container>
    </div>
  );
};

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navigation;
