import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Row,
  Col,
} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="AllCover">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="Logo">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleSidebar} />
        </Container>
      </Navbar>

      <Container fluid className="Container">
        <Row>
          {/* Sidebar - takes 30% width */}
          <Col lg={2} className="d-none d-lg-block SideBar">
            <Offcanvas show={showSidebar} onHide={toggleSidebar} responsive="lg" placement="start">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-column MenuItems">
                  <Nav.Link
                    className={`MenuItem ${location.pathname === '/dashboard' ? 'active' : ''}`}
                    href="/dashboard"
                  >
                    <FontAwesomeIcon icon={faGaugeHigh} className="Icon" />
                    Overview
                  </Nav.Link>
                  <Nav.Link
                    className={`MenuItem ${location.pathname === '/company-info' ? 'active' : ''}`}
                    href="/company-info"
                  >
                    <FontAwesomeIcon icon={faRectangleList} />
                    Company Info
                  </Nav.Link>
                  <Nav.Link
                    className={`MenuItem ${location.pathname === '/agency-info' ? 'active' : ''}`}
                    href="/agency-info"
                  >
                    <FontAwesomeIcon icon={faRectangleList} />
                    Agencies
                  </Nav.Link>
                  <Nav.Link
                    className={`MenuItem ${location.pathname === '/agency-details' ? 'active' : ''}`}
                    href="/agency-details"
                  >
                    <FontAwesomeIcon icon={faRectangleList} />
                    Agency Info
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>

          {/* Main Content - takes 70% width */}
          <Col lg={10} className="MainContent mt-3">
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navigation;
