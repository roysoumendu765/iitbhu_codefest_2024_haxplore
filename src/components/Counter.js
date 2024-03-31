import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  const [visitorCount, setVisitorCount] = useState(0); // Initial visitor count
  const [templeCount, setTempleCount] = useState(0); // Initial temple count

  useEffect(() => {
    let currentVisitorCount = 0;
    let currentTempleCount = 0;
    
    const interval = setInterval(() => {
      currentVisitorCount += 1;
      currentTempleCount += 1;

      // Update visitor count
      if (currentVisitorCount <= 80) {
        setVisitorCount(currentVisitorCount);
      }

      // Update temple count
      if (currentTempleCount <= 10) {
        setTempleCount(currentTempleCount);
      }

      // Clear interval after reaching 200
      if (currentVisitorCount > 200 && currentTempleCount > 200) {
        clearInterval(interval);
      }
    }, 10); // Update every 10 milliseconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (    
    <div className="row d-flex align-items-center">
      <div className="col-12 col-md-4 d-flex justify-content-center">
        <div className="card column text-center">
            <p><i className="fa fa-user"></i></p>
            <h3 className="fw-bold"><span id="visitors">{visitorCount}</span>+</h3>
            <p className="fs-4">Visitors</p>
        </div>
      </div>
      <div className="col-12 col-md-4 d-flex justify-content-center">
        <div className="card column text-center">
            <p><i className="fa fa-user"></i></p>
            <h3 className="fw-bold"><span id="visitors">{visitorCount}</span>+</h3>
            <p className="fs-4">Visitors</p>
        </div>
      </div>
      <div className="col-12 col-md-4 d-flex justify-content-center">
        <div className="card column text-center">
            <p><i className="fa fa-user"></i></p>
            <h3 className="fw-bold"><span id="temples">{templeCount}</span>+</h3>
            <p className="fs-4">Temples</p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
