import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true, //no duplicate
    },
    password: {
      type: String,
      required: true,
      min: 4,
    },
    myReviews: {
      type:[{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}],
      default: []
    },
    // RatedBooks: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'}, 
    userType: { type: String, enum: ['Expert', 'Normal User'], required: true },
    
    ////EXPERT/////
    approvalStatus: {
      type: Boolean,
      default: false
    }, 
    // For Experts, approved by NCISM
    university: String,
    degree: String,
    specialization: String,
    documents: [{ fileName: String, filePath: String }] // Array of uploaded documents
  },
  { timestamps: true }  //gives dates of when created, updated
);

const User = mongoose.model("User", UserSchema);
export default User;