import React from 'react';
import headerLogo from '../images/logos/headerLogo.png';
import { Container, Row, Col } from 'react-bootstrap';
import './../App.css'


const Footer = () => (
  <Container id="footer" fluid>
    <Row>
      <Col sm={5}>
        <img src={headerLogo} alt={"Mochi Austin Logo"} id="footerImg"/>
      </Col>
      <Col sm={3} id="footerNav">
        <bold>Austin, Texas</bold>
        <span>213 Ice Cream Ln</span>
        <span>Austin, TX 78701</span>
        <span>Get Directions</span>
        <span>(512) 555-1122</span>
      </Col>
    </Row>
  </Container>
);

export default Footer;