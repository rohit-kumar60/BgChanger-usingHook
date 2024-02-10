import { Link } from "react-router-dom";
import './signup.css';

function SignUp() {

    return (
        <div className="signup-container">
            <h1 className="signup-title">Sign Up</h1>

            <form className="signup-form">
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    className="signup-input"
                />
                <input
                    type="text"
                    placeholder="Email"
                    id="email"
                    className="signup-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="signup-input"
                />

                <button className="signup-button">Sign Up</button>
            </form>
            <div className="signup-link">
                <p>Have an account?</p>
                <Link to="/sign-in" className="signup-link-text">
                    Sign in
                </Link>
            </div>
        </div>
    );
}

export default SignUp;
