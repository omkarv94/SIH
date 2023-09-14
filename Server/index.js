import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authUser from "./routes/authUser.js";
import reviewsRoute from "./routes/CreateReviews.js";
import auth from "./routes/auth.js";
import { loginUser, registerUSER } from "./controllers/auth.js";
import { createReview } from "./controllers/reviewUser.js";

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
app.post("/createReview", createReview);

/* ROUTES */
app.use("/auth", auth);
app.use("/authUser", authUser);
app.use("/reviewsRoute", reviewsRoute);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 3001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME ONLY */
    //  Book.insertMany(bookData);
  })
  .catch((error) => console.log(`${error} did not connect`));
