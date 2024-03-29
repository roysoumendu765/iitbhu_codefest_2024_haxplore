import React from 'react';
import './Main.css';
import Counter from './Counter.js';
import ControlledCarousel from './ControlledCarousel.js';
const Main = () => {
  return (
    <div class="row">
      <div class="col-12 carousel">
        <ControlledCarousel/>
      </div>
      <div class="col-12 counterdiv">
            <Counter/>
      </div>
    </div>
  )
}

export default Main;