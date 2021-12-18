import React from 'react'
import { Link } from "react-router-dom";
import '../auth.css';
const Signin = () => {
    return (
        <div>
          <header>
            <div className="logo">
              <h3>MASAAIL.com</h3>
            </div>
            <div className="login_text">
              <p>Login</p>
            </div>
          </header>
    
          <div className="main">
            <p className="sign" align="center">Sign in</p>
            <form className="form1">
              <input className="un " type="text" align="center" placeholder="Username" />
              <input className="pass" type="password" align="center" placeholder="Password" />
              <Link className="submit" align="center" to="#">Sign in</Link>
              <p className="forgot" align="center"><Link to="#">Forgot Password?</Link></p>
              <p className="signup">Don't have an account? <Link to="#">Signup</Link></p>
            </form>                      
          </div>
        </div>
      );
}

export default Signin;