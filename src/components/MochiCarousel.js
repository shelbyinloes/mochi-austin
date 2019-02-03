import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import mochi from '../images/mochi.jpg';
import mochi1 from '../images/mochi1.jpg';
import mochi2 from '../images/mochi2.jpg';
import './../App.css'


const MochiCarousel = () => (
  <Container id="carousel" fluid>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mochi}
          alt="Mochi slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mochi1}
          alt="Mochi slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mochi2}
          alt="Mochi slide"
        />
      </Carousel.Item>
    </Carousel>
  </Container>
);

export default MochiCarousel;