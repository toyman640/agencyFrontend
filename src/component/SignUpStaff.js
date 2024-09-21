import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpStaff } from '../redux/user/userSlice';

const SignUpStaff = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { loading, signUpSuccess } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate password
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const newStaff = {
      email,
      name,
      password,
    };

    // Dispatch the sign-up action
    dispatch(signUpStaff(newStaff));
  };

  useEffect(() => {
    if (signUpSuccess) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate('/'); // Redirect to login page
      }, 2000); // 2 seconds delay
    }
  }, [signUpSuccess, navigate]);

  return (
    <div>
      <h2 className="text-center">SignUp Page</h2>
      <Row className="justify-content-center">
        <Col lg={{ span: 8, offset: 1 }} md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
          <Form onSubmit={handleSubmit}>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {showSuccessMessage && <div style={{ color: 'green' }}>Sign-up successful! Redirecting to login...</div>}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="success" type="submit" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SignUpStaff;
