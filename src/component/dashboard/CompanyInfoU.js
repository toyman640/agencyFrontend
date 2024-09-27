import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from './Navigation';
import { getAgency } from '../../redux/Agency/agencySlice';

const CompanyInfoU = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const agencyDetails = useSelector((state) => state.agency.userAgency);
  const loading = useSelector((state) => state.agency.loading);
  const error = useSelector((state) => state.agency.error);

  useEffect(() => {
    if (user && !user.is_staff) {
      dispatch(getAgency());
    }
  }, [dispatch, user]);

  let content;

  if (loading) {
    content = <p className="text-center">Loading agency details...</p>;
  } else if (error) {
    content = <p className="text-center text-danger">Error fetching agency details</p>;
  } else if (agencyDetails) {
    content = (
      <>
        <h3 className="text-center">{agencyDetails.agency_name}</h3>
        <p className="Detail">
          <Row>
            <Col lg={3} xs={12} className="text-center text-lg-end">
              <span className="DetailTitle">Registered By</span>
            </Col>
            <Col lg={9} xs={12} className="text-center text-lg-start">
              <span className="DetailInfo">
                {agencyDetails.created_by.email || 'N/A'}
                <hr className="Underline" />
              </span>
            </Col>
          </Row>
        </p>
        <p className="Detail">
          <Row>
            <Col lg={3} xs={12} className="text-center text-lg-end">
              <span className="DetailTitle">Address</span>
            </Col>
            <Col lg={9} xs={12} className="text-center text-lg-start">
              <span className="DetailInfo">
                {agencyDetails.address}
                <hr className="Underline" />
              </span>
            </Col>
          </Row>
        </p>
        <p className="Detail">
          <Row>
            <Col lg={3} xs={12} className="text-center text-lg-end">
              <span className="DetailTitle">Phone Number</span>
            </Col>
            <Col lg={9} xs={12} className="text-center text-lg-start">
              <span className="DetailInfo">
                {agencyDetails.phone_number}
                <hr className="Underline" />
              </span>
            </Col>
          </Row>
        </p>
        <p className="Detail">
          <Row>
            <Col lg={3} xs={12} className="text-center text-lg-end">
              <span className="DetailTitle">Email</span>
            </Col>
            <Col lg={9} xs={12} className="text-center text-lg-start">
              <span className="DetailInfo">
                {agencyDetails.email}
                <hr className="Underline" />
              </span>
            </Col>
          </Row>
        </p>
      </>
    );
  } else {
    content = <p className="text-center">No agency information available.</p>;
  }

  return (
    <Navigation>
      <h3 className="text-center">Agency Details</h3>
      <div className="CompanyInfo mt-5">
        {content}
      </div>
    </Navigation>
  );
};

export default CompanyInfoU;
