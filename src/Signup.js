import React from "react";

function Signup() {
  // Define your signup component here
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        {/* Add your signup form fields here */}
        <label>
          Username:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        {/* Add more form fields as needed */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
