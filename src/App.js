import React from "react";
import ReviewForm from "./ReviewForm";
import axios from "axios";
import './App.css';

const App = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Send data to your server (replace with your server endpoint)
      await axios.post("/api/reviews", values);

      // Reset the form after successful submission
      resetForm();
      alert("Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Book Review</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 review-section">
          <ReviewForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default App;
