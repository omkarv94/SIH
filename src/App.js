import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './Books.js'; // Create this component
import BookDetails from './BookDetails.js'; // Create this component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
      </Routes>
    </Router>

  );
}

export default App;