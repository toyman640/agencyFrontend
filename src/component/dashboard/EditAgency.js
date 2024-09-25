import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';
import { editAgency, getOneAgencyById } from '../../redux/Agency/agencySlice';

const EditAgency = () => {
  const { agencyId } = useParams();
  console.log(agencyId);
  const dispatch = useDispatch();
  const { userAgency, loading } = useSelector((state) => state.agency);

  const [updatedData, setUpdatedData] = useState({
    agency_name: '',
    address: '',
    phone_number: '',
    email: '',
  });

  useEffect(() => {
    dispatch(getOneAgencyById(agencyId));
  }, [dispatch, agencyId]);

  useEffect(() => {
    if (userAgency) {
      setUpdatedData({
        agency_name: userAgency.agency_name || '',
        address: userAgency.address || '',
        phone_number: userAgency.phone_number || '',
        email: userAgency.email || '',
      });
    }
  }, [userAgency]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editAgency({ agencyId, updatedData }));
  };

  return (
    <Navigation>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Agency Name</Form.Label>
              <Form.Control type="text" placeholder="xyz limited" name="agency_name" value={updatedData.agency_name} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="address" name="address" value={updatedData.address} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" placeholder="08023..." name="phone_number" value={updatedData.phone_number} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Company Mail</Form.Label>
              <Form.Control type="email" placeholder="xyz@mail.com" name="email" value={updatedData.email} onChange={handleInputChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        )}
      </div>
    </Navigation>
  );
};

// EditAgency.propTypes = {
//   agencyId: PropTypes.string.isRequired,
// };

export default EditAgency;
