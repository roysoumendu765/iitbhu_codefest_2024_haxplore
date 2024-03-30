import './AdminLogin';
import SignupLogin from './SignupLogin';

const AdminLogin=()=>{

    return(
        <div>
           <div>
           <div>
                <h2>Welcome back!</h2>
                <h4>Please enter your details</h4>
            </div>
            <div>
                <label>Email</label><br/>
                <input className='emailInput' placeholder='Enter your email' name='email' htmlFor="email"></input><br/>
                <label>Password</label><br/>
                <input className='passwordInput' placeholder='Enter your Password' name='password' htmlFor="password"></input><br/>
                <h4>Forgot Password</h4>
                <button>Sign in</button>
                <div><span></span><p>Sign In with Google</p></div>
                <div><h4>Don't have an account ?</h4><SignupLogin/></div>
            </div>
           </div>
           
        </div>
    )
}
export default AdminLogin;