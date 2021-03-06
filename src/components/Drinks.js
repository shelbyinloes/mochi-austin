import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import tea from '../images/tea.jpeg';
import './../App.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const Drinks = () => (
  <Container>
    <Row>
      <Col lg={6} md={12} id="aboutMochi">
        <div>
          <Fade left>
            <h2>Thirsty?</h2>
                <p>In addition to serving you the best quality mochi, we also 
                    have some of the best drinks in town too. We have a 
                    variety of traditional Japanese teas, bubble teas, 
                    hot chocolate, and other assorted beverages. </p>
          </Fade>
        </div>
      </Col>
      <Col lg={6} md={12} id="drinksImg">
        <Zoom>
          <img src={tea} alt={"Machta tea"}/>
        </Zoom>
      </Col>
    </Row>
  </Container>
);

export default Drinks;