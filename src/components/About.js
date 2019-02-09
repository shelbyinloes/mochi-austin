import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './../App.css'


const About = () => (
  <Container id="header" fluid>
    <Row>
      <Col sm={6} id="headerNav">
        <span>Home</span>
        <span>Menu</span>
        <span>About</span>
        <span>Location</span>
        <span>Contact</span>
      </Col>
    </Row>
  </Container>
);

export default About;