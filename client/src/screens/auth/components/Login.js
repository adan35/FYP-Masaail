import React from 'react'
import '../../../App.css';
const Login = () => {
    return (
        <div>
          <header>
            <div class="logo">
              <h3>MASAAIL.com</h3>
            </div>
            <div class="login_text">
              <p>Login</p>
            </div>
          </header>
    
          <div class="main">
            <p class="sign" align="center">Sign in</p>
            <form class="form1">
              <input class="un " type="text" align="center" placeholder="Username" />
              <input class="pass" type="password" align="center" placeholder="Password" />
              <a class="submit" align="center">Sign in</a>
              <p class="forgot" align="center"><a href="#">Forgot Password?</a></p>
              <p class="signup">Don't have an account? <a href="#">Signup</a></p>
            </form>                      
          </div>
        </div>
      );
}

export default Login;