import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fruit from '../images/fruit.jpg';
import './../App.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const Ingredients = () => (
  <Container>
    <Row>
      <Col sm={5} id="ingredientImg">
        <Zoom>
          <img src={fruit} alt={"Fruit"}/>
        </Zoom>
      </Col>
      <Col sm={6} id="aboutMochi">
        <div>
          <Fade>
            <h2>Ingredients you can trust</h2>
            <p>Everything you see on our menu is made in house, from 
              scratch. We try our best to source our ingredients locally 
              to support local farms in your area. All of our fruits are 
              organic and the milk is from grass-fed cows. Customers are 
              our number one priority, and we strive to show you that every 
              day.</p>
        </Fade>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Ingredients;