import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import http from "../../../axios";
import "../auth.css";

const OTP = () => {
	const [otp, setOtp] = useState(new Array(4).fill(""));
  const history = useHistory();
  const [error, setError] = useState("");

	const handleChange = (element, index) => {
		if (isNaN(element.value)) return false;

		setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

		//Focus next input
		if (element.nextSibling) {
			element.nextSibling.focus();
		}
	};

  const onSubmit = () => {
    http.post('/user/verify/otp', {otp: otp.join(""), email: window.localStorage.getItem('email')}).then(res => {
      history.push("/auth/reset");
    }).catch(err => {
      setError("Inavlid OTP");
    });
  }

	return (
		<>
			<div className="background">
				<div className="row siginPage">
					<div className="col-md-2">
						<div className="headerlogo">
							<h3>masaail.com</h3>
						</div>
					</div>
					<div className="col-md-8">
						<div className="container-fluid otp-card">
							<div className="card-header">
								<h3>Verify OTP</h3>
								<p>Enter the OTP sent to you to verify your identity</p>
							</div>
							<form>
								<div className="form-group">
									<div className="otps">
										{otp.map((data, index) => {
											return (
												<input
													className="otp-field"
													type="text"
													name="otp"
													maxLength="1"
													key={index}
													value={data}
													onChange={(e) => handleChange(e.target, index)}
													onFocus={(e) => e.target.select()}
												/>
											);
										})}
										<p className="paragraph">OTP Entered - {otp.join("")}</p>
									</div>
									<div className="otpButton">
                    <p className="text-danger">{error}</p>
										<p>
											<button
												className="otpbutton"
												onClick={(e) => setOtp([...otp.map((v) => "")])}
											>
												Clear
											</button>
											<button
                        type="button"
												className="otpbutton"
												onClick={onSubmit}
											>
												Verify OTP
											</button>
										</p>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-md-2"></div>
				</div>
			</div>
		</>
	);
};

export default OTP;
