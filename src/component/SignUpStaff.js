import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap'; // Import Row and Col for grid layout

const SignUpStaff = () => (
  <div>
    <h2 className="text-center">SignUp Page</h2>
    <Row className="justify-content-center">
      <Col lg={{ span: 8, offset: 1 }} md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="success" type="submit">
            Register
          </Button>
        </Form>
      </Col>
    </Row>
  </div>
);

export default SignUpStaff;
