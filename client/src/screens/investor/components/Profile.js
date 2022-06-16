import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import http from "../../../axios";
import "../../auth/auth.css"; 
const Profile = () => {
  
	return (
		<div className="d-flex">
      <div className="row d-flex">
        <div className="col md-2 profile-image d-flex align-items-center justify-content-center">
          <img src="http://localhost:8000/uploads/user.png" />
        </div>
        <div className="col md-6 d-flex flex-column justify-content-center">
          <div className="row d-flex flex-column">
            <div className="col">
              <div className="title py-2 my-2">Username</div>
            </div>
            <div className="col">
              <div className="title py-2 my-2">Username</div>
            </div>
            <div className="col">
              <div className="title py-2 my-2">Username</div>
            </div>
          </div>
        </div>
      </div>
    </div>
	);
};

export default Profile;
