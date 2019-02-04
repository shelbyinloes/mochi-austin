import React from 'react';
import './../App.css'
import { Container, Carousel } from 'react-bootstrap';
import mochi2 from '../images/mochi2.jpg';
import mochi3 from '../images/mochi3.jpg';
import mochi4 from '../images/mochi4.jpg';
import mochi5 from '../images/mochi5.jpg';
import mochi6 from '../images/mochi6.jpg';

// still need to add text over images

const MochiCarousel = () => (
  <Container id="carousel" fluid>
    <Carousel>
      <Carousel.Item className="mochiImg">
        <img
          className="d-block w-100"
          src={mochi2}
          alt="Mochi slide"
        />
      </Carousel.Item>
      <Carousel.Item className="mochiImg">
        <img
          className="d-block w-100"
          src={mochi3}
          alt="Mochi slide"
        />
      </Carousel.Item>
      <Carousel.Item className="mochiImg">
        <img
          className="d-block w-100"
          src={mochi4}
          alt="Mochi slide"
        />
      </Carousel.Item>
      <Carousel.Item className="mochiImg">
        <img
          className="d-block w-100"
          src={mochi5}
          alt="Mochi slide"
        />
      </Carousel.Item>      
      <Carousel.Item className="mochiImg">
        <img
          className="d-block w-100"
          src={mochi6}
          alt="Mochi slide"
        />
      </Carousel.Item>
    </Carousel>
  </Container>
);

export default MochiCarousel;