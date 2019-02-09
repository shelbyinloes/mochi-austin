import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import singleMochi from '../images/singleMochi.jpg';
import './../App.css'


const About = () => (
  <Container fluid>
    <Row>
      <Col sm={5}>
        <h2>What is Mochi?</h2>
        <p>You and I know Mochi Ice Cream as a rice ball with delicious premium ice cream on the 
          inside, but the word mochi actually has a larger meaning in Japan.In Mochi Ice Cream, 
          the word “mochi” mostly refers to the ball of sweet rice dough 
          that encapsulates that delicious ice cream. In Japan, mochi in general is a type of rice 
          cake. A piece of mochi about the size of a small matchbox is about the equivalent of 
          eating an entire bowl of rice. This made it a popular meal amongst Samurai, as they had to 
          find portable food that could keep them satiated for long periods of time. It was made out 
          of red rice, and was used in religious rituals in the Shinto religion, as it was viewed as 
          a “food of the Gods”.  It’s known for being a symbol of good fortune and happy marriages.</p>
      </Col>
      <Col sm={7}>
        <img src={singleMochi} alt={"Mochi Austin Logo"}/>
      </Col>
    </Row>
  </Container>
);

export default About;