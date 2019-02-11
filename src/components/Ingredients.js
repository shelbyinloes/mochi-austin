import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import milk from '../images/milk.jpeg';
import './../App.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const Ingredients = () => (
  <Container fluid>
    <Row>
      <Col sm={5} id="ingredientImg">
        <Zoom>
          <img src={milk} alt={"Milk and fruit"}/>
        </Zoom>
      </Col>
      <Col sm={6} id="aboutMochi">
        <div>
          <Fade>
            <h2>Ingredients you can trust</h2>
            <p>You and I know Mochi Ice Cream as a rice ball with delicious premium ice cream on the 
            inside, but the word mochi actually has a larger meaning in Japan. In Mochi Ice Cream, 
            the word “mochi” mostly refers to the ball of sweet rice dough 
            that encapsulates that delicious ice cream. It’s known for being a symbol of good 
            fortune and happy marriages.</p>
        </Fade>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Ingredients;