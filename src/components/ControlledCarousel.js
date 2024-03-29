import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import vt_image1 from './assests/5.jpg'
import vt_image2 from './assests/2.jpg'
import vt_image3 from './assests/3.jpg'
import vt_image4 from './assests/4.webp'
import './ControlledCarousel.css';

export default function ControlledCarousel() {
  let imagetext="passes";
  return (
    <div className='carousel'>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img className="image" src={vt_image1}  alt={imagetext}/>
          <Carousel.Caption>
            <h3>BHU VishwaNath Temple</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className='image' src={vt_image2} alt={imagetext}/>
          <Carousel.Caption>
            <h3>BHU VishwaNath Temple</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className='image' src={vt_image3} alt={imagetext}/>
          <Carousel.Caption>
            <h3>BHU VishwaNath Temple</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className='image' src={vt_image4} alt={imagetext}/>
          <Carousel.Caption>
            <h3>BHU VishwaNath Temple</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
