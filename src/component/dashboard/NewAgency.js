import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';
import { newAgency } from '../../redux/Agency/agencySlice';

const NewAgency = () => {
  const dispatch = useDispatch();

  const [newData, setNewData] = useState({
    agency_name: '',
    address: '',
    phone_number: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newAgency(newData));
  };

  return (
    <Navigation>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Agency Name</Form.Label>
            <Form.Control type="text" placeholder="xyz limited" name="agency_name" value={newData.agency_name} onChange={handleInputChange} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="address" name="address" value={newData.address} onChange={handleInputChange} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" placeholder="08023..." name="phone_number" value={newData.phone_number} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Company Mail</Form.Label>
            <Form.Control type="email" placeholder="xyz@mail.com" name="email" value={newData.email} onChange={handleInputChange} required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create Agency
          </Button>
        </Form>
      </div>
    </Navigation>
  );
};

export default NewAgency;
