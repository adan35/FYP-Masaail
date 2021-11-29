import React from "react";

const Forgot = () => {
  return (
    <>
      <div className="container">
        <div className="row card">
          <div className="col text-center">
            <h2>Enter Your Email</h2>
            <form action="./otp">
            <span>
              <input
                className="input-email"
                id="email"
                type="text"
                placeholder="masail@gmail.com"
              />
            </span>
              <button className="btn-send">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
