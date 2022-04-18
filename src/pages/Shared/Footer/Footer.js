import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
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
          <Col sm={12} md={6}>
            This is footer
          </Col>
        </Row>
        <p>Copyright &copy; {year}</p>
      </Container>
    );
};

export default Footer;