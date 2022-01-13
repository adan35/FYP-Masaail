import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
	return (
		<>
			<div>
				<div className="background">
					<div className="row siginPage">
						<div className="col-md-2">
							<div className="headerlogo">
								<h3>masaail.com</h3>
							</div>
						</div>
						<div className="col-md-8">
							<div className="container-fluid sigin-card signupPage">
								<div className="signup-form">
									<div className="card-header">
										<h3>Sign Up</h3>
									</div>
									<form>
                                        <div className="row">
                                            <div className="col-md-6">
                                            <div className="form-group">
													<label>First Name*</label>
													<input
														type="text"
														className="form-control"
														placeholder="First Name"
														required
													/>
												</div>
                                            </div>
                                            <div className="col-md-6">
                                            <div className="form-group">
													<label>Last Name*</label>
													<input
														type="text"
														className="form-control"
														placeholder="Last Name"
														required
													/>
												</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                            <div className="form-group">
													<label>Email*</label>
													<input
														type="email"
														className="form-control"
														placeholder="Email"
														required
													/>
												</div>
                                            </div>
                                            <div className="col-md-6">
                                            <div className="form-group">
													<label>Country*</label>
													<input
														type="text"
														className="form-control"
														placeholder="Country"
														required
													/>
												</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                            <div className="form-group">
													<label>State*</label>
													<input
														type="text"
														className="form-control"
														placeholder="State"
														required
													/>
												</div>
                                            </div>
                                            <div className="col-md-6">
                                            <div className="form-group">
													<label>City*</label>
													<input
														type="text"
														className="form-control"
														placeholder="City"
														required
													/>
												</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                            <div className="form-group">
													<label>Postal Code*</label>
													<input
														type="text"
														className="form-control"
														placeholder="First Name"
														required
													/>
												</div>
                                            </div>
                                            <div className="col-md-6">
                                            <div className="form-group">
													<label>Gender*</label>
													<input
														type="text"
														className="form-control"
														placeholder="Last Name"
														required
													/>
												</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                            <div className="form-group">
													<label>Password*</label>
													<input
														type="text"
														className="form-control"
														placeholder="Password"
														required
													/>
												</div>
                                            </div>
                                            <div className="col-md-6">
                                            <div className="form-group">
													<label>Confirm Password*</label>
													<input
														type="text"
														className="form-control"
														placeholder="Confirm Password"
														required
													/>
												</div>
                                            </div>
                                        </div>
										<div className="row ">
										</div>
                                        <div className="row">
                                            <div className="col-md-12">
                                            <div className="buttonSignup">
											<Link type="submit" to="/investor">
												<button type="submit" className="btn signupbtn">
													Sign Up
												</button>
											</Link>
										</div>
										<div className="sigininContent">
											
											<p>
												Already have an account?{" "}
												<Link to="/auth/signin">Sign In</Link>
											</p>
										</div>
                                            </div>
                                        </div>
										
									</form>
								</div>
							</div>
						</div>
						<div className="col-md-2"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;
