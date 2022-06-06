import { useState } from "react";
import { useHistory } from "react-router-dom";
import http from "../../../axios";

function Reset () {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const onSubmit = () => {
    if (password !== confirmPassword) {
      return;
    }

    http.post("/user/change/password", { password: password, email: window.localStorage.getItem('email') }).then(() => {
     history.push("/auth");
    })
  }
  return (
    <>
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
								<h3>Reset Password</h3>
							</div>
							<form>
								<div className="form-group">
									<label>Password</label>
									<input
										type="password"
										className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
										placeholder="Password" required
									/>
								</div>
                <div className="form-group">
									<label>Confirm Password</label>
									<input
										type="password"
										className="form-control"
                    onChange={(e) => setConfirmPassword(e.target.value)}
										placeholder="Confirm Password" required
									/>
								</div>
								<div className="buttonSignup">
										<button type="button" className="btn signupbtn" onClick={onSubmit}>
											Reset Password
										</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="col-md-4"></div>
			</div>
		</div>
    </>
  )
}

export default Reset;