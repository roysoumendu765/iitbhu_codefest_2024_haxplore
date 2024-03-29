import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div class="row">
      <div class="col-12 carousel">
        
      </div>
      <div class="col-12 counterdiv">
            <div class="row">
              <div class="col-6 d-flex justify-content-center" >
                <div class="column">
                  <div class="card" style={{ minWidth: '200px', color: 'orange', border: '0'}}>
                    <p><i class="fa fa-user"></i></p>
                    <h3 class="fw-bold">200+</h3>
                    <p class="fs-4">Visitors</p>
                  </div>
                </div>
              </div>
              <div class="col-6 d-flex justify-content-center">
              <div class="column" >
                  <div class="card" style={{ minWidth: '200px', color: 'orange', border: '0'}}>
                    <p><i class="fa fa-user"></i></p>
                    <h3 class="fw-bold">11+</h3>
                    <p class="fs-4">Temples</p>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Main