import './SignupLogin';

import React from 'react'

const SignupLogin=()=>{

  return (
    <div>
        <div>
            <label>Name</label><br/>
            <input placeholder='Enter Your Name'></input><br/>
            <label>Email</label><br/>
            <input placeholder='Enter Your Email' name='email' htmlFor="email"></input><br/>
            <label>Password</label><br/>
            <input placeholder='Enter Your Password' name='Password' htmlFor="Password"></input><br/>
            <label>Confirm Password</label><br/>
            <input placeholder='Enter Your Confirm Password' name='"ConfirmPassword' htmlFor="ConfirmPassword"></input><br/>
            <input type='checkbox' name='condition' htmlFor="condition"></input><span>Agree term & Conditions.</span><br/>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default SignupLogin;