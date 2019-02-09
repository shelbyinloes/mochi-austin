import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header.js';
import MochiCarousel from './components/MochiCarousel.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Header />
          </Col>
          <Col sm={12}>
            <Switch>
              <Route path='/' component={MochiCarousel} exact />
              <Route path='/intro' component={About} />
            </Switch>
          </Col>
          <Col sm={12}>
            <Footer />
          </Col>
        </Row>
      </Container>
      </BrowserRouter>
    );
  }
}

export default App;
