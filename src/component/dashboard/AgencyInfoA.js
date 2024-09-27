import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';
import { getOneAgencyById } from '../../redux/Agency/agencySlice';

const AgencyInfoA = () => {
  const { agencyId } = useParams();
  const dispatch = useDispatch();
  const userAgency = useSelector((state) => state.agency.userAgency);

  useEffect(() => {
    dispatch(getOneAgencyById(agencyId));
  }, [dispatch, agencyId]);

  return (
    <Navigation>
      <h3 className="text-center">Agency Details</h3>
      <Link to="/agency-info">
        <Button variant="warning" size="sm">
          Back
        </Button>
      </Link>
      <div className="CompanyInfo mt-5">
        <h3 className="text-center">{ userAgency.agency_name }</h3>
        <p className="Detail">
          <Row>
            <Col lg={3} xs={12} className="text-center text-lg-end">
              <span className="DetailTitle text-end">Registered By</span>
            </Col>
            <Col lg={9} xs={12} className="text-center text-lg-start">
              <span className="DetailInfo col-12 col-md-6">
                {userAgency.created_by && userAgency.created_by.email
                  ? `${userAgency.created_by.email}`
                  : 'Loading...'}
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
                { userAgency.address }
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
                {userAgency.email}
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
        <p className="Detail">
          <Row>
            <Col lg={3} xs={12} className="text-center text-lg-end">
              <span className="DetailTitle text-end">Account Status</span>
            </Col>
            <Col lg={9} xs={12} className="text-center text-lg-start">
              <span className="DetailInfo">
                <Badge bg="success">Active</Badge>
              </span>
            </Col>
          </Row>
        </p>
      </div>
    </Navigation>
  );
};

export default AgencyInfoA;
