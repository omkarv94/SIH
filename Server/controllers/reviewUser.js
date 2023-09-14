import {Review, User, Book} from '../models/Review.js'; // Import your Review model


// Function to update the user's MyReview cart
const updateUserMyReviewCart = async (userId, newReview) => {
    try {
      const user = await User.findById(userId);
      user.myReviews.push(newReview);
      await user.save();
    } catch (error) {
      throw error;
    }
  };

// Function to update the Book entity's ratings
const updateBookRatings = async (bookId, newReview) => {
    try {
      const book = await Book.findById(bookId);
      // Update the book's overall rating and assessment scale based on newReview
      // ...
      await book.save();
    } catch (error) {
      throw error;
    }
  };

export const createReview = async (req, res) => {
  try {
    const {
      assessmentScale,
      description,
      overallRating,
      bookId, // Assuming you receive bookId from the frontend
      userId, // Assuming you receive userId from the frontend
      isExpert, // Assuming you receive isExpert from the frontend
    } = req.body;

    // Create a new instance of the Review model
    const newReview = new Review({
      assessmentScale,
      description,
      overallRating,
      bookId,
      userId,
      isExpert,
    });

    // Save the new review to the database
    const savedReview = await newReview.save();

    await updateBookRatings(bookId, savedReview);
    await updateUserMyReviewCart(userId, savedReview);

    res.status(201).json(savedReview); // Send the saved review as a JSON response

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
