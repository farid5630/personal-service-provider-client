import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SignGoogle from "../SignGoogle/SignGoogle";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  if (loading ) {
    return <p>Loading........</p>
  }

  const handleSignEmailandPass = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await signInWithEmailAndPassword(email, password);
    navigate(from, { replace: true });
  };

  return (
    <Container>
      <h1 className="text-primary text-center mt-4">Login form</h1>
      <Row className="mt-3">
        <Col sm={12} md={6} className="">
          <img
            src="https://i.ibb.co/7NQyVQb/images.jpg"
            className="w-100 h-100"
            alt="Sign up images"
          />
        </Col>
        <Col sm={12} md={6} className="shadow-lg p-4">
          <Form onSubmit={handleSignEmailandPass}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="your email"
                />
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
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                />
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
                  Login
                </Button>
              </Col>
            </Form.Group>
            <small>
              New here? Don't Have an Account?{" "}
              <Link to="/signup">Please Sign up</Link>
            </small>
          </Form>
          <div className="d-flex align-items-center justify-content-center my-3">
            <div>------------------</div>
            <p className="m-0 px-2">Or</p>
            <div>------------------</div>
          </div>
          <div className="d-flex justify-content-center">
            <SignGoogle></SignGoogle>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
