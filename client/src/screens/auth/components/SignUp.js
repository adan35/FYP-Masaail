import React from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {
    return (
        <>
            <div>
          <header>
            <div className="logo">
              <h3>MASAAIL.com</h3>
            </div>
            <div className="login_text">
              <p>SignUp</p>
            </div>
          </header>
    
          <div className="main-sign">
            <p className="sign" align="center">Sign Up</p>
            <form className="form1">
            <div class="container">
            <div class="row g-3 mb-1">
                <div class="col-sm-6">
                    <label for="fistName" class="form-label"> First Name</label>
                    <input id="first Name " type="text" class="form-control" placeholder="Muhammad" required/>
                    <div class="invalid-feedback"> Valid First name Is Required</div>
                </div>
                <div class="col-sm-6 ">
                    <label for="lastName" class="form-label"> Last Name</label>
                    <input id="last Name " type="text" class="form-control" placeholder="Haris" required/>
                    <div class="invalid-feedback"> Valid Last name Is Required</div>
                </div>
            </div>
            <div class="col-12 mb-2">
                <label for="username" class="form-label">Email</label>
                <div class="input-group">
                    <span class="input-group-text">@</span>

                    <input id="user Name " type="text" class="form-control" placeholder="mharis@example.com" required/>
                </div>
            </div>

            <div class="invalid-feedback"> Valid Input Is Required</div>

            <div class="row my-2">
                <div class="col-md-5">
                    <label for="Province" class="form-label">Province</label>
                    <select id="pname" class="form-control" placeholder="Choose....." required>
                        <option value="">Choose...</option>
                        <option value="P">Punjab</option>
                        <option value="S">Sindh</option>
                        <option value="B">Balochistan</option>
                        <option value="K">KPK</option>
                    </select>
                    <div class="invalid-feedback"> Valid Input Is Required</div>

                </div>
                <div class="col-md-4">
                    <label for="City" class="form-label">City</label>
                    <select id="cname" class="form-control" placeholder="Choose....." required>
                        <option value="">Choose...</option>
                        <option value="L">Lahore</option>
                        <option value="K">Karachi</option>
                        <option value="I">Islamabad</option>
                        <option value="G">Gujranwala</option>
                    </select>
                    <div class="invalid-feedback"> Valid Input Is Required</div>
                </div>

                <div class="col-md-3">
                    <label for="Code" class="form-label">Postal Code</label>
                    <input id="postalcode" type=" number " class="form-control" placeholder="042" required/>
                    <div class="invalid-feedback"> Valid Input Is Required</div>
                </div>
            </div>
            <div class="col-12 mb-2">
                <label for="address" class="form-label">Address</label>
                <input id="Address " type="text" class="form-control" placeholder="Wahdat Road etc" required/>
            </div>
            <div class="invalid-feedback"> Valid Input Is Required</div>
            <div class="row mb-1">
                <div class="col-sm-6">
                    <label for="Password" class="form-label">Password</label>
                    <input id="siPassword" type="password" class="form-control" required/>
                    <div class="invalid-feedback"> Valid Input Is Required</div>
                </div>
                <div class="col-sm-6 ">
                    <label for="lastName" class="form-label">Confirm Password</label>
                    <input id="srcpassword" type="password" class="form-control" required/>
                    <div class="invalid-feedback"> Valid Input Is Required</div>
                </div>
            </div>
            <div class="txtarea mb-3 ">
                <label for="comment">Business Idea:</label>
                <textarea class="form-control" rows="5" id="comment" name="text" placeholder="Why It Occured to you...."></textarea>
            </div>
            <div class="signupbtn">
            <button type="button" class="submit-signup">Sign Up</button>
           </div>
           <br/>
           <p class="linkl text-center " >Already Registered? <a href=""  > Login</a> </p>
        </div>
            </form>                      
          </div>
        </div>
        </>
    )
}

export default SignUp;