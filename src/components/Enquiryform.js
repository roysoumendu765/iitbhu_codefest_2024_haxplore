import React from 'react'
import './Enquiryform.css';

const Enquiryform = () => {
    return (
        <div className=' enguiry-container  mb-2 d-flex justify-content-center'>
            <div className='form-container w-50 mt-2 p-5 neumorphic-input rounded-2'>
                <h2 className='text-center'>Contact Us...</h2>
                <form>
                    <div class="form-group">
                        <label className='mt-3 neumorphic-label-enquiry'>Name</label>
                        <input type="text" className="neumorphic-input-enguiry form-control mt-1" placeholder="Enter Your Name" />
                    </div>
                    <div class="form-group">
                        <label className='mt-3 neumorphic-label-enquiry' >Email address</label>
                        <input type="email" className="form-control neumorphic-input-enguiry mt-1" placeholder="name@example.com" />
                    </div>
                    <div class="form-group">
                        <label className='mt-3 neumorphic-label-enquiry' >Write your query here !</label>
                        <textarea class="neumorphic-input-enguiry form-control mt-1" rows="5"></textarea>
                    </div>
                    <div className="d-flex justify-content-center  mt-2">
                        <button class="neumorphic-button" type="submit">SUBMIT</button>
                        {/* btn btn-primary ps-3 pe-3  */}
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Enquiryform