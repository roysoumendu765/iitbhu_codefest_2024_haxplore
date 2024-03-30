import React from 'react'
import './Enquiryform';

const Enquiryform = () => {
    return (    
        <div className='mt-2 mb-2 d-flex justify-content-center'>
            <div className='form-container p-5 neumorphic-input rounded-2'>
                <h2 className='text-center text-decoration-underline'>Asked Your Query</h2>
                <form>
                    <div class="form-group">
                        <label className='mt-3 neumorphic-label-enquiry'>Name</label>
                        <input type="text" className="neumorphic-input-enguiry form-control mt-1" placeholder="Enter Your Name" />
                    </div>
                    <div class="form-group">
                        <label className='mt-3 neumorphic-label-enquiry' >Email address</label>
                        <input  type="email" className="form-control neumorphic-input-enguiry mt-1" placeholder="name@example.com" />
                    </div>
                    <div class="form-group">
                        <label className='mt-3 neumorphic-label-enquiry' >Write your query here !</label>
                        <textarea class="neumorphic-input-enguiry form-control mt-1" rows="5"></textarea>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Enquiryform