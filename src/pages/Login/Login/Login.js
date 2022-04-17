import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Login = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col sm={12} md={6}>
          <button className="btn btn-primary d-block mb-4">Sign in Google</button>
          <button className="btn btn-primary d-block">Sign in Github</button>
        </Col>
        <Col sm={12} md={6}>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" placeholder="your email" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2"></Form.Label>
              <Col sm="10">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
