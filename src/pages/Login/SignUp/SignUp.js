import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUp = () => {
const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);



const handleSignUpSibmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    
    createUserWithEmailAndPassword(name, email, password)
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col sm={12} md={6}>
          <button className="btn btn-primary d-block mb-4">
            Sign in Google
          </button>
          <button className="btn btn-primary d-block">Sign in Github</button>
        </Col>
        <Col sm={12} md={6}>
          <Form onSubmit={handleSignUpSibmit}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" name="name" placeholder="your Name" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" name="email" placeholder="your email" />
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
                <Form.Control type="password" name="password" placeholder="Password" />
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

export default SignUp;
