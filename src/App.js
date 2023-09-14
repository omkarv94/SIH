import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './frontend/modules/Books/Books.js'; // Create this component
import BookDetails from './frontend/modules/bookDetails/BookDetails.js'; // Create this component
import ReviewForm from "./frontend/modules/AddReview/AddReview.js";


function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="/book/:bookId/addReview" element={<ReviewForm />} />

      </Routes>
    </Router>

  );
}

export default App;