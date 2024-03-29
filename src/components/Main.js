import React from 'react';
import './Main.css';
import ControlledCarousel from './ControlledCarousel.js';
const Main = () => {
  return (
    <div className="row">
      <div className="col-12 carousel">
        <ControlledCarousel/>
      </div>
    </div>
  )
}

export default Main;