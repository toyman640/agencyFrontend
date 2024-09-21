import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faRectangleList, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import {
  Navbar,
  Nav,
  Button,
  Modal,
  Container,
  Offcanvas,
  Row,
  Col,
} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../redux/user/userSlice';

const Navigation = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // const handleLogout = async () => {
  //   await dispatch(logOutUser());
  //   handleClose();
  //   navigate('/');
  // };

  const handleLogout = async () => {
    const token = user?.data?.token; // Fallback to localStorage if token is not in Redux state
    console.log(token);
    if (token) {
      await dispatch(logOutUser(token));
      localStorage.removeItem('userInfo');
      handleClose();
      navigate('/');
    } else {
      console.error('Token is missing');
    }
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
          <Col lg={2} className="d-none d-lg-flex flex-column SideBar">
            <Offcanvas show={showSidebar} onHide={toggleSidebar} responsive="lg" placement="start">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                <Nav className="flex-column MenuItems">
                  <Nav.Link
                    className={`MenuItem ${location.pathname === '/dashboard' ? 'active' : ''}`}
                    href="/dashboard"
                  >
                    <FontAwesomeIcon icon={faGaugeHigh} className="Icon" />
                    Overview
                  </Nav.Link>
                  {!user?.is_staff && (
                    <Nav.Link
                      className={`MenuItem ${location.pathname === '/company-info' ? 'active' : ''}`}
                      href="/company-info"
                    >
                      <FontAwesomeIcon icon={faRectangleList} />
                      Company Info
                    </Nav.Link>
                  )}
                  {user && user.is_staff && (
                    <>
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
                    </>
                  )}
                </Nav>
                <Button className="LogOut" variant="primary" onClick={handleShow}>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  Log Out
                </Button>
              </Offcanvas.Body>
            </Offcanvas>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure you want to log out?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  No
                </Button>
                <Button variant="danger" onClick={handleLogout}>
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
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
