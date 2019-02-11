import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import tea from '../images/tea.jpeg';
import './../App.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const Drinks = () => (
  <Container>
    <Row>
      <Col sm={6} id="aboutMochi">
      <div>
          <Fade>
            <h2>But wait, there's more!</h2>
                <p>In addition to serving you the best quality mochi, we know it isn't 
                    for everyone. We also have a variety of traditional Japanese teas, 
                    bubble teas, hot chocolate, and other assorted beverages. </p>
          </Fade>
          </div>
      </Col>
      <Col sm={6} id="drinksImg">
        <Zoom>
          <img src={tea} alt={"Machta tea"}/>
        </Zoom>
      </Col>
    </Row>
  </Container>
);

export default Drinks;