import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    assessmentScale: [
        {
          parameter: String, // e.g., "Accuracy of Content", "Relevance to Syllabus"
          rating: Number, // Rating out of 5
        },
      ],
      description : String,
      overallRating: Number, // Weighted mean of all the reviews
      bookId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true }], // Reference to the Book
      userId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }], // Reference to the User
      isExpert: Boolean, // To distinguish student reviews and expert reviews  (isExpert = (User.userType == Expert))
});

const Review = mongoose.model("Review", ReviewSchema);
export default Review;