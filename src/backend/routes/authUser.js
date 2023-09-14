import express from "express";
import { loginUser } from "../controllers/auth.js";

const router = express.Router();

// Define a POST route for the "/loginUser" endpoint and specify the "login" controller function to handle the request.
router.post("/loginUser", loginUser);

export default router;