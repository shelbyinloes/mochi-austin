import React from 'react';
import verticalLogo from '../images/logos/verticallogo.png';
import mochiFacebook from '../images/mochiFacebook.png';
import mochiInsta from '../images/mochiInsta.png';
import mochiPinterest from '../images/mochiPinterest.png';
import mochiTwitter from '../images/mochiTwitter.png';
import { Container, Row, Col } from 'react-bootstrap';
import './../App.css'


const Footer = () => (
  <Container id="footer" fluid>
    <Row>
      <Col sm={3}>
        <img src={verticalLogo} alt={"Mochi Austin Logo"} id="footerImg"/>
      </Col>
      <Col sm={3} id="footerAddress">
        <span style={{fontSize: '20px'}}>Austin, Texas</span>
        <span>213 Ice Cream Ln</span>
        <span>Austin, TX 78701</span>
        <span>Get Directions</span>
        <span>(512) 555-1122</span>
      </Col>
      <Col sm={3} id="footerHours">
        <span style={{fontSize: '20px'}}>Hours:</span>
        <span>Monday - Thursday:</span>
        <span>11am - 9pm</span>
        <span>Friday - Sunday:</span>
        <span>10am - 10pm</span>
      </Col>
      <Col sm={3} id="footerSocial">
        <img src={mochiFacebook} alt={"Facebook"} className="socialImg"/>
        <img src={mochiInsta} alt={"Instagram"} className="socialImg"/>
        <img src={mochiPinterest} alt={"Pinterest"} className="socialImg"/>
        <img src={mochiTwitter} alt={"Twitter"} className="socialImg"/>
      </Col>
      <Col sm={12} id="footerCopy">
        Shelby Inloes, 2019 - Design based off of POKE AUSTIN website
      </Col>
    </Row>
  </Container>
);

export default Footer;