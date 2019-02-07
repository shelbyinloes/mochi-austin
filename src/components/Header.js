import React from 'react';
import headerLogo from '../images/logos/logo_transparent.png';
import { Container, Row, Col } from 'react-bootstrap';
import './../App.css'


const Header = () => (
  <Container id="header" fluid>
    <Row>
      <Col sm={5}>
        <img src={headerLogo} alt={"Mochi Austin Logo"} id="headerImg"/>
      </Col>
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

export default Header;