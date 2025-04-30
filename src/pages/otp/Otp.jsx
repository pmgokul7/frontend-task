import React, { useState, useRef } from 'react';
import './otp.css';
import { Link } from 'react-router-dom';

export const Otp = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputsRef = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/\D/g, ''); // Only digits
        if (!value) return;

        const newOtp = [...otp];
        newOtp[index] = value[0];
        setOtp(newOtp);

        if (index < 5) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        const newOtp = [...otp];

        if (e.key === "Backspace") {
            e.preventDefault();

            if (!otp[index] && index > 0) {
                inputsRef.current[index - 1].focus();
                newOtp[index - 1] = "";
                setOtp(newOtp);
            } else {
                newOtp[index] = "";
                setOtp(newOtp);
            }
        }

        if (e.key === "ArrowLeft" && index > 0) {
            inputsRef.current[index - 1].focus();
        }

        if (e.key === "ArrowRight" && index < 5) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredOtp = otp.join("");
        if (enteredOtp.length === 6) {
            console.log("OTP Entered:", enteredOtp);
            // Proceed with submission logic here
        } else {
            console.log("OTP is incomplete");
            // Optionally, show an error to the user
        }
    };

    return (
        <div className="otp-container">
            <div className="otp-card">
                <section
                    className="otp-left-container"
                    style={{
                        backgroundImage: `url('/images/authLeft.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                ></section>

                <section className="otp-right-container">
                    <div className="otp-auth-box">
                        <div className="otp-auth-top">
                            <h1>Verify your Email</h1>
                            <h4>Enter your OTP from your registered email</h4>
                        </div>

                        <div className="otp-auth-mid">
                            <form onSubmit={handleSubmit}>
                                <div className="top">
                                    {otp.map((digit, idx) => (
                                        <input
                                            key={idx}
                                            type="text"
                                            inputMode="numeric"
                                            autoFocus ={idx == 0}
                                            maxLength="1"
                                            autoComplete="one-time-code"
                                            value={digit}
                                            onChange={(e) => handleChange(e, idx)}
                                            onKeyDown={(e) => handleKeyDown(e, idx)}
                                            ref={(el) => (inputsRef.current[idx] = el)}
                                            className="otp-input"
                                            aria-label={`OTP digit ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                                <input
                                    type="submit"
                                    value="Proceed"
                                    className="otp-submit-btn"
                                    disabled={otp.includes("")} // Disable if OTP is incomplete
                                />
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
