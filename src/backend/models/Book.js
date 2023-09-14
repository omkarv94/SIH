import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    domain: String, // The domain of the book for categorization
    title: String,
    author: String,
    publication: String,
    bookDescription: String,
    reviews:{
      type : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: true }],
      default: [] 
    }, // Array of Review
    overallRatingUser: Number, // Mean rating of all individual reviews' overall ratings (For normal user reviews)
    subReviewsUser: [
      {
        parameter: String, // e.g., "Accuracy of Content", "Relevance to Syllabus"
        averageRating: Number, // Average rating for the parameter from all the reviews (For normal user reviews)
      },
    ],
    overallRatingExpert: Number,
    subReviewsExpert: [
      {
        parameter: String,
        averageRating: Number,
      },
    ],
});


const Book = mongoose.model("Book", BookSchema);
export default Book;