import Review from '../models/Review.js'; // Import your Review model
import Book from '../models/Book.js';
import User from '../models/User.js';


/* READ */
export const getBooks= async (req, res) => {
    try {
      const book = await Book.find(); //all the books in the db
      res.status(200).json(book);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };