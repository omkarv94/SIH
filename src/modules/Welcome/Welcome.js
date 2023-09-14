import React from 'react';
import './Welcome.css'; // Import the CSS file

function WelcomePage() {
    return (
        <div className="welcome-container">
            <h1>Welcome to the Future of Medical Textbook Assessment!</h1>
            <p>We understand the critical role that textbooks play in shaping the education and future of medical students. With a plethora of textbooks claiming to meet syllabus standards,
                 it's essential to distinguish between the exceptional and the substandard.

            </p><p>    Our mission is to revolutionize the way medical textbooks are assessed and selected. We introduce an innovative online platform that empowers experts and educators worldwide to contribute their valuable insights and assessments of medical textbooks.</p>
            <div class="login-section">
                <div class="login-box">
                    <div class="user-login">
                        <h2>Continue as Student</h2>
                        <p>
                            This login is for those who want to look for books according to their ratings and relevancy.
                            You can also submit reviews, but you should have certain documents to upload.
                        </p>
                    </div>
                    <div class="button-container">
                        <button onClick={() => redirectToNormalUserLogin()}>Login</button>
                    </div>
                </div>
                <div class="login-box">
                    <div class="expert-login">
                        <h2>Continue as Expert</h2>
                        <p>
                            This login is for those who have relevant knowledge and certified documents to provide genuine reviews on medical books.
                        </p>
                    </div>
                    <div class="button-container">
                        <button onClick={() => redirectToExpertLogin()}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function redirectToNormalUserLogin() {
    // Implement the redirection logic to the normal user login page
    // Example: window.location.href = '/normal-user-login';
}

function redirectToExpertLogin() {
    // Implement the redirection logic to the expert login page
    // Example: window.location.href = '/expert-login';
}

export default WelcomePage;
