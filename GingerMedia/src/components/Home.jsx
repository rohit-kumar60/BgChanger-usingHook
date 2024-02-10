import './home.css';
import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="homepage-container">
            <h1 className="homepage-title">Welcome to My App</h1>
            <div className="homepage-buttons">
                <Link to="/sign-in" className="homepage-button">Sign In</Link>
                <Link to="/sign-up" className="homepage-button">Sign Up</Link>
            </div>
        </div>
    );
}

export default Home;
