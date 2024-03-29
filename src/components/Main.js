import React from 'react';
import './Main.css';
import ControlledCarousel from './ControlledCarousel.js';
import Ticketpage from './Ticketpage.js';
import Counter from './Counter.js';

const Main = () => {
    return (
        <div className='row'>
            <div className='col-12 carousel'>
                <ControlledCarousel />
            </div>
                <div className="counter">
                    <Counter />
                </div>
                <div className='ticketpage'>
                    <Ticketpage />
                </div>
        </div>
    )
}

export default Main;