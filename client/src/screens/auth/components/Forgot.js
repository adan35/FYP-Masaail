import React from "react";
import { Link } from "react-router-dom";
import "../auth.css";

const Forgot = () => {
	return (
		<>
			<div className="background">
				<div className="row siginPage">
					<div className="col-md-3">
						<div className="headerlogo">
							<h3>masaail.com</h3>
						</div>
					</div>
					<div className="col-md-6">
						<div className="container-fluid sigin-card">
							<div className="signin-form">
                <p>Enter your email to get OTP</p>
								<form>
									<div className="form-group">
										<label>Email address</label>
										<input
											type="email"
											className="form-control"
											placeholder="Email"
											required
										/>
									</div>
									<div className="buttonSignup">
										<Link type="submit" to="/auth/otp">
											<button type="submit" className="btn signupbtn">
												Send
											</button>
										</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="col-md-3"></div>
				</div>
			</div>
		</>
	);
};

export default Forgot;
