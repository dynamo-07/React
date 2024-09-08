import { useState } from "react";
import "./LoginSignup.css"
const LoginSignup = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>

            <form className="inputs my-">
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>

                <label>
                    Password:
                    <input type="password" name="password" />
                </label>

                <button type="submit">Sign Up</button>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default LoginSignup;
