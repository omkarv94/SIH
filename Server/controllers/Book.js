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

/* READ - particular book id*/
//router.get("/:BookId/posts", verifyToken, getBookFromID); from posts in routes
export const getBookFromID = async (req, res) => {
    try {
      const { BookId } = req.params;
      const book = await Book.find({ BookId }); //gt postid of this user
      res.status(200).json(book);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };