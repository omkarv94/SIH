import express from "express";
import { registerUSER } from "../controllers/auth.js";

const router = express.Router();

// Define a POST route for the "/loginUser" endpoint and specify the "login" controller function to handle the request.
router.post("/registerUser", registerUSER);

export default router;