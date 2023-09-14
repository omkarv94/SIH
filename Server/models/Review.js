import mongoose from "mongoose";

const assessmentParameters = ['Accuracy of Content', 'Relevance to Syllabus', 'Clarity of Explanations', 'Up-to-Date Information', 'Educational Value']; // Add your predefined parameters

const ReviewSchema = new mongoose.Schema({
    assessmentScale: [
      {
        parameter: {
          type: String,
          enum: assessmentParameters, // Use the predefined parameters as allowed values
          required: true,
        },
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