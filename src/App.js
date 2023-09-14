import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Widgets/navbar/Navbar";
import Books from"./modules/Books/Books"
import SignUp from './modules/SignUp/SignUp.js';
import SignIn from './modules/SignIn/SignIn.js';
import BookDetails from './modules/BookDetails/BookDetails.js'; // Create this component
import ReviewForm from "./modules/AddReview/AddReview.js";
import WelcomePage from "./modules/Welcome/Welcome.js";
 // Import the Signup module

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
          <Route path="/book/:bookId/addReview" element={<ReviewForm />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
