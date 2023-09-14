import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from  "path";
import { fileURLToPath } from "url";
import authUser from "./routes/authUser.js";
import reviewsRoute from "./routes/CreateReviews.js";
import bookRoute from "./routes/Book.js"
import auth from "./routes/auth.js";
import { loginUser, registerUSER } from "./controllers/auth.js";
import { createReview} from "./controllers/reviewUser.js";
import {getBooks} from "./controllers/Book.js";
import bookData from "./data/index.js";
import Book from './models/Book.js';
import { verifyToken } from "./middleware/auth.js";

// CONFIGURATIONS
const __filename = fileURLToPath(import.meta.url); //to grab file url
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// app.use("/assets", express.static(path.join(__dirname, "public/assets"))); //to store images locally


/* Endpoints */
app.post("/registerUser", registerUSER); //Normal User registration
app.post("/loginUser", loginUser);   //Normal User login.....
app.post("/createReview",verifyToken, createReview);
app.get("/getBooks", getBooks)

/* ROUTES */
app.use("/auth", auth);
app.use("/authUser", authUser);
app.use("/reviewsRoute", reviewsRoute);
app.use("/bookRoute", bookRoute);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME ONLY */
    //  Book.insertMany(bookData);
    //UPDATE - picturepath
    // Define the picturePath value you want to set for all books
  const newPicturePath = './Public/assets/Book.jpg';
  // Update all books with the newPicturePath
  /////// Update all books with the newPicturePath
  // Book.updateMany({}, { picturePath: newPicturePath })
  // .then((result) => {
  //   console.log("Books updated successfully:", result);
  // })
  // .catch((err) => {
  //   console.error("Error updating books:", err);
  // });

  })
  .catch((error) => console.log(`${error} did not connect`));
