import Review from '../models/Review.js'; // Import your Review model
import Book from '../models/Book.js';
import User from '../models/User.js';

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
    // Fetch the book by its ID
    const book = await Book.findById(bookId);

    if (!book) {
      throw new Error("Book not found");
    }

    // Create a new Review document and save it to the database
    const savedReview = await new Review(newReview).save();

    // Add the ObjectId of the saved review to the book's reviews array
    book.reviews.push(savedReview._id);

    // Calculate the updated overallRating for the book
    const totalRatings = await Review.aggregate([
      {
        $match: {
          _id: { $in: book.reviews },
        },
      },
      {
        $group: {
          _id: null,
          averageRating: { $avg: "$overallRating" },
        },
      },
    ]);

    const updatedOverallRating = totalRatings[0]?.averageRating || 0;

    // Update the book's overallRating field
    book.overallRatingUser = updatedOverallRating;

    // Save the updated book document
    await book.save();

    return book; // Optionally, you can return the updated book document.
  } catch (error) {
    throw error;
  }
};


// Function to calculate the overall rating based on assessment scale and weights
const calculateOverallRating = (assessmentScale) => {
  // Define the assessment scale parameters and their weights
  const assessmentScaleWeights = {
    'Accuracy of Content': 0.2, // Example weights (adjust as needed)
    'Relevance to Syllabus': 0.15,
    'Clarity of Explanations':0.15 ,
    'Up-to-Date Information':0.2,
    'Educational Value':0.3
  };

  // Calculate the weighted sum of assessment scale parameters
  let weightedSum = 0;
  let totalWeight = 0;

  for (const parameter of assessmentScale) {
    const { parameter: paramName, rating } = parameter;

    if (paramName in assessmentScaleWeights) {
      const weight = assessmentScaleWeights[paramName];
      weightedSum += rating * weight;
      totalWeight += weight;
    }
  }

  // Calculate the overall rating (weighted mean)
  const overallRating = totalWeight > 0 ? weightedSum / totalWeight : 0;

  return overallRating;
};

export const createReview = async (req, res) => {
  try {
    const {
      assessmentScale,
      description,
      bookId, // Assuming you receive bookId from the frontend
      userId, // Assuming you receive userId from the frontend
      isExpert, // Assuming you receive isExpert from the frontend
    } = req.body;

    // Calculate the overall rating
    const overallRating = calculateOverallRating(assessmentScale);

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
    // const savedReview = await newReview.save();

    const savedReview = await updateBookRatings(bookId, newReview);  //Book ratings get updated
    await updateUserMyReviewCart(userId, savedReview); //user myReviews get updated

    res.status(201).json(savedReview); // Send the saved review as a JSON response

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
