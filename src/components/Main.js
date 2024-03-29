import React from 'react';
import './Main.css';
import ControlledCarousel from './ControlledCarousel.js';
import Ticketpage from './Ticketpage.js';

const Main = () => {
  return (
    <div className='row'>
      <div className='col-12 carousel'>
        <ControlledCarousel/>
      </div>
      <div className='col-12 ticketpage'>
            <Ticketpage/>
      </div>
    </div>
  )
}

export default Main;