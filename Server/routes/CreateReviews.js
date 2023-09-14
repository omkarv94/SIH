import express from "express";
import { createReview } from "../controllers/reviewUser.js";

const router = express.Router();

// Define a POST route for the "/createReview" endpoint and specify the "createReview" controller function to handle the request.
router.post("/createReview", createReview);

export default router;