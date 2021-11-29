import React, { useState } from "react";

const OTP = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <>
      <div className="container">
        <div className="row card">
          <div className="col text-center">
            <h2>Verify OTP</h2>
            <p>Enter the OTP sent to you to verify your identity</p>

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

            <p>OTP Entered - {otp.join("")}</p>
            <p>
              <button
                className="buttonClear"
                onClick={(e) => setOtp([...otp.map((v) => "")])}
              >
                Clear
              </button>
              <button
                className="button"
                onClick={(e) => alert("Entered OTP is " + otp.join(""))}
              >
                Verify OTP
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTP;
