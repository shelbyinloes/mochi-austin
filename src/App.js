import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header.js';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Header />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
