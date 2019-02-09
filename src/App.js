import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header.js';
import MochiCarousel from './components/MochiCarousel.js';
import Footer from './components/Footer.js';
import About from './components/About.js';


class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Header />
          </Col>
          <Col sm={12}>
            <MochiCarousel />
          </Col>
          <Col sm={12}>
            <About/>
          </Col>
          <Col sm={12}>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
