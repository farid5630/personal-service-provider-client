import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Purces = () => {
  const [user, loading, error] = useAuthState(auth);
  const { email, phone } = user;

  const navigate = useNavigate()

  const purchesSubmit = e => {
    e.preventDefault()
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    console.log(email, phone, address);

    navigate("/success");

  }

    return (
      <Container>
        <h1 className="text-primary text-center">This is Purces </h1>
        <Form onSubmit={purchesSubmit} className="w-50 shadow p-3 mx-auto my-4">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control readOnly type="email" name="email" placeholder={email} />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridphone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" name="phone" placeholder={phone? phone: 'Phone Number'} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control type="text" name="address2" placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button className="mb-4" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
};

export default Purces;