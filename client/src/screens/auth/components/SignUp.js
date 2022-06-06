import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import http from "../../../axios";
const SignUp = () => {
  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const onSubmit = () => {
    if(user.password !== user.confirmPassword){
      setErrorMessage("Password does not match");
      return;
    }
    setErrorMessage("");

    http.post("/user/signup", {user : user}).then(res => {
      history.push("/auth");
    }).catch(err => {
      setErrorMessage(err.response.data.message);
    })
  };

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
                            onChange={(e) =>
                              setUser({ ...user, firstName: e.target.value })
                            }
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
                            onChange={(e) =>
                              setUser({ ...user, lastName: e.target.value })
                            }
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
                            onChange={(e) =>
                              setUser({ ...user, email: e.target.value })
                            }
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
                            onChange={(e) =>
                              setUser({ ...user, country: e.target.value })
                            }
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
                            onChange={(e) =>
                              setUser({ ...user, state: e.target.value })
                            }
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
                            onChange={(e) =>
                              setUser({ ...user, city: e.target.value })
                            }
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
                            onChange={(e) =>
                              setUser({ ...user, postalCode: e.target.value })
                            }
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
                            placeholder="Gender"
                            onChange={(e) =>
                              setUser({ ...user, gender: e.target.value })
                            }
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
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={(e) =>
                              setUser({ ...user, password: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Confirm Password*</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            onChange={(e) =>
                              setUser({
                                ...user,
                                confirmPassword: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row "></div>
                    <div className="row">

                    <div className="col-md-12 text-danger text-center">
                      {errorMessage}
                    </div>

                      <div className="col-md-12">
                        <div className="buttonSignup">
                          <button type="button" className="btn signupbtn" onClick={onSubmit}>
                            Sign Up
                          </button>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
