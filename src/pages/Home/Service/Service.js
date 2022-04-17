import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, price, images } = service;
    console.log(service)
    
    return (
      <Col className="g-4" xs={12} sm={6} md={4} xl={3}>
        <Card
          border="secondary"
          className="w-100 h-100"
          style={{ width: "18rem" }}
        >
          <Card.Img  variant="top" src={images} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <p>price: ${price}</p>
          </Card.Body>
          <Card.Footer className="border-0 bg-primary text-center">
            <Link to="" className='text-light text-decoration-none'>Explore the Course</Link>
          </Card.Footer>
        </Card>
      </Col>
    );
};

export default Service;