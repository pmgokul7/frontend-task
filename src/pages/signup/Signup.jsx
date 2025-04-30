import React, { useState } from 'react'
import "./signup.css"
import { Link, useNavigate } from 'react-router-dom'

export const Signup = () => {
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [formData, setFormdata] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormdata(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const submitSignup = (e) => {
        e.preventDefault()
        const newErrors = {
            email: "",
            password: "",
            confirmPassword: ""
        };
        if (formData.password.length < 8 || formData.password.length > 16) {
            newErrors.confirmPassword = "password should between 8 and 16 "

        }
        if (formData.password != formData.confirmPassword) {
            newErrors.confirmPassword = "passwords are not matching"
        }

        if (!formData.email) {
            newErrors.email = "required"
        }
        if (!formData.password) {
            newErrors.password = "required"
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "required"
        }

        setErrors({ ...newErrors })

        if(!newErrors.email && !newErrors.password &&!newErrors.confirmPassword){
            navigate("/verify-otp")
        }
    }
    return (
        <div className='signup-container'>
            <div className="signup-card">
                <section className='signup-left-container' style={{ backgroundImage: `url('/images/authLeft.png')`, backgroundSize: "cover", backgroundPosition: "center" }}>

                </section>

                <section className='signup-right-container'>
                    <div className="signup-auth-box">
                        <div className="signup-auth-top">
                            <h1>Register to Admin Panel</h1>
                            <h4>Enter your phone number id and password below </h4>
                        </div>

                        <div className="signup-auth-mid">
                            <form onSubmit={submitSignup}>
                                <div className="email-id-box">
                                    <label htmlFor="email">EMAIL-ID</label>
                                    <input type="text" placeholder='Enter your email id' id="email" autoFocus value={formData.email} onChange={handleChange} style={{ border: errors.email && "1px solid red" }} />
                                    {errors.email && <p className="error">{errors.email}</p>}
                                </div>
                                <div className="password-box">
                                    <label htmlFor="password">PASSWORD</label>
                                    <input type="password" placeholder='Enter your password' id="password" value={formData.password} onChange={handleChange} style={{ border: errors.password && "1px solid red" }} />
                                    {errors.password && <p className="error">{errors.password}</p>}
                                </div>
                                <div className="cconfirmPassword">
                                    <label htmlFor="signup-confirm-password">CONFIRM PASSWORD</label>
                                    <input type="text" placeholder='Enter your confirm password' id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} style={{ border: errors.confirmPassword && "1px solid red" }} />
                                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                                </div>

                                <input type="submit" value="Register" />
                            </form>
                        </div>

                        <div className="signup-auth-bottom">
                            <h5>
                                Already have an account? <Link to="/signin">Login</Link>
                            </h5>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}
