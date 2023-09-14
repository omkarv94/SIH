import React, { useState } from "react";
import "./SignIn.css"
function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        // Here, you can add logic to handle the login submission.
        // For simplicity, let's just log the entered email and password.
        console.log("Email:", email);
        console.log("Password:", password);

        // You can send a request to your backend for authentication.
        // If the authentication is successful, you can redirect the user to their dashboard or another page.
    };

    return (
        <div className="login-container">
            <div className="title"><h2>Login</h2></div>

            <form onSubmit={handleLoginSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default SignIn;