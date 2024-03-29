import React from 'react';
import './Main.css';
import Counter from './Counter.js';
import Ticketpage from './Ticketpage.js';

const Main = () => {
  return (
    <div className='row'>
      <div className='col-12 carousel'>
    
      </div>
      <div className='col-12 counterdiv'>
            <Counter/>
      </div>
      <div className='col-12 ticketpage'>
            <Ticketpage/>
      </div>
    </div>
  )
}

export default Main;