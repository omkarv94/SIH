import React, { useState } from "react";
import axios from 'axios'; // Import axios if you haven't already

import "./SignUp.css";
function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();

        // Here, you can add logic to handle the registration submission.
        // For simplicity, let's just log the entered data.
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Password:", password);

        // You can send a request to your backend to create a new user account.
        // If the registration is successful, you can redirect the user to the login page or their dashboard.
        try {
            // Make a POST request to your backend registration endpoint



            const response = await fetch(`http://localhost:3000/auth/registerUser`, {
                method: "POST",
                body: {
                    firstName,
                    lastName,
                    email,
                    password
                },


            });

            // Assuming your backend returns a success message or user data
            console.log('Registration successful:', response.data);

            // You can redirect the user to the login page or their dashboard here
            // Example: window.location.href = '/login';


        } catch (error) {
            console.error('Registration failed:', error.response.data);
            // Handle registration failure, e.g., show an error message to the user
        }

    };

    return (
        <div className="registration-container">
            <div className="title"> <h2>Registration</h2></div>

            <form onSubmit={handleRegistrationSubmit}>

                <div className="firstname">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        required
                    />
                </div>
                <div className="lastname">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={handleLastNameChange}
                        required
                    />
                </div>
                <div className="email">
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
                <div className="password">
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default SignUp;