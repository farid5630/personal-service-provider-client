import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
      <div className="bg-secondary text-white">
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <div className="w-75 mt-4 mx-auto">
                <h4>Training Industry</h4>
                <h6>
                  The most trusted source of information on the business of
                  learning.
                </h6>
                <p>
                  Scaling for Growth: How Sales Training Can Support Business
                  Transformation Corporate sales Traning programs, Developing
                  Sales Professionals
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} className="">
              <div className="w-75 mx-auto">
                <div className="">
                  <img
                    src="https://i.ibb.co/KVJHNbG/apple-image.png"
                    className="w-50 d-block my-4"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/bbC92t3/google-image.png"
                    className="w-50 d-block "
                    alt=""
                  />
                </div>
              </div>
            </Col>
          </Row>
          <p className="text-center pb-3">
            All Right Reserved Copyright &copy; {year}
          </p>
        </Container>
      </div>
    );
};

export default Footer;