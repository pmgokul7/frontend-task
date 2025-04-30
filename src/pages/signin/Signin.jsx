import React, { useState } from 'react'
import "./signin.css"
import { Link } from 'react-router-dom'

export const Signin = () => {
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const [formData, setFormdata] = useState({
        email: "",
        password: ""
    })

    const onSubmit = (e) => {
        e.preventDefault();
        const newErrors = {
            email: "", password: ""
        }
        if (!formData.email) {
            newErrors.email = "required"
        }
        if (!formData.password) {
            newErrors.password = "required"
        }
        setErrors({ ...newErrors })
    }

    const onChangeFields = e => {
        setFormdata((previous) => {
            setFormdata({ ...previous, [e.target.id]: e.target.values })
        })
    }

    return (
        <div className='signin-container'>
            <div className="signin-card">
                <section className='signin-left-container' style={{ backgroundImage: `url('/images/authLeft.png')`, backgroundSize: "cover", backgroundPosition: "center" }}>

                </section>

                <section className='signin-right-container'>
                    <div className="signin-auth-box">
                        <div className="signin-auth-top">
                            <h1>Log in to Admin Panel</h1>
                            <h4>Enter your email id and password below </h4>
                        </div>

                        <div className="signin-auth-mid">
                            <form onSubmit={onSubmit}>
                                <div className="email-id-box">
                                    <label htmlFor="email">EMAIL-ID</label>
                                    <input type="text" placeholder='EMAIL ID' id="email" autoFocus value={formData.email} onChange={onChangeFields} style={{ border: errors.email && "1px solid red" }} />
                                    {errors.email && <p className="error">{errors.email}</p>}
                                </div>
                                <div className="password-box">
                                    <label htmlFor="password">PASSWORD</label>
                                    <input type="password" placeholder='PASSWORD' id="password" value={formData.password} onChange={onChangeFields} style={{ border: errors.email && "1px solid red" }} />
                                    {errors.password && <p className="error">{errors.password}</p>}
                                </div>

                                <input type="submit" value="Log in" />
                            </form>
                        </div>

                        <div className="signin-auth-bottom">
                            <h5>
                                Dont't have an account? <Link to="/signup">Register</Link>
                            </h5>
                        </div>

                    </div>

                </section>
            </div>
        </div>
    )
}