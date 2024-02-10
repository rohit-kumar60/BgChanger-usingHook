import { useState } from "react";
import './signin.css';
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

function SignIn() {
    return (
        <div className="signin-container">
            <h1 className="signin-title">
                Sign In
            </h1>

            <form className="signin-form">
                <input
                    type="text"
                    placeholder="Email"
                    id="email"
                    className="signin-input"
                />

                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="signin-input"
                />

                <button className="signin-button">
                    Sign In
                </button>
            </form>

            <div className="signin-link">
                <p>Don&apos;t Have an account?</p>
                <Link to='/sign-up' className="signin-link-text">
                    Sign Up
                </Link>
            </div>
        </div>
    )
}

export default SignIn;
