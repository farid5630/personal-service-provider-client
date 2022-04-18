import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServies';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services] = useServices();
    return (
      <Container id="/home#services">
        <h1 className="text-center mt-5 mb-3">My Service</h1>
        <Row>
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
    );
};

export default Services;