import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import singleMochi from '../images/singleMochi.jpg';
import './../App.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const About = () => (
  <Container>
    <Row>
      <Col sm={6} id="aboutMochi">
        <div>
          <Fade left>
            <h2>What is Mochi?</h2>
              <p>You and I know Mochi Ice Cream as a rice ball with delicious premium ice cream on the 
              inside, but the word mochi actually has a larger meaning in Japan. In Mochi Ice Cream, 
              the word “mochi” mostly refers to the ball of sweet rice dough 
              that encapsulates that delicious ice cream. It’s known for being a symbol of good 
              fortune and happy marriages.</p>
          </Fade>
        </div>
      </Col>
      <Col sm={5} id="aboutImg">
        <Zoom>
          <img src={singleMochi} alt={"Mochi Austin Logo"}/>
        </Zoom>
      </Col>
    </Row>
  </Container>
);

export default About;