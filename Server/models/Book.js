import mongoose from "mongoose";

const ASU_Domain = ["Ayurveda", "Siddha","Unani"]; // Add your predefined parameters

const BookSchema = new mongoose.Schema({
    domain: {
      type: String,
      enum: ASU_Domain, // Define the allowed domains here
      required: true
    }, // The domain of the book for categorization
    title: String,
    author: String,
    publication: String,
    bookDescription: String,
    reviews:{
      type : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: true }],
      default: [] 
    }, // Array of Review
    overallRatingUser: {
      type: Number,
      default: null
    }, // Mean rating of all individual reviews' overall ratings (For normal user reviews)
    subReviewsUser: [
      {
        parameter: String, // e.g., "Accuracy of Content", "Relevance to Syllabus"
        averageRating: {
          type: Number,
          default: null
        }, // Average rating for the parameter from all the reviews (For normal user reviews)
      },
    ],
    overallRatingExpert: {
      type: Number,
      default: null
    },
    subReviewsExpert: [
      {
        parameter: String,
        averageRating: {
          type: Number,
          default: null
        },
      },
    ],
    ISBN: {
      type: String,
      unique: true, // Ensure ISBN is unique for each book
      required: true,
    },
    picturePath: String, // Add the picturePath field to store the link
});


const Book = mongoose.model("Book", BookSchema);
export default Book;