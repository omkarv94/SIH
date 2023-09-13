import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './Books.js';
import BookDetails from './BookDetails.js';
import Navbar from './Navbar.js';
import Signup from './Signup.js'; // Import the Signup module

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
