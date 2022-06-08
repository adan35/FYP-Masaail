import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import http from "../../../axios";
import "../auth.css"; 
const Signin = () => {
  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const onSubmit = () => {
    http.post('/user/login', { user: user }).then(res => {
      window.localStorage.setItem("token", res.data.data.token);
      history.push("/investor");
    }).catch(err => {
      setErrorMessage("Inavlid Email or Password");
    })
  }
	return (
		<div className="background">
			<div className="row siginPage">
				<div className="col-md-4">
					<div className="headerlogo">
						<h3>masaail.com</h3>
					</div>
				</div>
				<div className="col-md-4">
					<div className="container-fluid sigin-card">
						<div className="signin-form">
							<div className="card-header">
								<h3>Sign In</h3>
							</div>
							<form>
								<div className="form-group">
									<label>Email address</label>
									<input
										type="email"
										className="form-control"
										placeholder="Email" required
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
									/>
								</div>
								<div className="form-group">
									<label>Password</label>
									<input
										type="password" required
										className="form-control"
										placeholder="Password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
									/>
								</div>
								<div className="buttonSignup">
                  <p className="text-danger">{errorMessage}</p>
										<button type="button" className="btn signupbtn" onClick={onSubmit}>
											Sign in
										</button>
								</div>
								<div className="sigininContent">
									<p>
										<Link to="/auth/forgot">Forgot Password?</Link>
									</p>
									<p>
										Don't have an account? <Link to="/auth/signup">Signup</Link>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="col-md-4"></div>
			</div>
		</div>
	);
};

export default Signin;
