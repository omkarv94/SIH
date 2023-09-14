import express from "express";
import { getBooks } from "../controllers/Book.js";
// import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Define a POST route for the "/getBooks" endpoint and specify the "getBooks" controller function to handle the request.
router.get("/getBooks", getBooks);

export default router;