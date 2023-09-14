import express from "express";
import { getBooks, getBookFromID } from "../controllers/Book.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Define a POST route for the "/getBooks" endpoint and specify the "getBooks" controller function to handle the request.
router.get("/getBooks", getBooks);

//read a book by bookid
router.get("/:BookId", verifyToken, getBookFromID);

export default router;