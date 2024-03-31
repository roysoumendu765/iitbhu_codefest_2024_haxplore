import React, { useState, useEffect } from 'react';
import './Counter.css';
import axios from 'axios';

const Counter = () => {
  const [visitorCount, setVisitorCount] = useState(0); // Initial visitor count
  const [templeCount, setTempleCount] = useState(0); // Initial temple count
  // let a = 5, b = 6, c = 7;

  // const check = async () => {
  //   let res = await axios.get('http://localhost:8000/booking/getcount');
  //   console.log(res.data);
  // }
  // const checkPut = async () => {
  //   // let res = await axios.patch('http://localhost:8000/booking/postcount/1', {
  //   //   idnumber: 1,
  //   //   one: 1,
  //   //   two: 2,
  //   //   three: 3
  //   // });
  //   // console.log(res.data);
  //   await axios.patch('http://localhost:8000/booking/postcount/1', {
  //     idnumber: 1,
  //     one: 1,
  //     two: 2,
  //     three: 3
  //   }).then(res => console.log(res.data))
  //     .catch(err => console.error(err));
  //   // console.log(res.data);
  // }

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
    // check();
    // checkPut();

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
