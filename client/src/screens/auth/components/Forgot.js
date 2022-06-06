import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import http from "../../../axios";
import "../auth.css";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();
  const onSubmit = () => {
    window.localStorage.setItem('email', email);
    http.post('/user/send/otp', {email: email}).then(res => {
      history.push("/auth/otp");
    }).catch(err => {});
  }
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
                      onChange={(e) => setEmail(e.target.value)}
											required
										/>
									</div>
									<div className="buttonSignup">
											<button type="button" className="btn signupbtn" onClick={onSubmit}>
												Send
											</button>
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
