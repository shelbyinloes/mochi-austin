import React from 'react';
import verticalLogo from '../images/logos/verticallogo.png';
import { Container, Row, Col } from 'react-bootstrap';
import './../App.css'


const Footer = () => (
  <Container id="footer" fluid>
    <Row>
      <Col sm={3}>
        <img src={verticalLogo} alt={"Mochi Austin Logo"} id="footerImg"/>
      </Col>
      <Col sm={3} id="footerAddress">
        <bold>Austin, Texas</bold>
        <span>213 Ice Cream Ln</span>
        <span>Austin, TX 78701</span>
        <span>Get Directions</span>
        <span>(512) 555-1122</span>
      </Col>
      <Col sm={3} id="footerHours">
        <bold>Hours:</bold>
        <span>Monday - Thursday:</span>
        <span>11am - 9pm</span>
        <span>Friday - Sunday:</span>
        <span>10am - 10pm</span>
      </Col>
      <Col sm={3} id="footerSocial">
        <h1>Icons</h1>

      </Col>
    </Row>
  </Container>
);

export default Footer;