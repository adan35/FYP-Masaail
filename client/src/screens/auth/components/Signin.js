import React from "react";
import { Link } from "react-router-dom";
import "../auth.css";
const Signin = () => {
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
									/>
								</div>
								<div className="form-group">
									<label>Password</label>
									<input
										type="password" required
										className="form-control"
										placeholder="Password"
									/>
								</div>
								<div className="buttonSignup">
									<Link type="submit" to="/investor">
										<button type="submit" className="btn signupbtn">
											Sign in
										</button>
									</Link>
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
